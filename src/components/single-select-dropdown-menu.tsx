"use client"
import { useState, useEffect, useRef} from 'react';
import { SingleSelectDropdownProps } from '@/types';


const SingleSelectDropdown: React.FC<SingleSelectDropdownProps> = ({ label, options, defaultOption }) => {
    const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
  
    return (
      <div className="relative w-64 mx-auto">
        <label htmlFor="single-select-dropdown" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-2 text-xs border border-gray-300 rounded-none focus:ring-blue-500 focus:border-blue-500 text-left bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {selectedOption}
          </button>
          {isDropdownOpen && (
            <ul ref={dropdownRef} className="absolute z-10 w-full bg-white border border-gray-300 rounded-none shadow-lg mt-1">
              {options.map((option, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button onClick={() => handleOptionClick(option)} className="w-full text-xs text-left">
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default SingleSelectDropdown;
