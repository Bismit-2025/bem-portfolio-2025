import About from "./sections/about";
import ProjectFilter from "./sections/project-filter";

const PortfolioModule = () => {
  return (
    <main className="flex flex-col gap-10 w-full">
      <About/>
      <ProjectFilter/>
    </main>
  );
};

export default PortfolioModule;
