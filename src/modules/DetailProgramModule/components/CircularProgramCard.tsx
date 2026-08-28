import React from "react";
import { cn } from "@/lib/utils";

interface CircularProgramCardProps {
  image: string;
  title: string;
  description: string;
  period?: string;
  className?: string;
}

export default function CircularProgramCard({
  image,
  title,

  className,
}: CircularProgramCardProps) {
  return (
    <div
      className={cn(
        "relative w-[300px] md:w-[450px] rounded-2xl overflow-hidden shadow-lg shadow-pacil-blue-500/20 border border-gray-100 select-none md:h-80 transition-all duration-300",
        className,
      )}
    >
      <div className="relative h-[300px] md:h-[280px] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      {/* Body Text */}
      <div className="relative z-99 -mt-12 bg-white rounded-t-2xl pt-6 px-6 pb-8 md:px-10 flex flex-col h-[70px]">
        <div className=" items-center mb-4 justify-center">
          <h2 className="text-xl md:text-4xl text-center font-extrabold">
            <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
