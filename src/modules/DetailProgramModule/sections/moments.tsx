"use client";

import { useState } from "react";
import { MomentDetail } from "../interface";

export default function Moments({ moments }: { moments: MomentDetail[] }) {
  const totalMoments = moments.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalMoments);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalMoments) % totalMoments);
  };

  const calculateOffset = (
    index: number,
    currentActive: number,
    total: number
  ) => {
    let diff = index - currentActive;
    if (Math.abs(diff) > total / 2) {
      if (diff > 0) diff -= total;
      else diff += total;
    }
    return diff;
  };

  const getCardStyle = (index: number): React.CSSProperties => {
    const offset = calculateOffset(index, activeIndex, totalMoments);
    const isActive = offset === 0;

    let style: React.CSSProperties = {
      position: "absolute",
      left: "50%",
      top: "50%",
      transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
      // PERUBAHAN 1:
      // Turunkan base z-index dari 50 ke 30.
      // Card aktif = 30, Samping = 29, 28, dst.
      zIndex: 30 - Math.abs(offset), 
      opacity: isActive ? 1 : 0.6,
      cursor: "pointer",
    };

    let xTranslation: string;
    let scale: number;
    let rotate: number;
    let yTranslation: string;

    if (isActive) {
      xTranslation = "calc(-50% + 0%)";
      scale = 1;
      rotate = 0;
      yTranslation = "-50%";
    } else if (offset === -1) {
      xTranslation = "calc(-50% - 110%)";
      scale = 0.85;
      rotate = -4;
      yTranslation = "calc(-50% + 30px)";
    } else if (offset === 1) {
      xTranslation = "calc(-50% + 110%)";
      scale = 0.85;
      rotate = 4;
      yTranslation = "calc(-50% + 30px)";
    } else {
      xTranslation = offset < 0 ? "calc(-50% - 250%)" : "calc(-50% + 250%)";
      scale = 0;
      rotate = offset < 0 ? -15 : 15;
      yTranslation = "-50%";
      style.opacity = 0;
    }

    style.transform = `translateX(${xTranslation}) translateY(${yTranslation}) scale(${scale}) rotate(${rotate}deg)`;

    return style;
  };

  return (
    <div className="overflow-hidden w-full pb-10 flex justify-center relative">
      <div className="relative w-full max-w-6xl h-96 md:h-[450px] lg:h-[550px] flex justify-center items-center">
        {/* --- TOMBOL PREV (Kiri) --- */}
        <button
          onClick={handlePrev}
          // PERUBAHAN 2:
          // Ubah z-60 menjadi z-40. 
          // Ini cukup tinggi untuk di atas card (max 30), tapi di bawah navbar (50).
          className="absolute md:hidden left-4 z-40 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-800 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* --- CAROUSEL CARDS --- */}
        {moments.map((moment, index) => (
          <div
            key={index}
            className="flex rounded-2xl overflow-hidden aspect-5/4 shadow-2xl bg-gray-200 w-80 md:w-[400px] lg:w-[500px]"
            style={getCardStyle(index)}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={moment.src}
              alt="icon"
              className="w-full h-full object-cover pointer-events-none select-none"
            />
            <div className="bg-white absolute rounded-t-2xl px-6 py-6 md:py-8 lg:py-10 text-center w-full bottom-0">
              <span className="text-2xl md:text-3xl lg:text-5xl font-bold bg-linear-to-r text-transparent bg-clip-text from-pacil-blue-700 to-pacil-red-700">
                {moment.title}
              </span>
            </div>
          </div>
        ))}

        {/* --- TOMBOL NEXT (Kanan) --- */}
        <button
          onClick={handleNext}
          // PERUBAHAN 3: Sama seperti tombol prev, ubah ke z-40
          className="absolute md:hidden right-4 z-40 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-800 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}