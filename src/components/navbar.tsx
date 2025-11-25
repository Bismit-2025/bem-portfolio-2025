"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; 

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "BERANDA", href: "/" },
    { label: "TENTANG KAMI", href: "/about-us" },
    { label: "PROGRAM", href: "/program" },
    { label: "PORTOFOLIO", href: "/portfolio" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex h-25 items-center px-4 md:px-5">
        
        {/* 1. LOGO SECTION (KIRI) */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3">
            LOGO
          </Link>
        </div>

        {/* 2. MENU SECTION (TENGAH) */}
        <ul className="hidden md:flex items-center gap-8 shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={` tracking-wide transition-colors ${
                    isActive 
                      ? "text-pacil-blue-900 font-bold" 
                      : "text-gray-400 font-normal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 3. BUTTON SECTION (KANAN) */}
        <div className="flex-1 hidden md:flex justify-end items-center gap-3">
          
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-black hover:border-gray-400">
            Button
          </Button>

          <Button className="flex items-center gap-2 px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            Button
          </Button>

        </div>

        {/* 4. HAMBURGER MENU (MOBILE) */}
        <div className="flex md:hidden flex-1 justify-end">
          <button 
            className="text-gray-800 focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4 shadow-lg absolute w-full left-0">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="block text-sm font-bold text-gray-600 hover:text-pacil-blue-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <Button variant="outline" className="w-full justify-center border-gray-300 text-gray-700">Button</Button>
              <Button className="w-full justify-center">Button</Button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}