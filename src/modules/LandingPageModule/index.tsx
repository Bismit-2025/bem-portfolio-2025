import React from "react";
import HeroSection from "./components/HeroSection"; 
import OurProjectSection from "./components/OurProjectSection";
import OurBenefitSection from "./components/OurBenefitSection";
import OurPartnerSection from "./components/OurPartnersSection";
import OurClientSection from "./components/OurClientSection";

const LandingPageModule = () => {
  return (
    <main className="flex flex-col w-full">

      <HeroSection />
      <OurProjectSection />
      <OurBenefitSection />
      <OurPartnerSection />
      <OurClientSection />
    </main>
  );
};

export default LandingPageModule;