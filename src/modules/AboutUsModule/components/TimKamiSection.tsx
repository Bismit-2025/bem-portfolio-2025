"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";


const bureaus = [
  {
    id: "pi", shortName: "PI", fullName: "Pengurus Inti",description: "",programs: [], instagram: "bemfasilkomui", members: []},
  {
    id: "bismit",
    shortName: "Bismit",
    fullName: "Bisnis dan Kemitraan",
    description: "Biro Bismit adalah biro yang bertugas untuk menunjang internal BEM Fasilkom UI dari segi finansial yaitu dengan mencari sumber dana potensial dari usaha dan bisnis yang memanfaatkan Teknologi Informasi (TI) maupun non-TI. Beberapa program kerja yang dimiliki biro ini adalah IT Project, Vendorship, Partnership, & Sponsorship (VPS), dan Sayembara Project IT.",
    programs: [
      {
        title: "Skenakan Pacil",
        description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
      },
      {
        title: "Skenakan Pacil",
        description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
      },
      {
        title: "Skenakan Pacil",
        description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
      },
      {
        title: "Skenakan Pacil",
        description: "Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
      },
    ],
    instagram: "bismit.bemfasilkom",
    members: [
      { name: "Martin Braithwaite", role: "Paduka Raja", image: "https://assets.goal.com/images/v3/blt5ebf408cf244e34a/f037a8fa54c9fbf4bce42d1deb5ff8796a315c6b.png?auto=webp&format=pjpg&width=3840&quality=60" },
      { name: "Martin Braithwaite", role: "Paduka Raja", image: "https://assets.goal.com/images/v3/blt5ebf408cf244e34a/f037a8fa54c9fbf4bce42d1deb5ff8796a315c6b.png?auto=webp&format=pjpg&width=3840&quality=60" },
      { name: "Martin Braithwaite", role: "Paduka Raja", image: "https://assets.goal.com/images/v3/blt5ebf408cf244e34a/f037a8fa54c9fbf4bce42d1deb5ff8796a315c6b.png?auto=webp&format=pjpg&width=3840&quality=60" },
      { name: "Martin Braithwaite", role: "Paduka Raja", image: "https://assets.goal.com/images/v3/blt5ebf408cf244e34a/f037a8fa54c9fbf4bce42d1deb5ff8796a315c6b.png?auto=webp&format=pjpg&width=3840&quality=60" },
      { name: "Martin Braithwaite", role: "Paduka Raja", image: "https://assets.goal.com/images/v3/blt5ebf408cf244e34a/f037a8fa54c9fbf4bce42d1deb5ff8796a315c6b.png?auto=webp&format=pjpg&width=3840&quality=60" },

    ]
  },
  { id: "ski", shortName: "SKI", fullName: "Sekretariat & Kesekretarian",description: "Bertanggung jawab atas administrasi, surat menyurat, dan inventaris BEM Fasilkom UI.", programs: [],instagram: "",members: []},
  { id: "psdm", shortName: "PSDM", fullName: "Pengembangan SDM", description: "", programs: [], instagram: "", members: [] },
  { id: "adkesma", shortName: "Adkesma", fullName: "Advokasi Kesejahteraan Masyarakat", description: "", programs: [], instagram: "", members: [] },
  { id: "pengmas", shortName: "Pengmas", fullName: "Pengabdian Masyarakat", description: "", programs: [], instagram: "", members: [] },
  { id: "pti", shortName: "PTI", fullName: "Pengembangan TI", description: "", programs: [], instagram: "", members: [] },
  { id: "pkkm", shortName: "PKKM", fullName: "PKKM", description: "", programs: [], instagram: "", members: [] },
  { id: "senbud", shortName: "Senbud", fullName: "Seni dan Budaya", description: "", programs: [], instagram: "", members: [] },
  { id: "olahraga", shortName: "Olahraga", fullName: "Departemen Olahraga", description: "", programs: [], instagram: "", members: [] },
  { id: "kastrat", shortName: "Kastrat", fullName: "Kajian Strategis", description: "", programs: [], instagram: "", members: [] },
  { id: "media", shortName: "Media", fullName: "Media Informasi", description: "", programs: [], instagram: "", members: [] },
  { id: "humas", shortName: "Humas", fullName: "Hubungan Masyarakat", description: "", programs: [], instagram: "", members: [] },
];

