"use client";

import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { LEFT_IMAGES, RIGHT_IMAGES } from "../const";
import MarqueeRow from "../components/MarqueeRow";
import MarqueeColumn from "../components/MarqueeColumn";

export default function Hero() {
  return (
    <section className="relative md:px-10 max-md:gap-7  max-md:flex-col flex overflow-hidden max-h-screen md:justify-between  ">
      <MarqueeColumn
        images={LEFT_IMAGES}
        duration={40}
        className="hidden md:flex"
      />

      <div className="flex px-10 lg:px-20 flex-col items-center mt-10 md:mt-72 text-center gap-5 lg:gap-9">
        <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold">
          <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>
        <p className="max-lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus
          exercitationem itaque, expedita officia labore iure tempora pariatur.
          Perferendis voluptates quos magnam necessitatibus nostrum obcaecati
          saepe suscipit distinctio, exercitationem dolorum.
        </p>
        <Button className="flex items-center gap-3">
          <BiSearch /> <span className="max-lg:text-sm">Explore More</span>
        </Button>
      </div>
      <div className="md:hidden flex flex-col gap-4">
        <MarqueeRow images={LEFT_IMAGES} duration={40} />
        <MarqueeRow images={LEFT_IMAGES} duration={50} reverse={true} />
      </div>
      <MarqueeColumn
        images={RIGHT_IMAGES}
        duration={50}
        reverse={true}
        className="hidden md:flex"
      />
      <div className="pointer-events-none max-md:hidden absolute bottom-0 left-0 w-full h-96 bg-linear-to-t from-gray-100 via-gray-100 to-transparent z-20" />
    </section>
  );
}
