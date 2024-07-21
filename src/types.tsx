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