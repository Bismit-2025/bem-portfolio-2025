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
}

export interface ProgramData extends BaseData {
  date: string;
}

export interface PortfolioData extends BaseData {
  link: string;
}
