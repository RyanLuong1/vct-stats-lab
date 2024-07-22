import {Option} from "./types"

export const SEASONS: Option[] = [
    {"value": "2021", label: "2021"},
    {"value": "2022", label: "2022"},
    {"value": "2023", label: "2023"},
    {"value": "2024", label: "2024"}
  ]

  export const VIEWMODE: string[] = [
    "Player", "Team"
  ]

  export const STAGES: Option[] = [
    {"value": "Champions Tour 2024: Americas Kickoff", label: "Champions Tour 2024: Americas Kickoff"},
    {"value": "Champions Tour 2024: EMEA Kickoff", label: "Champions Tour 2024: EMEA Kickoff"},
    {"value": "Champions Tour 2024: Pacific Kickoff", label: "Champions Tour 2024: Pacific Kickoff"}
  ]
  //need to call api for stages based on the year

  export const MAPS: Option[] = [
    {"value": "Ascent", label: "Ascent"},
    {"value": "Bind", label: "Bind"},
    {"value": "Haven", label: "Haven"}
  ]