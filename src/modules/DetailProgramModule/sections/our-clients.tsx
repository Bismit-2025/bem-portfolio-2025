"use client";

import Testimony from "@/components/elements/Testimonial/Testimony";
import { useEffect, useState, useRef, useCallback } from "react"; // <-- Import useCallback

const testimonies = [
  {
    profilePic: "/images/profile1.jpg",
    name: "Alya Prameswari",
    position: "Product Designer at Stellar",
    testimony:
      "Pengalaman saya sangat memuaskan. Prosesnya cepat, komunikasinya jelas, dan hasil akhirnya jauh di atas ekspektasi.",
  },
  {
    profilePic: "/images/profile2.jpg",
    name: "Raka Firmansyah",
    position: "Software Engineer at NexaTech",
    testimony:
      "Timnya sangat profesional dan responsif. Setiap revisi ditangani dengan baik, membuat hasil akhirnya sangat rapi.",
  },
  {
    profilePic: "/images/profile3.jpg",
    name: "Clara Santoso",
    position: "Marketing Specialist at BrightHive",
    testimony:
      "Pelayanan yang diberikan sangat membantu. Saya merasa lebih mudah memahami kebutuhan proyek berkat panduan yang jelas.",
  },
  {
    profilePic: "/images/profile4.jpg",
    name: "Michael Adrian",
    position: "UI/UX Researcher at FlowLabs",
    testimony:
      "Hasil kerjanya solid dan dapat dipertanggungjawabkan. Dokumentasi yang diberikan juga lengkap.",
  },
  {
    profilePic: "/images/profile5.jpg",
    name: "Nadya Puteri",
    position: "Founder of Craftory",
    testimony:
      "Sangat direkomendasikan! Kualitasnya tinggi, pengiriman tepat waktu, dan komunikasinya sangat ramah.",
  },
];

export default function OurClients() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="bg-linear-to-r bg-clip-text from-pacil-blue-700 to-pacil-red-700 pb-3">
        <h1 className="text-5xl max-lg:text-4xl text-wrap font-bold text-transparent text-center">
          What Our Clients Says
        </h1>
      </div>

      <Testimony slides={testimonies} />
    </div>
  );
}
