import React from "react";

export default function PartnerSection() {
  const partnersRow1 = [1, 2, 3, 4, 5];
  const partnersRow2 = [6, 7, 8, 9, 10];

  return (
    <section className="w-full py-20 overflow-hidden">
      {/* --- STYLE LOKAL --- */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

      `}</style>

      <div className="container md:mx-auto px-2">
        
        {/* JUDUL SECTION */}
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
            Our Partners
          </h2>
        </div>

        {/* --- ROW 1 --- */}
        <div className="relative flex w-full h-[50px] md:h-[70px] overflow-hidden group mb-6">

          {/* Original */}
          <div className="flex animate-scroll-left gap-8 pr-6">
            {partnersRow1.map((item) => (
              <div key={`r1-orig-${item}`} className="flex items-center justify-center w-[100px] h-[50px] md:w-[200px] md:h-[100px] bg-gray-200 shrink-0 hover:bg-gray-300 transition-colors">
              </div>
            ))}
          </div>

          {/* Duplikat */}
          <div className="flex animate-scroll-left gap-8 pr-6" aria-hidden="true">
            {partnersRow1.map((item) => (
              <div key={`r1-dupe-${item}`} className="flex items-center justify-center w-[100px] h-[50px] md:w-[200px] md:h-[100px] bg-gray-200 shrink-0 hover:bg-gray-300 transition-colors">
              </div>
            ))}
          </div>
        </div>

        {/* --- ROW 2 --- */}
        <div className="relative flex w-full h-[50px] md:h-[70px]  overflow-hidden group" >

          {/* Original */}
         <div className="flex animate-scroll-left gap-8 pr-6">
            {partnersRow2.map((item) => (
              <div key={`r2-orig-${item}`} className="flex items-center justify-center w-[100px] h-[50px] md:w-[200px] md:h-[100px] bg-gray-200 shrink-0 hover:bg-gray-300 transition-colors">
              </div>
            ))}
          </div>
          {/* Duplikat */}
          <div className="flex animate-scroll-left gap-8 pr-6" aria-hidden="true">
            {partnersRow2.map((item) => (
              <div key={`r2-dupe-${item}`} className="flex items-center justify-center w-[100px] h-[50px] md:w-[200px] md:h-[100px] bg-gray-200 shrink-0 hover:bg-gray-300 transition-colors">
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}