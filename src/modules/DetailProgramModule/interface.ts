export interface ClientDetail {
  picture: string;
  name: string;
  position: string;
  desc: string;
}

export interface ImpactDetail {
  src: string;
  title: string;
}

export interface BaseData {
  id: string;
  src: string;
  name: string;
  desc: string;
  moments: string[];
  impacts: [ImpactDetail, ImpactDetail, ImpactDetail];
  clients: ClientDetail[];
  date: string;
}

export const birdepNames = [
  "Adkesma",
  "Bismit",
  "Humas",
  "Olahraga",
  "Pengmas",
  "PI",
  "PKKM",
  "PSDM",
  "PTI",
  "Senbud",
  "SKI",
  "Kastrat",
  "Media",
] as const;

export type BirdepName = (typeof birdepNames)[number];

export interface ProgramData extends BaseData {
  birdep: BirdepName;
}

export interface PortfolioData extends BaseData {
  link: string;
  type: "internal" | "external";
}
