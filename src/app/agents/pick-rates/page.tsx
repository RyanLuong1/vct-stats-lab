"use client"

import React, {useState} from "react";
import MultiSelectDropdown from "@/components/multi-select-dropdown-menu";
import SearchBar from "@/components/search-bar";
import SingleSelectDropdown from "@/components/single-select-dropdown-menu";
import { SEASONS, STAGES, MAPS, VIEWMODE } from "@/constants";
import BarGraphWithImages from "@/components/pick-rates-components/pick-rate-graph";
import { AGENT_PATH } from "@/constants";

function getAgentImagePath(agentName: string): string | undefined {
    return AGENT_PATH[agentName as keyof typeof AGENT_PATH];
  }

const example_data = [
    {
        player: "supamen",
        agents: [
            {name: "omen", img: getAgentImagePath("omen"), usage: 300},
            {name: "clove", img: getAgentImagePath("clove"), usage: 300},
        ]
    },
    {
        player: "Derrek",
        agents: [
            {name: "gekko", img: getAgentImagePath("viper"), usage: 300},
            {name: "fade", img: getAgentImagePath("fade"), usage: 300},
            {name: "sova", img: getAgentImagePath("sova"), usage: 300}
        ]
    }
]

const PickRates = () => {
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>(SEASONS.map(option => option.value));
    const [selectedStages, setSelectedStages] = useState<string[]>(STAGES.map(option => option.value));
    const [selectedMaps, setSelectedMaps] = useState<string[]>(MAPS.map(option => option.value));
    const [selectedTeams, setSelectedTeams] = useState<string[]>(['Adam', 'Steve', 'Karen', 'Rachel', 'Racque']);
    const [SelectedViewMode, setViewMode] = useState<string[]>(VIEWMODE)
    const [selectedOpponents, setSelectedOpponents] = useState<string[]>([])
    const handleSeasonsChange = (newSelection: string[]) => {
        setSelectedStages(newSelection);
    }
    const handleStagesChange = (newSelection: string[]) => {
        setSelectedSeasons(newSelection)
    }
    const handleMapsChange = (newSelection: string[]) => {
        setSelectedMaps(newSelection)
    }
    return (
        <>
        <div className="flex flex-col w-[800px] h-[600px] bg-gray-200 border-2 border-dashed border-gray-500 mx-auto my-4">
                <div className="flex flex-row border-2 border-dashed border-blue-500 p-2"> 
                    <MultiSelectDropdown label="Season" options={SEASONS} selectedOptions={selectedSeasons} onSelectionChange={handleSeasonsChange}/>
                    <MultiSelectDropdown label="Stage" options={STAGES} selectedOptions={selectedStages} onSelectionChange={handleStagesChange}/>
                    <MultiSelectDropdown label="Map" options={MAPS} selectedOptions={selectedMaps} onSelectionChange={handleMapsChange}/>
                </div>
                <div className="flex flex-row border-2 border-dashed border-blue-500 p-2">
                    <SearchBar label="Team" nameList={selectedTeams}/>
                    <SingleSelectDropdown label="Player or Team View" options={VIEWMODE} defaultOption="Player"/>  
                    </div> 
                <div>
                    <BarGraphWithImages/>
                </div>
            </div>
        </>
    )
}

export default PickRates;