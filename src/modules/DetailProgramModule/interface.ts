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
  impacts: ImpactDetail[];
  clients: ClientDetail[];
  date: string;
}

export interface ProgramData extends BaseData {}

export interface PortfolioData extends BaseData {
  link: string;
  type: "internal" | "external";
}
