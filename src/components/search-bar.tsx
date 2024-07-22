"use client";
import React, { useState, useEffect, useRef, ChangeEvent} from 'react';
import { SearchBarProps } from '@/types';

// const nameList = ['Adam', 'Steve', 'Karen', 'Rachel', 'Racque'];

const SearchBar: React.FC<SearchBarProps> = ({label, nameList}): React.JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [filteredNames, setFilteredNames] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filtered = nameList.filter((name) => name.toLowerCase().includes(value.toLowerCase()));
      setFilteredNames(filtered);
      setIsDropdownOpen(true);
    } else {
      setFilteredNames([]);
      setIsDropdownOpen(false);
    }
  };

  const handleButtonClick = (name: string) => {
    setQuery(name);
    setIsDropdownOpen(false);
  }

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
      <label htmlFor="search-bar" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        id="search-bar"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="w-full p-2 text-xs border border-gray-300 rounded-none focus:ring-blue-500 focus:border-blue-500"
      />
      {isDropdownOpen && filteredNames.length > 0 && (
        <ul ref={dropdownRef} className="absolute z-10 w-full bg-white border border-gray-300 rounded-none shadow-lg mt-1 max-h-60 overflow-auto">
          {filteredNames.map((name, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <button onClick={() => handleButtonClick(name)} className="w-full text-xs text-left">{name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;