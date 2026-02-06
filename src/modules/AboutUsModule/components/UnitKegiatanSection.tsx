"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UKF_DATA, UKOR_DATA } from "../constants";

const units = [...UKF_DATA, ...UKOR_DATA];

export default function UnitSection() {
  const [activeCategory, setActiveCategory] = useState<"ukf" | "uko">("ukf");
  const [activeUnitId, setActiveUnitId] = useState("binari");

  const filteredUnits = units.filter((u) => u.category === activeCategory);

  // Pastikan unit aktif ada di kategori sekarang, kalau tidak reset ke yang pertama
  const currentUnit =
    units.find((u) => u.id === activeUnitId && u.category === activeCategory) ||
    filteredUnits[0];

  return (
    <section className="relative w-full py-12 pb-24">
      <div className="container mx-auto px-4 md:px-8 relative">
        {/* HEADER JUDUL */}
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
            Unit Kesenian dan Olahraga Fasilkom
          </h2>
        </div>

        {/* --- TAB CATEGORY WRAPPER --- */}
        <div className="relative mb-10">
          {/* GARIS GRADIENT (FULL SCREEN WIDTH) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[6px] bg-gradient-to-r from-[#4c92e6] to-[#eb4841] z-0" />

          {/* TAB BUTTONS (CENTERED) */}
          <div className="flex justify-center relative z-1">
            <div className="flex">
              <button
                onClick={() => {
                  setActiveCategory("ukf");
                  setActiveUnitId("binari");
                }}
                className={`
                  px-3 md:px-10 py-2 md:py-4 text-sm md:text-lg font-bold transition-all duration-300 rounded-t-md border-t-8 border-x-4 border-[#8589c1] border-b-0 bg-[#f8f8f8]
                  ${
                    activeCategory === "ukf"
                      ? "opacity-100"
                      : "opacity-25 bg-transparent"
                  }`}
              >
                <h1 className="bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block">
                  Unit Kegiatan Fasilkom
                </h1>
              </button>
              <button
                onClick={() => {
                  setActiveCategory("uko");
                  setActiveUnitId("basket");
                }}
                className={`
                  px-3 md:px-10 py-2 md:py-4 text-sm md:text-lg font-bold transition-all duration-300 rounded-t-md border-t-8 border-x-4 border-[#b47c9b] border-b-0 bg-[#f8f8f8]
                  ${
                    activeCategory === "uko"
                      ? "opacity-100"
                      : "opacity-25 bg-transparent"
                  }`}
              >
                <h1 className="bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block">
                  Unit Kegiatan Olahraga
                </h1>
              </button>
            </div>
          </div>
        </div>

        {/* --- SUB-NAVIGASI (FILTER PILLS) --- */}
        <div className="w-full overflow-x-auto scrollbar-hide mb-4">
          <div className="flex min-w-full w-fit justify-center px-8 pb-2 gap-4 md:gap-6">
            {filteredUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setActiveUnitId(unit.id)}
                className={`
                      !px-4 !py-1 !md:px-6 !md:py-4 !bg-[#f8f8f8] rounded-lg border font-medium text-md whitespace-nowrap border-pacil-blue-800 !text-grey-400 !md:text-grey-700
                      ${
                        currentUnit.id === unit.id || activeUnitId === unit.id
                          ? "!bg-pacil-blue-800 text-white shadow-md"
                          : " opacity-50 hover:opacity-100"
                      }
                    `}
              >
                {unit.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- CARD CONTENT (DISPLAY UNIT) --- */}
        <div className="w-full max-w-8xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100 flex flex-col md:flex-row md:gap-10 items-beetween">
            {/* FOTO (KIRI) */}
            <div className="w-full md:w-[25%] shrink-0">
              <div className="relative aspect-3/1 md:aspect-square rounded-xl overflow-hidden shadow-md bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentUnit.image}
                  alt={currentUnit.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col pt-4 gap-4 md:gap-8 md:pt-8">
              {/* Header: Logo & Nama */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 md:w-24 md:h-24 md:w-16md:h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center p-3 shadow-sm shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentUnit.logo}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-4xl font-bold text-black tracking-tight">
                  {currentUnit.name}
                </h3>
              </div>

              {/* Deskripsi */}
              <p className="text-sm/5 text-grey-600 md:text-lg md:leading-relaxed">
                {currentUnit.description}
              </p>

              {/* Tombol IG */}
              <div>
                <a
                  href={`https://instagram.com/${currentUnit.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="
                      bg-white gap-3 border border-gray-200 
                      !text-pacil-blue-800 font-bold
                      transition-all duration-300
                      !rounded-2xl shadow-3xl
                      hover:!bg-pacil-blue-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#E1306C]"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <h1 className="tracking-wider bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block">
                      @{currentUnit.instagram}
                    </h1>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
