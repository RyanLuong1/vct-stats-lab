import {Option} from "./types"
import "../public/a"

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

  export const AGENT_PATH: Object = {
    "astra": "../public/agents/astra.png",
    "breach": "../public/agents/breach.png",
    "brimstone": "../public/agents/brimstone.png",
    "chamber": "../public/agents/chamber.png",
    "clove": "../public/agents/clove.png",
    "cypher": "../public/agents/cypher.png",
    "deadlock": "../public/agents/deadlock.png",
    "fade": "../public/agents/fade.png",
    "gekko": "../public/agents/gekko.png",
    "harbor": "../public/agents/harbor.png",
    "iso": "../public/agents/iso.png",
    "jett": "../public/agents/jett.png",
    "kayo": "../public/agents/kayo.png",
    "killjoy": "../public/agents/killjoy.png",
    "neon": "../public/agents/neon.png",
    "omen": "../public/agents/omen.png",
    "phoenix": "../public/agents/phoenix.png",
    "raze": "../public/agents/raze.png",
    "reyna": "../public/agents/reyna.png",
    "sage": "../public/agents/sage.png",
    "skye": "../public/agents/skye.png",
    "sova": "../public/agents/sova.png",
    "viper": "../public/agents/viper.png",
    "yoru": "../public/agents/yoru.png"
  }