import Contact from "@/components/elements/AnyQuestion/Contact";
import About from "./sections/about";
import ProjectFilter from "./sections/project-filter";

const PortfolioModule = () => {
  return (
    <main className="flex flex-col gap-10 w-full lg:-translate-y-30">
      <About/>
      <ProjectFilter/>
      <Contact/>
    </main>
  );
};

export default PortfolioModule;
