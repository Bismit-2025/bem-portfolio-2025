import React from "react";
import HeroSection from "./components/HeroSection";
import OurProjectSection from "./components/OurProjectSection";
import OurBenefitSection from "./components/OurBenefitSection";
import OurPartnerSection from "./components/OurPartnersSection";
import OurClientSection from "./components/OurClientSection";
import ImportantLinksSection from "./components/ImportantLinksSection";
import CTA from "@/components/CTA";

const LandingPageModule = () => {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <OurProjectSection />
      <OurBenefitSection />
      <OurPartnerSection />
      <ImportantLinksSection />
      <OurClientSection />
      <div className=" px-10 md:px-20 my-20">
        <CTA />
      </div>
    </main>
  );
};

export default LandingPageModule;
