import Overview from "./sections/overview";
import OurPrograms from "./sections/our-programs";
import Contact from "@/components/elements/AnyQuestion/Contact";

const ProgramModule = () => {
  return (
    <div className="overflow-hidden">
    
      <div className="w-full relative">
        <div className="-right-10 -top-26 rotate-60 aspect-square w-28 max-lg:w-20 -z-10 border-pacil-blue-700 border-2 bg-transparent absolute"></div>
        <img
          src="/square-red.svg"
          alt="icon"
          className="lg:-top-16 max-lg:-bottom-14 left-0 absolute max-lg:w-10"
        />
        <img
          src="/circle-blue.svg"
          alt="icon"
          className=" -bottom-6 lg:-left-1 absolute max-lg:-right-1 -z-10 max-lg:w-18"
        />
        <img
          src="/circle-red.svg"
          alt="icon"
          className="lg:-bottom-6 lg:-right-2 absolute max-lg:hidden"
        />
        <div className="w-16 lg:-bottom-12 lg:-right-10 max-lg:hidden aspect-square bg-transparent border-white border-2 rounded-full absolute"></div>
        <div className="w-16 max-lg:-right-3 max-lg:-bottom-10 lg:-bottom-10 lg:-left-3 -z-10 aspect-square bg-transparent border-white border-2 rounded-full absolute"></div>
        <Overview />
      </div>
      <OurPrograms />
      <Contact />
    </div>
  );
};

export default ProgramModule;
