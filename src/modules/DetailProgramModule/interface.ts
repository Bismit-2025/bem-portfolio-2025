interface ClientDetail {
  picture: string;
  name: string;
  position: string;
  desc: string;
}

interface ImpactDetail {
  src: string;
  title: string;
}

interface BaseData {
  name: string;
  desc: string;
  moments: string[];
  impacts: ImpactDetail[];
  clients: ClientDetail[];
}

interface ProgramData extends BaseData {
  date: string;
}

interface PortfolioData extends BaseData {
  link: string;
}