"use client";

import React, { useState } from "react";
import { ImpactDetail } from "../interface";

export default function Impact({
  impacts,
}: {
  impacts: [ImpactDetail, ImpactDetail, ImpactDetail];
}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <section className="relative overflow-hidden w-full flex flex-col justiy-center items-center gap-8 pt-10 max-md:pt-0">
      {/* JUDUL dengan tombol navigasi (Hanya muncul di Mobile) */}
      <div className="flex items-center gap-4">
        {/* Tombol Navigasi (Hanya Tampil di Mobile, Sembunyi di atas MD) */}
        <div className="flex items-center gap-7">
          {/* Tombol Prev */}
          <button
            onClick={handlePrev}
            className="md:hidden  aspect-square w-10 rounded-full drop-shadow-xl bg-white border-neutral-100 border hover:brightness-95 flex items-center justify-center transition p-1"
            aria-label="Previous impact card"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
            >
              <path
                d="M6.36534 4.38666L5.65801 3.67999L1.80534 7.53133C1.74324 7.59304 1.69395 7.66642 1.66032 7.74726C1.62669 7.82809 1.60937 7.91478 1.60937 8.00233C1.60937 8.08988 1.62669 8.17656 1.66032 8.2574C1.69395 8.33823 1.74324 8.41161 1.80534 8.47333L5.65801 12.3267L6.36468 11.62L2.74868 8.00333L6.36534 4.38666Z"
                fill="black"
              />
            </svg>
          </button>

          <div className="bg-linear-to-r bg-clip-text from-pacil-blue-700 to-pacil-red-700 pb-3">
            <h1 className="text-5xl max-lg:text-4xl text-wrap font-bold text-transparent text-center">
              Impacts
            </h1>
          </div>
          {/* Tombol Next */}
          <button
            onClick={handleNext}
            className="md:hidden aspect-square w-10 rounded-full drop-shadow-xl bg-white border-neutral-100 border hover:brightness-95 flex items-center justify-center transition p-1"
            aria-label="Next impact card"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
            >
              <path
                d="M1.63466 4.38666L2.34199 3.67999L6.19466 7.53133C6.25676 7.59304 6.30605 7.66642 6.33968 7.74726C6.37331 7.82809 6.39063 7.91478 6.39063 8.00233C6.39063 8.08988 6.37331 8.17656 6.33968 8.2574C6.30605 8.33823 6.25676 8.41161 6.19466 8.47333L2.34199 12.3267L1.63532 11.62L5.25132 8.00333L1.63466 4.38666Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CONTAINER CARD */}
      <div className="flex gap-6 w-full justify-center px-15 max-lg:px-10 pb-6">
        {impacts.map((impact, index) => (
          <div
            key={index}
            className={`
              bg-white border border-neutral-100 drop-shadow-lg flex flex-col justify-between items-center overflow-hidden rounded-2xl aspect-square p-10
              w-full lg:w-96 
              ${index === currentCardIndex ? "max-md:flex" : "max-md:hidden"} 
            `}
          >
            <img src={impact.src} alt="icon" />
            <h1 className="font-bold text-pacil-blue-900 text-lg p-3 text-center">
              {impact.title}
            </h1>
            {/* Isi card lainnya */}
          </div>
        ))}
      </div>
    </section>
  );
}
