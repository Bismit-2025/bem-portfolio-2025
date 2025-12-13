"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion, Variants } from "framer-motion"; // 1. Import Framer Motion

export default function AboutHeroSection() {
  // Data Foto (Tetap)
  const baseImages = [
    "https://encrypted-tbn0.gstatic.com/images?q= dtbn:ANd9GcSyFcvgVdd0RfOqsMCIwFM4xHUA6iFx3repPg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdwwYJPh261kvvxLlnYB7bzK6Q28PYWgJNw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8uGEhe9AkRFLS_rgeB-TcaFjHMMq0oQxUw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Z5stLtpcg51JjE7hzfWqvEchLgP3QL1FgQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiitTOKGLSNEdYAp-7ui7oQloBFmnNK7t12Q&s",
  ];

  // Data Statistik (Tetap)
  const statistics = [
    { number: "12+", label: "Biro"},
    { number: "12+", label: "Departemen"},
    { number: "12+", label: "Program"},
  ];

  const galleryImages = React.useMemo(() => new Array(20).fill(baseImages).flat(), [baseImages]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  // --- LOGIC ANIMASI SCROLL (Tetap) ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1;
    const itemWidth = window.innerWidth < 768 ? 196 : 292;
    const startPosition = (galleryImages.length / 2) * itemWidth;
    container.scrollLeft = startPosition;

    const renderFrame = () => {
      if (!container) return;
      container.scrollLeft += scrollSpeed;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll * 0.8) container.scrollLeft = maxScroll * 0.2;
      else if (container.scrollLeft <= maxScroll * 0.1) container.scrollLeft = maxScroll * 0.7;

      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      galleryImages.forEach((_, index) => {
        const cardWrapper = document.getElementById(`gallery-wrapper-${index}`);
        const cardInner = document.getElementById(`gallery-inner-${index}`);
        if (cardWrapper && cardInner) {
          const cardCenter = cardWrapper.offsetLeft + cardWrapper.offsetWidth / 2;
          const distance = cardCenter - containerCenter;
          if (Math.abs(distance) < container.clientWidth * 1.5) {
            const rotate = Math.max(-20, Math.min(20, distance / 35));
            const translateY = Math.abs(distance) * 0.25;
            const scale = Math.max(0.85, 1 - Math.abs(distance) * 0.0005);
            const zIndex = 100 - Math.round(Math.abs(distance) / 10);
            cardInner.style.transform = `perspective(1000px) translateY(${translateY}px) rotateZ(${rotate}deg) scale(${scale})`;
            cardWrapper.style.zIndex = String(zIndex);
          }
        }
      });
      animationFrameId.current = requestAnimationFrame(renderFrame);
    };
    animationFrameId.current = requestAnimationFrame(renderFrame);
    return () => { if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); };
  }, [galleryImages]);

  
  // --- VARIANT ANIMASI SHAPES (Baru) ---
  const floatingAnimation: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: (customDelay: number) => ({
      y: [-10, 10, -10], // Melayang naik turun
      rotate: [0, 5, -5, 0], // Putar sedikit kiri-kanan
      transition: {
        duration: 6, // Durasi satu siklus animasi
        delay: customDelay, // Delay awal biar gak gerak barengan
        repeat: Infinity, // Ulang terus
        ease: "easeInOut", // Gerakan halus
      },
    }),
  };

  const popUp: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, scale: 1, 
      transition: { duration: 0.8, type: "spring", bounce: 0.4 } // Muncul membal
    },
  };


  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden"> {/* Pastikan background putih */}
      
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; } .preserve-3d { transform-style: preserve-3d; }`}</style>

      {/* --- BACKGROUND SHAPES START (ANIMATED) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        
        {/* 1. Top Left: Big Circle (Outline) */}
        <motion.div 
          variants={popUp} 
          initial="hidden" 
          animate="visible"
          className="absolute top-[10%] left-[1%] md:left-[5%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] border-2 border-pacil-red-700 rounded-full" 
        >
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" custom={0} className="w-full h-full" />
        </motion.div>

        {/* 2. Top Left: Small Red Circle (Solid) */}
        <motion.div 
          variants={popUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.2 }}
          className="absolute top-[15%] md:top-[20%] left-[7%] md:left-[15%] w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] md:w-16 md:h-16 bg-pacil-red-700 rounded-full"
        >
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" custom={1} className="w-full h-full" />
        </motion.div>
        
        {/* 3. Top Right: Blue Square Outline (Rotated) */}
        <motion.div 
          variants={popUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.4 }}
          className="absolute top-[7%] right-[-12%] md:right-[-2%] w-[25vw] h-[25vw] md:w-[8vw] md:h-[8vw] border-2 border-pacil-blue-500 rotate-[-25deg]"
        >
           <motion.div variants={floatingAnimation} initial="initial" animate="animate" custom={0.5} className="w-full h-full" />
        </motion.div>

        {/* 4. Mid Right: Blue Circle (Solid) */}
        <motion.div 
          variants={popUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.6 }}
          className="absolute top-[30%] right-[2%] w-[6vw] h-[6vw] md:w-[8vw] md:h-[8vw] md:w-[5vw] md:h-[5vw] bg-pacil-blue-700 rounded-full"
        >
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" custom={2} className="w-full h-full" />
        </motion.div>

        {/* 5. Bottom Right: White Circle (Border) */}
        <motion.div 
          variants={popUp} 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.8 }}
          className="absolute top-[31%] md:top-[35%] right-[2%] w-[5vw] h-[5vw] md:w-[6vw] md:h-[6vw] border border-white rounded-full"
        >
           <motion.div variants={floatingAnimation} initial="initial" animate="animate" custom={1.5} className="w-full h-full" />
        </motion.div>

      </div>
      {/* --- BACKGROUND SHAPES END --- */}

      {/* Konten Utama (Z-Index Tinggi biar di atas shape) */}
      <div className="container mx-auto px-16 md:px-8 relative z-10">
        
        {/* Header (Tetap) */}
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-lg md:text-5xl font-extrabold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">Tentang BEM Fasilkom UI</span>
          </h2>
          <p className="text-gray-600 text-xs md:text-lg md:leading-relaxed mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <div className="flex justify-center gap-4 w-full">
            <Button className="!px-3 !py-2 !text-sm md:px-6 md:py-3 md:text-base rounded-lg shadow-lg shadow-pacil-blue-200">Explore More</Button>
            <Button variant="outline" className="!px-3 !py-2 !text-sm md:px-6 md:py-3 md:text-base border-gray-300 text-gray-700 hover:bg-gray-50">Grand Design</Button>
          </div>
        </div>

        {/* Layout Utama (Carousel & Statistik Tetap) */}
        <div className="flex flex-col gap-10 md:gap-16 w-full">
          
          {/* 1. CAROUSEL FOTO */}
          <div className="relative flex justify-center w-full"> 
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide pb-52 px-[50vw] -mx-[50vw] justify-start items-start preserve-3d w-full"
            >
              <div className="shrink-0 w-[calc(50vw-90px)] md:w-[calc(50vw-130px)]"></div>
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  id={`gallery-wrapper-${idx}`}
                  className="flex-shrink-0 w-[180px] md:w-[260px] flex justify-center relative items-center snap-center transition-none" 
                >
                  <div 
                    id={`gallery-inner-${idx}`}
                    className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden drop-shadow-2xl will-change-transform"
                    style={{ boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover pointer-events-none" />
                  </div>
                </div>
              ))}
              <div className="shrink-0 w-[calc(50vw-90px)] md:w-[calc(50vw-130px)]"></div>
            </div>
          </div>

          {/* 2. Statistik Grid */}
          <div className="flex flex-row justify-center gap-8 md:gap-12 px-4 md:px-0 w-full -mt-32">
            {statistics.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <h3 className="text-2xl md:text-4xl md:font-extrabold font-bold text-black">{stat.number}</h3>
                <p className="text-gray-800 md:text-md">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
