"use client";

import React, { useRef } from "react";

export default function BenefitSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;

      const scrollAmount = window.innerWidth * 0.85; 
      
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between md:justify-center mb-12 px-2">
          
          {/* Tombol Kiri Mobile */}
          <button 
            onClick={() => scroll("left")}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50 active:scale-95 transition-all border border-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Judul */}
          <h2 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
            Our Benefits
          </h2>

          {/* Tombol Kanan Mobile */}
          <button 
            onClick={() => scroll("right")}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-50 active:scale-95 transition-all border border-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* --- CARDS CONTAINER --- */}
        <div 
          ref={scrollRef}

          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-10 w-full px-6 md:px-0"
        >
          {[1, 2, 3].map((item) => (
            <div 
              key={item}

              className="flex-shrink-0 w-[85vw] md:w-auto h-[350px] md:h-[400px] bg-white rounded-2xl shadow-lg border border-gray-50 snap-center flex flex-col justify-end p-8"
            >
              <div className="flex-1"></div>
              
              <h3 className="text-2xl font-bold text-pacil-blue-900 text-center">
                Lorem Ipsum
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}