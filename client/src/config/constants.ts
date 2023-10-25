import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export type TabType = { name: string, icon: string, alt: string, title: string};
export type TabsType = TabType[];
export type DecalStateType = { stateProperty: "logoDecal" | "fullDecal", filterTab: "logoShirt" | "stylishShirt" };
export type DecalType = { logo: DecalStateType, full: DecalStateType };

export const EditorTabs: TabsType = [
  {
    name: "colorPicker",
    icon: swatch,
    alt: "Color picker icon, a swatch wheel",
    title: "Choose your shirt color"
  },
  {
    name: "filePicker",
    icon: fileIcon,
    alt: "File picker icon, a orange color file",
    title: "Pick a file to display the logo"
  },
  {
    name: "aiPrompt",
    icon: ai,
    alt: "AI prompt icon, a robot head",
    title: "Create a texture with AI help"
  }
];

export const FilterTabs: TabsType = [
  {
    name: "logoShirt",
    icon: logoShirt,
    alt: "Logo decal icon, a green shirt with the number 10",
    title: "Display logo on the shirt"
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    alt: "Texture decal icon, a orange shirt with some spots of paint",
    title: "Display texture on the shirt"
  }
];

export const DecalTypes: DecalType = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt"
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt"
  }
};
