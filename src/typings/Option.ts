export interface Option {
  label: string;
  value: string;
}

export interface MenuOption extends Option {
  url: string;
  children?: MenuOption[];
}