export default function TimKamiSection() {
  // State
  const [activeBiroId, setActiveBiroId] = useState("pi"); 
  const [activeTab, setActiveTab] = useState<"tentang" | "program">("tentang");

  // Cari data biro yang aktif
  const activeBiro = bureaus.find((b) => b.id === activeBiroId) || bureaus[0];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="w-full py-18 overflow-hidden">
      
      {/* Style Scrollbar */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar { height: 6px; width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background-color: #CBD5E1; border-radius: 10px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background-color: #94A3B8; }
      `}</style>

      <div className="container mx-auto px-8">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
            Tim Kami
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[600px]">
          
          {/* --- SIDEBAR MENU (KIRI) --- */}
          <div className="w-1/2 md:w-1/6 bg-pacil-blue-800 md:bg-white rounded-lg md:rounded-2xl min-w-0">

            {/* 1. TAMPILAN DESKTOP (Sidebar Vertikal) */}
            <div className="hidden md:flex flex-col">
              {bureaus.map((biro) => (
                <button
                  key={biro.id}
                  onClick={() => setActiveBiroId(biro.id)}
                  className={`
                    px-2 py-4 rounded-2xl text-center text-sm font-extrabold transition-all duration-300 whitespace-nowrap
                    ${activeBiroId === biro.id 
                      ? "bg-pacil-blue-900 text-white shadow-lg translate-x-0" 
                      : "bg-transparent hover:bg-gray-100 rounded-sm"
                    }
                  `}
                >
                  {biro.shortName}
                </button>
              ))}
            </div>

            {/* 2. TAMPILAN MOBILE Dropdown */}
            <div className="px-4 py-2 md:hidden w-full flex justify-start relative">
              
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full flex justify-between text-left text-white font-bold">
                
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" height="20" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
                
                <p className="mr-2">{activeBiro.shortName} </p>

              </button>

              {/* Dropdown Content */}
              {isMenuOpen && (
                <div className="absolute top-full w-full -ml-4 bg-white border border-gray-200 rounded-xl shadow-xl max-h-85 overflow-y-auto scrollbar-thin z-50">
                  {bureaus.map((biro) => (
                    <button
                      key={biro.id}
                      onClick={() => {
                        setActiveBiroId(biro.id);
                        setIsMenuOpen(false); 
                        setActiveTab("tentang");
                      }}
                      className={`
                        w-full px-6 py-3 text-left text-sm font-semibold transition-colors border-b border-gray-100 last:border-0
                        ${activeBiroId === biro.id 
                          ? "bg-pacil-blue-50 text-pacil-blue-900" 
                          : "text-gray-600 hover:bg-gray-50"
                        }
                      `}
                    >
                      {biro.shortName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            
          </div>




          {/* --- CONTENT AREA (KANAN) --- */}
          <div className="flex flex-col w-full lg:w-5/6 min-w-0 flex-shrink-0">
            
            {/* TABS */}
            <div className="flex w-full justify-between gap-8 mb-8 pb-1">

              <button
                onClick={() => setActiveTab("tentang")}
                className={`pb-3 flex-1 text-md md:text-2xl font-semibold transition-colors ${
                  activeTab === "tentang" ? "text-pacil-blue-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Tentang
              </button>

              <button
                onClick={() => setActiveTab("program")}
                className={`pb-3 flex-1  text-md md:text-2xl font-semibold transition-colors ${
                  activeTab === "program" ? "text-pacil-blue-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Program
              </button>

            </div>

            {/* ISI KONTEN */}
            <div className="min-h-[350px]">
              {activeTab === "tentang" ? (
                <div className="">
                  
                  {/* Header Biro */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-200 rounded-full">
                      {/* Icon Biro (Placeholder) */}
                    </div>
                    <h3 className="text-xl md:text-4xl font-semibold text-black mt-1">
                      {activeBiro.fullName}
                    </h3>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-gray-600 text-md md:text-xl leading-relaxed mb-8 w-full">
                    {activeBiro.description}
                  </p>

                  {/* Tombol IG */}
                  {activeBiro.instagram && (
                    <div className="mb-12">
                      <a 
                        href={`https://instagram.com/${activeBiro.instagram}`}
                        rel="noopener noreferrer"
                      >
                        {/* TOMBOL IG TEXT GRADIENT */}
                        <Button 
                          className="
                            gap-2
                            bg-white border border-gray-200
                            hover:!bg-white hover:!scale-105 
                            !transition-all !duration-300
                            !rounded-2xl !py-2 !px-2
                          "
                        >
                          {/* SVG Gradient untuk Ikon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <defs>
                              <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3293EC" />
                                <stop offset="100%" stopColor="#EA3C43" />
                              </linearGradient>
                            </defs>
                            {/* Path menggunakan stroke url(#igGradient) */}
                            <g stroke="url(#igGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </g>
                          </svg>
                          
                          {/* Teks Gradient */}
                          <span className="font-bold bg-gradient-to-r from-pacil-blue-700 to-pacil-red-600 bg-clip-text text-transparent">
                            @{activeBiro.instagram}
                          </span>
                        </Button>
                      </a>
                    </div>
                  )}

                  {/* LIST PENGURUS */}
                  <h4 className="text-2xl font-semibold text-black mb-6 w-full p-4">Pengurus</h4>
                  {activeBiro.members.length > 0 ? (
                
                  <div className="bg-white rounded-2xl border-4 border-white shadow-sm w-full px-4">
                    
                    <div className="flex flex-row overflow-x-auto w-full scrollbar-hide gap-4 py-4 px-2">
                      
                      {activeBiro.members.map((member, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[200px] group cursor-pointer shadow-lg rounded-2xl bg-white border border-gray-100">
                          
                          {/* FOTO */}
                          <div className="relative w-full aspect-[1/1] rounded-t-2xl overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                          </div>

                          {/* TEXT */}
                          <div className="px-4 py-4 gap-1">
                            <h5 className="font-bold text-gray-900 leading-tight mb-1">{member.name}</h5>
                            <p className="text-sm text-gray-500">{member.role}</p>
                          </div>

                        </div>
                      ))}
                      
                    </div>
                  </div>
                ) : (
                  <div className="p-8 bg-gray-50 rounded-2xl text-center text-gray-400 italic">
                    Data pengurus belum tersedia.
                  </div>
                )}

                </div>

              ) : (

                // --- KONTEN TAB "PROGRAM" (Tampilan Card) ---
                <div className=" py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeBiro.programs.length > 0 ? (
                      activeBiro.programs.map((proker, idx) => (
                        <div 
                          key={idx}  className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                            <img 
                              src={proker.image} 
                              alt={proker.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          
                          {/* Info */}
                          <h4 className="text-xl font-bold text-black mb-2 group-hover:text-pacil-blue-800 transition-colors">
                            {proker.title}
                          </h4>
                          <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                            {proker.description}
                          </p>
                          
                          {/* Tombol Detail */}
                          <button className="w-full py-2.5 bg-gray-100 rounded-lg text-pacil-red-600 font-bold text-sm hover:bg-pacil-red-50 transition-colors">
                            Lihat Detail
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full p-12 rounded-2xl text-center text-gray-400 italic border border-gray-200">
                        Belum ada data program kerja untuk biro ini.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}