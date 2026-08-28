"use client";

import React from "react";
import { IMPORTANT_LINKS } from "../constants";
import { motion } from "framer-motion";

export default function ImportantLinksSection() {
  return (
    <section className="w-full py-20 bg-gray-50/50">
      <div className="container mx-auto px-8">
        {/* JUDUL SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
            Important Links
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Akses cepat ke berbagai layanan akademik, organisasi, dan platform penting lainnya di lingkungan Fasilkom UI.
          </p>
        </div>

        {/* GRID LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPORTANT_LINKS.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-start"
            >
              {/* Image/Icon */}
              <div className="w-16 h-16 rounded-xl bg-gray-50 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={link.image}
                  alt={link.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Category Tag */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-pacil-red-600 mb-2">
                {link.category}
              </span>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pacil-blue-800 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {link.description}
              </p>

              {/* Arrow Icon */}
              <div className="mt-6 self-end text-gray-300 group-hover:text-pacil-blue-700 group-hover:translate-x-1 transition-all duration-300">
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
