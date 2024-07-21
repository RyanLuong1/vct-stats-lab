// components/MultiSelectDropdown.tsx
"use client"
import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Option, MultiSelectDropdownProps } from '@/types';


const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> =  ({label, options, selectedOptions, onSelectionChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOptions, setSelectedOptions] = useState<string[]>(options.map(option => option.value));
  const dropdownRef = useRef<HTMLDivElement>(null);
  const allOption = {value: "all", label: "All"}
  const toggleDropdown = () => setIsOpen(!isOpen);
  const isAllSelected = selectedOptions.length == options.length;
  const message = isAllSelected ? "All" : "Multiple values"
  
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value == "all") {
      if (isAllSelected) {
        onSelectionChange([])
      }
      else {
        onSelectionChange(options.map(option => option.value))
      }
    }
    else {
        let newSelections;
        if (selectedOptions.includes(value)) {
          newSelections = selectedOptions.filter(option => option !== value);
        } else {
          newSelections = [...selectedOptions, value];
        }

        if (newSelections.length === options.length) {
          onSelectionChange(options.map(option => option.value));
        } else {
          onSelectionChange(newSelections);
        }
    };
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="max-w-sm mx-auto">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-left"
        >
          {message}
        </button>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-10 mt-1 w-12/12 bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <label className="flex items-center px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                type="checkbox"
                value="all"
                checked={isAllSelected}
                onChange={handleOptionChange}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">{allOption.label}</span>
            </label>
            {options.map(option => (
              <label key={option.value} className="flex items-center px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={handleOptionChange}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
