"use client";

import { useEffect, useState, useRef, useCallback } from "react"; // <-- Import useCallback

const items = [
  { id: 1, name: "Card 1", text: "Lorem ipsum dolor sit amet." },
  { id: 2, name: "Card 2", text: "Lorem ipsum dolor sit amet." },
  { id: 3, name: "Card 3", text: "Lorem ipsum dolor sit amet." },
  { id: 4, name: "Card 4", text: "Lorem ipsum dolor sit amet." },
  { id: 5, name: "Card 5", text: "Lorem ipsum dolor sit amet." },
];

export default function OurClients() {
  const itemsLength = items.length; // <-- Get length outside of the useEffect scope for stability

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const visible = isMobile ? 1 : 3;

  const extended = [items[itemsLength - 1], ...items, items[0]];

  // Memoize state setters (though not strictly necessary, it ensures function stability)
  const next = useCallback(() => {
    if (index === extended.length - 1) return;
    setIndex((prev) => prev + 1);
  }, [index, extended.length]);

  const prev = useCallback(() => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  }, [index]);

  // 1. Logic to perform the instant teleport (disable transition + change index)
  useEffect(() => {
    if (!transition) return;

    // Total items including clones is itemsLength + 2
    const lastCloneIndex = itemsLength + 1; // extended.length - 1

    // A. Forward Movement: Hit the last clone
    if (index === lastCloneIndex) {
      setTransition(false);
      setTimeout(() => {
        setIndex(1); // Teleport to the real first item
      }, 500);
    }

    // B. Backward Movement: Hit the first clone
    if (index === 0) {
      setTransition(false);
      setTimeout(() => {
        setIndex(itemsLength); // Teleport to the real last item
      }, 500);
    }
  }, [index, transition, itemsLength]); // <-- itemsLength is now stable

  // 2. Logic to re-enable transition after teleport
  useEffect(() => {
    if (!transition) {
      setTimeout(() => {
        setTransition(true);
      }, 20);
    }
  }, [transition]);

  return (
    <div className="flex flex-col gap-8 px-15 max-lg:px-10 max-md:px-5">
      <h1 className="text-5xl   font-bold bg-linear-to-r text-center text-transparent bg-clip-text from-[#3293EC] to-[#EA3C43] max-lg:text-4xl">
        What Our Clients Says
      </h1>

      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="overflow-hidden pb-10">
          <div
            ref={containerRef}
            className={`flex ${
              transition ? "transition-transform duration-500" : ""
            }`}
            style={{
              transform: `translateX(-${(index * 100) / visible}%)`,
            }}
          >
            {extended.map((item, i) => (
              <div key={i} className="w-full md:w-1/3 shrink-0 px-3">
                <div className="space-y-3 bg-white border border-gray-100 rounded-2xl drop-shadow-md p-6">
                  <div className="flex gap-6 items-center max-lg:flex-col justify-center">
                    <div className="aspect-square w-24  rounded-full bg-gray-200"></div>
                    <div className="flex flex-col gap-1 max-lg:text-center">
                      <h1 className="font-semibold text-2xl max-lg:text-xl">Bahlil</h1>
                      <h2 className="text-md">loremipsum</h2>
                    </div>
                  </div>
                  <p className="text-center text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    odit aliquam non iure similique neque eos magnam accusamus
                    rem quaerat!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows (unchanged) */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-2 -translate-y-1/2 bg-white border border-gray-100 rounded-full p-3 shadow hover:scale-105 transition"
        >
          <svg
            width="25"
            height="27"
            viewBox="0 0 25 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75829 8.51178C-0.919874 10.6354 -0.919878 15.9443 2.75828 18.0679L16.2066 25.8323C19.8847 27.9559 24.4824 25.3014 24.4824 21.0542V5.52549C24.4824 1.27832 19.8847 -1.37617 16.2066 0.747418L2.75829 8.51178Z"
              fill="url(#paint0_linear_254_1447)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_254_1447"
                x1="14.4824"
                y1="-6.71014"
                x2="14.4824"
                y2="33.2899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3293EC" />
                <stop offset="1" stopColor="#EA3C43" />
              </linearGradient>
            </defs>
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -right-2 -translate-y-1/2 bg-white border border-gray-100 rounded-full p-3 shadow hover:scale-105 transition"
        >
          <svg
            width="25"
            height="27"
            viewBox="0 0 25 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7241 8.51178C25.4023 10.6354 25.4023 15.9443 21.7241 18.0679L8.27587 25.8323C4.5977 27.9559 0 25.3014 0 21.0542V5.52549C0 1.27832 4.5977 -1.37617 8.27586 0.747418L21.7241 8.51178Z"
              fill="url(#paint0_linear_254_1455)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_254_1455"
                x1="10"
                y1="-6.71014"
                x2="10"
                y2="33.2899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3293EC" />
                <stop offset="1" stopColor="#EA3C43" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}
