"use client";

import React, { useState } from "react";

export default function VisiMisiSection() {
  // State untuk melacak tab mana yang aktif
  const [activeTab, setActiveTab] = useState<"visi" | "misi" | "value">("visi");

  // Data Konten
  const data = {
    visi: {
      title: "Visi BEM Fasilkom UI",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pacil-blue-900">
          <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 22V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      content: "Menciptakan BEM Fasilkom UI yang Inklusif terhadap seluruh elemen dan IKM Fasilkom UI, Hadir sebagai fasilitator dan wadah eskalasi kemampuan mahasiswa Fasilkom UI secara Efektif, serta Progresif terhadap isu yang bersinggungan dengan ranah Ilmu Komputer."
    },
    misi: {
      title: "Misi BEM Fasilkom UI",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pacil-blue-900">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      content: (
        <div className="list-disc space-y-2 text-left gap-8 inline-block">
          <p className="p-5 bg-gray-100 rounded-xl">Membangun internal BEM Fasilkom UI yang independen dan harmonis, serta birokrasi yang transparan untuk seluruh fungsionaris BEM Fasilkom UI.</p>
          <p className="p-5 bg-gray-100 rounded-xl">Membentuk sumber daya manusia yang kompeten dengan menjunjung pengembangan minat dan bakat dalam bentuk partisipasi mahasiswa Fasilkom UI dalam berkegiatan baik akademis maupun non-akademis.</p>
          <p className="p-5 bg-gray-100 rounded-xl">Mengawal advokasi mahasiswa secara berkelanjutan dan berdampak nyata.</p>
          <p className="p-5 bg-gray-100 rounded-xl">Menghidupkan semangat juang bergerak dalam ranah Ilmu Komputer dalam segi sosial politik yang didasari relevansi, urgensi dan strategi bagi IKM Fasilkom UI demi memberikan manfaat untuk Fasilkom UI, UI dan Indonesia.</p>
          <p className="p-5 bg-gray-100 rounded-xl">Membangun relasi yang proaktif dengan pemangku kepentingan di lingkup Fasilkom UI dan UI.</p>
        </div>
      )
    },
    value: {
      title: "Value Kami",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pacil-blue-900">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      content: ""
    }
  };

  return (
    <section className="relative w-full py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- TAB SWITCHER --- */}
        <div className="flex justify-center w-fit mx-auto bg-white p-2 rounded-[20px] shadow-sm border border-gray-100 mb-10 gap-4 md:gap-6">
  {(['visi', 'misi', 'value'] as const).map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`
        px-8 py-3 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap
        ${activeTab === tab 
          ? "bg-pacil-blue-900 text-white shadow-md" 
          : "bg-transparent text-gray-500 hover:text-pacil-blue-700"
        }
      `}
    >
      {/* Capitalize First Letter */}
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  ))}
</div>

        {/* --- CONTENT CARD --- */}
        <div className="w-full  bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-gray-100/50 border border-gray-50 transition-all duration-500 flex flex-col justify-center items-start">
          
          {/* Header Card */}
          <div className="flex items-center gap-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="">
              {data[activeTab].icon}
            </div>
            <h3 className="text-lg md:text-4xl font-semibold text-pacil-blue-900">
              {data[activeTab].title}
            </h3>
          </div>

          {/* Body Text */}
          <div className="text-xs md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {data[activeTab].content}
          </div>

        </div>

      </div>
    </section>
  );
}