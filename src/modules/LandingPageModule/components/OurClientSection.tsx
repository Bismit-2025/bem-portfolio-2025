"use client";

import React, { useState } from "react";

// ... (Data Dummy Testimoni tetap sama) ...
const testimonials = [
  {
    id: 1,
    name: "Bahlil",
    role: "Menteri Investasi",
    image: "https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    name: "Bahlil",
    role: "Menteri Investasi",
    image: "https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    name: "Bahlil",
    role: "Menteri Investasi",
    image: "https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 4,
    name: "Bahlil",
    role: "Menteri Investasi",
    image: "https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  
];

export default function OurClientSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const total = testimonials.length;
    let offset = (index - currentIndex);

    if (offset < -1) offset += total;
    if (offset > 1) offset -= total;

    if (offset === 0) {
      // ACTIVE (Tengah)
      return "translate-x-0 scale-110 opacity-100 z-20 blur-0";
    } else if (offset === -1 || (currentIndex === 0 && index === total - 1)) {
      // PREV (Kiri) - Animasi smooth transisi position & opacity
      return "-translate-x-[90%] md:-translate-x-[450px] md:translate-y-[40px] scale-110 opacity-0 md:opacity-40 z-10 blur-[0.7px]";
    } else if (offset === 1 || (currentIndex === total - 1 && index === 0)) {
      // NEXT (Kanan)
      return "translate-x-[90%] md:translate-x-[450px] md:translate-y-[40px] scale-110 opacity-0 md:opacity-40 z-10 blur-[0.7px]";
    } else {
      // HIDDEN 
      return "translate-x-0 scale-50 opacity-0 z-0";
    }
  };

  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="container md:mx-auto px-8">
        
        {/* JUDUL */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
            What Our Clients Say
          </h2>
        </div>

        {/* AREA CAROUSEL */}
        <div className="relative flex items-center justify-center h-[450px] w-full max-w-6xl mx-auto">
          
          {/* TOMBOL PREV */}
          {/* FIX: Tambah transition-all duration-300 active:scale-90 agar pencetan terasa 'membal' */}
          <button 
            onClick={handlePrev} 
            className="
              absolute -left-8 md:left-70 z-30 w-10 h-10 md:w-20 md:h-20 
              flex items-center justify-center 
              transition-all duration-300 ease-out 
              hover:scale-110 active:scale-90 
              cursor-pointer
            "
          >
            <svg width="80" height="80" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg hover:drop-shadow-xl transition-all">
              <path fill="url(#gradArrow1)" d="M 7 11 L 3 8 Q 0 6 3 4 L 7 1 Q 9 0 9 2 L 9 10 Q 9 12 7 11 Z"  />
              <defs>
                <linearGradient id="gradArrow1" x1="1" y1="2" x2="4" y2="15" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3293EC" /> 
                  <stop offset="1" stopColor="#EA3C43" />
                </linearGradient>
              </defs>
            </svg>
          </button>

          {/* RENDER KARTU */}
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                if (index !== currentIndex) setCurrentIndex(index);
              }}
              // Style transisi kartu sudah oke (duration-500 ease-in-out)
              className={`absolute top-0 w-[250px] md:w-[400px] transition-all duration-500 ease-in-out origin-center ${getCardStyle(index)}`}
            >
              <CardContent data={item} />
            </div>
          ))}

          {/* TOMBOL NEXT */}
          <button 
            onClick={handleNext} 
            className="
              absolute -right-8 md:right-70 z-30 w-10 h-10 md:w-20 md:h-20
              flex items-center justify-center 
              transition-all duration-300 ease-out 
              hover:scale-110 active:scale-90 
              cursor-pointer
            "
          >
            <svg width="80" height="80" viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg hover:drop-shadow-xl transition-all">
              <path fill="url(#gradArrow2)" d="M 2 1 L 6 4 Q 9 6 6 8 L 2 11 Q 0 12 0 10 L 0 2 Q 0 0 2 1 Z" />
              <defs>
                <linearGradient id="gradArrow2" x1="1" y1="2" x2="4" y2="15" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3293EC" />
                  <stop offset="1" stopColor="#EA3C43" />
                </linearGradient>
              </defs>
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}

// --- KOMPONEN KARTU ---
function CardContent({ data }: { data: typeof testimonials[0] }) {
  return (
    <div className={`bg-white rounded-xl border border-1 border-gray-300 p-8 h-[350px] md:h-[450px] flex flex-col items-center gap-2 md:gap-6 shadow-lg transition-shadow duration-500 hover:shadow-xl`}>
      
      {/* Header */}
      <div className="flex items-center gap-1 md:gap-4 my-4">
        <div className="relative md:w-32 md:h-32 w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-800">{data.name}</h4>
          <p className="text-sm text-gray-500">{data.role}</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto scrollbar-hide text-center">
        <p className="text-gray-600 leading-relaxed text-xs md:text-base">
          {data.text}
        </p>
      </div>

    </div>
  );
}