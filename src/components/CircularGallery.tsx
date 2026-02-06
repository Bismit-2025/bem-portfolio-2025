"use client";

import React, { useRef, useEffect, useState, useMemo, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CircularGalleryProps {
  children: ReactNode;
  bend?: number;
  scrollSpeed?: number;
  className?: string;
  gap?: number; // Sekarang menggunakan number (pixel) agar lebih presisi
}

export default function CircularGallery({
  children,
  bend = 3,
  scrollSpeed = 1,
  className,
  gap = 40, // Default gap dalam pixel
}: CircularGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  // Convert children to array and duplicate for infinite scroll effect
  const childArray = React.Children.toArray(children);
  const minItems = 20;
  const duplicatedChildren = useMemo(() => {
    if (childArray.length === 0) return [];
    let items = [...childArray];
    while (items.length < minItems) {
      items = [...items, ...childArray];
    }
    // Menambah buffer yang cukup untuk looping seamless
    return [...items, ...childArray, ...childArray];
  }, [childArray]);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    document.body.style.userSelect = "none";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = "";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    startX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || duplicatedChildren.length === 0) return;

    // Menentukan posisi awal di tengah-tengah item duplikasi
    if (container.scrollLeft === 0) {
      const middleIndex = Math.floor(duplicatedChildren.length / 2);
      const middleWrapper = container.querySelector(
        `#gallery-wrapper-${middleIndex}`,
      ) as HTMLElement;

      if (middleWrapper) {
        const wrapperCenter =
          middleWrapper.offsetLeft + middleWrapper.offsetWidth / 2;
        const containerCenter = container.clientWidth / 2;
        container.scrollLeft = wrapperCenter - containerCenter;
      }
    }

    const renderFrame = () => {
      if (!container) return;

      if (!isDragging) {
        container.scrollLeft += scrollSpeed;
      }

      // Logika looping seamless:
      // Jika scroll melebihi lebar satu set kartu original, reset ke posisi ekuivalen di tengah
      const firstItem = container.querySelector(
        `#gallery-wrapper-0`,
      ) as HTMLElement;
      const nextSetItem = container.querySelector(
        `#gallery-wrapper-${childArray.length}`,
      ) as HTMLElement;

      if (firstItem && nextSetItem) {
        const setWidth = nextSetItem.offsetLeft - firstItem.offsetLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= setWidth * 2) {
          container.scrollLeft -= setWidth;
        } else if (container.scrollLeft <= setWidth * 0.5) {
          container.scrollLeft += setWidth;
        }
      }

      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      duplicatedChildren.forEach((_, index) => {
        const cardWrapper = container.querySelector(
          `#gallery-wrapper-${index}`,
        ) as HTMLElement;
        const cardInner = container.querySelector(
          `#gallery-inner-${index}`,
        ) as HTMLElement;

        if (cardWrapper && cardInner) {
          const cardCenter =
            cardWrapper.offsetLeft + cardWrapper.offsetWidth / 2;
          const distance = cardCenter - containerCenter;

          const bendPixels = bend < 10 ? bend * 50 : bend;
          const H = 800;
          const B_abs = Math.abs(bendPixels);
          const safeB = B_abs === 0 ? 0.001 : B_abs;
          const R = (H * H + safeB * safeB) / (2 * safeB);
          const effectiveX = Math.min(Math.abs(distance), H);
          const arc =
            R - Math.sqrt(Math.max(0, R * R - effectiveX * effectiveX));

          const translateY = arc;
          const rotateRad = Math.sign(distance) * Math.asin(effectiveX / R);
          const rotateDeg = rotateRad * (180 / Math.PI);

          const scale = 1;
          const zIndex = 1000 - Math.round(Math.abs(distance));

          if (Math.abs(distance) < container.clientWidth * 1.5) {
            cardInner.style.transform = `perspective(1000px) translateY(${translateY}px) rotateZ(${rotateDeg}deg) scale(${scale})`;
            cardWrapper.style.zIndex = String(zIndex);
          }
        }
      });
      animationFrameId.current = requestAnimationFrame(renderFrame);
    };

    animationFrameId.current = requestAnimationFrame(renderFrame);
    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [duplicatedChildren, bend, scrollSpeed, isDragging, childArray.length]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden h-full flex flex-col justify-center cursor-grab active:cursor-grabbing",
        className,
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; } 
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; } 
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>

      <div className="relative flex justify-center w-full pointer-events-none">
        <div
          ref={scrollContainerRef}
          style={{ gap: `${gap}px` }} // Menggunakan pixel gap secara modular
          className="flex overflow-x-auto overflow-y-hidden scrollbar-hide pt-4 pb-32 px-[50vw] -mx-[50vw] justify-start items-center preserve-3d w-full pointer-events-auto"
        >
          {/* Spacer awal */}
          <div className="shrink-0 w-[100px]"></div>

          {duplicatedChildren.map((child, idx) => (
            <div
              key={idx}
              id={`gallery-wrapper-${idx}`}
              className="flex-shrink-0 flex justify-center relative items-center transition-none"
            >
              <div
                id={`gallery-inner-${idx}`}
                className="will-change-transform"
              >
                {child}
              </div>
            </div>
          ))}

          {/* Spacer akhir */}
          <div className="shrink-0 w-[100px]"></div>
        </div>
      </div>
    </div>
  );
}
