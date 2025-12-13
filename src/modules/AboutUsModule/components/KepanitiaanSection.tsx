"use client";

import React, { useState } from "react";

// --- DATA DUMMY ---
const committees = [
  {
    id: 1,
    name: "Compfest",
    logo: "https://api.iconify.design/fluent-emoji-flat:technologist.svg",
    image: "https://awsimages.detik.net.id/community/media/visual/2023/07/27/menteri-investasi-bahlil-lahadalia_43.jpeg?w=600&q=90",
    description: "COMPFEST merupakan acara teknologi informasi terbesar yang diselenggarakan mahasiswa di Indonesia.",
    period: "Mei - November"
  },
  {
    id: 2,
    name: "Open House",
    logo: "https://api.iconify.design/fluent-emoji-flat:school.svg",
    image: "https://awsimages.detik.net.id/community/media/visual/2023/07/27/menteri-investasi-bahlil-lahadalia_43.jpeg?w=600&q=90",
    description: "Open House Fasilkom UI adalah acara tahunan untuk memperkenalkan lingkungan Fasilkom UI kepada calon mahasiswa.",
    period: "September - November"
  },
  {
    id: 3,
    name: "Betis",
    logo: "https://api.iconify.design/fluent-emoji-flat:books.svg",
    image: "https://awsimages.detik.net.id/community/media/visual/2023/07/27/menteri-investasi-bahlil-lahadalia_43.jpeg?w=600&q=90",
    description: "Bimbingan Belajar Gratis Fasilkom UI adalah bentuk pengabdian masyarakat berupa bimbingan belajar intensif.",
    period: "Januari - Mei"
  },
  {
    id: 4,
    name: "Perak",
    logo: "https://api.iconify.design/fluent-emoji-flat:speech-balloon.svg",
    image: "https://awsimages.detik.net.id/community/media/visual/2023/07/27/menteri-investasi-bahlil-lahadalia_43.jpeg?w=600&q=90",
    description: "Mengadakan Pesta Rakyat untuk semua civitas fasilkom ui dengan menyelenggarakan lomba serta banyak kegiatan menarik lainnya",
    period: "Desember"
  },
];

export default function KepanitiaanSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % committees.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + committees.length) % committees.length);
  };

  const getCardStyle = (index: number) => {
    const total = committees.length;
    let offset = (index - activeIndex) % total;
    if (offset < 0) offset += total;
    if (offset > total / 2) offset -= total;

    const absOffset = Math.abs(offset);
    const spacing = typeof window !== 'undefined' && window.innerWidth < 768 ? 115 : 100;
    
    const translateX = offset * spacing; 
    const rotateZ = offset * 5; 
    const translateY = absOffset * 30; 
    const scale = 1 - absOffset * 0.1; 
    const opacity = 1 - absOffset * 0.5; 
    const isVisible = absOffset <= 2.5;

    return {
      transform: `perspective(1000px) translateX(${translateX}%) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
      opacity: isVisible ? opacity : 0,
      visibility: isVisible ? "visible" : "hidden",
      transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)", 
      position: "absolute",
      left: "0",
      right: "0",
      margin: "0 auto",
      cursor: offset === 0 ? "default" : "pointer", 
    } as React.CSSProperties;
  };

  return (
    <section className="w-full py-12">
      
      <div className="container px-4 md:px-8 mx-auto flex flex-col items-center w-full overflow-hidden">
        
        {/* HEADER */}
        <div className="relative w-full flex items-center justify-between md:justify-center mb-10 md:mb-16">
          <button onClick={handlePrev} className="md:hidden p-3 rounded-full bg-white border border-gray-200 shadow-md text-gray-600 active:scale-95 transition-transform z-20 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="text-center flex-grow px-2">
            <h2 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
              Kepanitiaan Fasilkom
            </h2>
          </div>

          <button onClick={handleNext} className="md:hidden p-3 rounded-full bg-white border border-gray-200 shadow-md text-gray-600 active:scale-95 transition-transform z-20 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* CONTAINER AREA KARTU */}
        <div className="relative w-full h-[600px] md:h-[750px] flex justify-center items-center">
          
          <div className="relative w-[500px] md:w-[500px] h-full flex items-center justify-center p">
            {committees.map((item, index) => {

              const total = committees.length;
              let offset = (index - activeIndex) % total;
              if (offset < 0) offset += total;
              if (offset > total / 2) offset -= total;

              return (
                <div
                  key={item.id}
                  style={getCardStyle(index)}
                  className="top-0 origin-bottom w-full flex justify-center" 
                  onClick={() => {
                    if (offset !== 0) setActiveIndex(index);
                  }}
                >
                  {/* --- ISI KARTU --- */}
                  <div className="relative w-[400px] md:w-[450px] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 select-none h-[51w0px] md:h-[650px] transition-all duration-300">

                    {/* Gambar Header */}
                    <div className="relative h-[200px] md:h-[280px] w-full overflow-hidden bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover pointer-events-none" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Body Text (PERUBAHAN DISINI) */}
                    <div className="relative z-10 -mt-12 bg-white rounded-t-2xl pt-6 px-6 pb-8 md:px-10 flex flex-col h-[320px] md:h-[400px]">

                      <div className="flex flex-row items-center mb-4 justify-start">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center mr-4 md:mr-6 shrink-0"></div>
                          <h3 className="text-xl md:text-3xl font-bold pr-16 ">
                            {item.name}
                          </h3>
                      </div>

                      <p className="text-sm md:text-base leading-relaxed line-clamp-4 flex-grow font-medium">
                        {item.description}
                      </p>
                      <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
                        <div className="flex flex-col ml-1 gap-2">
                          <p className="text-sm md:text-base leading-relaxed line-clamp-4 flex-grow font-medium">
                            Biasanya berlangsung pada
                          </p>

                          <p className="text-xs md:text-sm border-1 px-4 md:px-12 py-2 self-start rounded-xl shadow-xl ml-1">
                            {item.period}
                          </p>
                        </div>

                        <div className="flex flex-row items-start gap-4 mt-4">
                          <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.069 4.85c-.148 3.252-1.691 4.771-4.919 4.919-1.265.058-1.645.069-4.85.069s-3.584-.012-4.85-.069c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.069-4.85c.148-3.252 1.691-4.771 4.919-4.919 1.265-.058 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                          <a href="">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                          <a href="">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}