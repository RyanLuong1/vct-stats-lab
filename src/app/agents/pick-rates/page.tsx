"use client"

import React, {useState} from "react";
import MultiSelectDropdown from "@/components/multi-select-dropdown-menu";
import { SEASONS } from "@/constants";

const PickRates = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(SEASONS.map(option => option.value));
    const handleSelectionChange = (newSelection: string[]) => {
        setSelectedOptions(newSelection);
    }
    return (
        <>
        <div className="flex flex-col w-[600px] h-[400px] bg-gray-200 border-2 border-dashed border-gray-500 mx-auto my-4">
                <div className="flex flex-row"> 
                <MultiSelectDropdown label="Year" options={SEASONS} selectedOptions={selectedOptions} onSelectionChange={handleSelectionChange}/>
                <MultiSelectDropdown label="Year" options={SEASONS} selectedOptions={selectedOptions} onSelectionChange={handleSelectionChange}/>
                <MultiSelectDropdown label="Year" options={SEASONS} selectedOptions={selectedOptions} onSelectionChange={handleSelectionChange}/>

                </div>
                <div></div> 
                <div></div>
            </div>
        </>
    )
}

export default PickRates;