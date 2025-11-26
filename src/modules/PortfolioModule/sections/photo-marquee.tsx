"use client";
import React, { useEffect, useRef, useState } from "react";

export type VerticalMarqueeProps = {
  items: { src: string; alt: string }[];
  height?: string;
  speed?: number;
  pauseOnHover?: boolean;
  gap?: number;
  className?: string;
  direction: "up" | "down" | "left" | "right"; // <-- updated
};

export default function VerticalMarquee({
  items,
  speed = 40,
  pauseOnHover = true,
  gap = 12,
  direction,
  className = "",
}: VerticalMarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const isVertical = direction === "up" || direction === "down";

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      let size = isVertical ? el.scrollHeight : el.scrollWidth;
      size = size / 2; // because duplicated
      if (size <= 0) return;

      setDuration(size / speed);
    };

    const id = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", measure);
    };
  }, [items, speed, direction]);

  const onEnter = () => pauseOnHover && setIsPaused(true);
  const onLeave = () => pauseOnHover && setIsPaused(false);

  const rendered = items.map((it, i) => (
    <div
      key={i}
      style={{
        paddingBottom: isVertical ? (i === items.length - 1 ? 0 : gap) : 0,
        paddingRight: !isVertical ? (i === items.length - 1 ? 0 : gap) : 0,
      }}
      className={`bg-gray-100 aspect-4/3 w-56 max-lg:w-36 overflow-hidden ${
        isVertical ? "mb-5" : "ml-5"
      }`}
    >
      <img
        src={it.src}
        alt={it.alt}
        className="w-full h-full object-cover hover:scale-105 transform transition-all duration-500"
      />
    </div>
  ));

  const animationName = {
    up: "vm-scroll-up",
    down: "vm-scroll-down",
    left: "vm-scroll-left",
    right: "vm-scroll-right",
  }[direction];

  return (
    <div
      className={`relative overflow-hidden w-fit h-full ${className}`}
      style={{ height: isVertical ? "" : "auto" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        ref={trackRef}
        className={`will-change-transform ${
          isVertical ? "" : "flex flex-row whitespace-nowrap"
        }`}
        style={{
          animationName,
          animationDuration: duration ? `${duration}s` : "10s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {isVertical ? (
          <>
            <div>{rendered}</div>
            <div aria-hidden="true">{rendered}</div>
          </>
        ) : (
          <>
            <div className="flex">{rendered}</div>
            <div aria-hidden="true" className="flex">
              {rendered}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes vm-scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes vm-scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes vm-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes vm-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
