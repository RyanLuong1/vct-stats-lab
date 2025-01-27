export type NavItem = {
    title: string;
    description: string;
    path: string;
  };

export type Option = {
    value: string;
    label: string;
  }
  
export type MultiSelectDropdownProps = {
      label: string;
      options: Option[];
      selectedOptions: string[];
      onSelectionChange: (selectedOptions: string[]) => void;
  }

export type SearchBarProps = {
    label: string;
    nameList: string[]
  }

export type SingleSelectDropdownProps = {
  label: string;
  options: string[];
  defaultOption: string;
}

export type CustomAxisTickProps = {
  x: number;
  y: number;
  payload: {
    value: string;
  }
}

export type Agent = {
  img: string;
  usage: number;
}

// export type Player = {
//   player: string,
//   agents: Agent[];
// }