
import AboutHeroSection from "./components/AboutHeroSection";
import KepanitiaanSection from "./components/KepanitiaanSection";
import TimKamiSection from "./components/TimKamiSection";
import UnitKegiatanSection from "./components/UnitKegiatanSection";
import VisiMisiSection from "./components/VisiMisiSection";

const AboutUsModule = () => {
  return(
  <main className="flex flex-col w-full">
    <AboutHeroSection />
    <VisiMisiSection />
    <TimKamiSection />
    <KepanitiaanSection />
    <UnitKegiatanSection />
  </main>
  );
};

export default AboutUsModule;
