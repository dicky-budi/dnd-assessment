import { CardType, OptionsData } from "./types";

const options: OptionsData[] = [
  {
    label: "Windows Migration",
    value: "windows_migration",
    parent_id: "available_services",
  },
  {
    label: "Managed Services",
    value: "managed_services",
    parent_id: "available_services",
  },
  {
    label: "Cloud Migration Services",
    value: "cloud_migration_services",
    parent_id: "available_services",
  },
  { label: "eWarung", value: "ewarung", parent_id: "available_services" },
  {
    label: "Axrail Commerce",
    value: "axrail_commerce",
    parent_id: "available_services",
  },
  {
    label: "E-Invoice",
    value: "e_invoice",
    parent_id: "available_services",
  },
];

const cardType: CardType[] = [
  { id: "available_services", title: "Available Services" },
  { id: "selected_services", title: "Selected Services" },
];

export { options, cardType };
