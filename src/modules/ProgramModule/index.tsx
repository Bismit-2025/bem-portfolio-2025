import Overview from "./sections/overview";
import OurPrograms from "./sections/our-programs";
import { Programs } from "./programs";

const ProgramModule = () => {
  return (
    <>
      <Overview />
      <OurPrograms data={Programs} />
    </>
  );
};

export default ProgramModule;
