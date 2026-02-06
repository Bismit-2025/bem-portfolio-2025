"use client";

import { Button } from "../../../components/ui/button";
// 1. Tambahkan 'Variants' di import
import { motion, type Variants } from "framer-motion";

export default function HeroSection() {
  // 2. Tambahkan ': Variants' di sini biar merahnya hilang
  const shapePop: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative w-full px-8 py-12 md:py-20 overflow-hidden md:pt-42 ">
      {/* --- BACKGROUND SHAPES START --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* 1. Big Gray Blob -> Now Fasilkom Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage: "url('/gaung.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute top-[-25%] md:top-30 lg:top-[-50%] -right-[15%] w-[70vw] h-[70vw] rounded-full opacity-80"
        />

        {/* 2. Top Left Red Square */}
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="absolute top-[5%] -left-[2vw] w-[9vw] h-[9vw] md:w-[7vw] md:h-[7vw] border-1 md:border-4 border-pacil-red-700 rotate-[35deg] opacity-80"
        />

        {/* 3. Bottom Left Shapes */}
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="absolute bottom-[10%] -left-[1%] w-[10vw] h-[10vw] md:w-[7vw] md:h-[7vw] bg-pacil-blue-700 rounded-full"
        />
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="absolute bottom-[3%] left-6 w-[8vw] h-[8vw] border-2 border-white rounded-full"
        />

        {/* 4. Center/Right Red Elements */}
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="absolute bottom-[30%] left-[50%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] border border-pacil-red-700 rounded-full "
        />
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="absolute bottom-[25%] left-[60%] w-[4vw] h-[4vw] bg-pacil-red-700 rounded-full "
        />

        {/* 5. Bottom Right Blue Square */}
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="absolute bottom-[15%] right-[2%] w-[10vw] h-[10vw] border border-2 border-pacil-blue-500 rotate-[-15deg]"
        />
      </div>

      {/* --- CONTENT UTAMA --- */}
      <div className="w-full md:py-20 overflow-hidden relative z-10">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-2">
          <div className=" md:flex md:flex-col items-start text-left gap-2 lg:gap-6">
            <h1 className="md:text-5xl lg:text-5xl font-extrabold bg-linear-to-r from-pacil-blue-500 to-pacil-red-700 bg-clip-text text-transparent">
              BEM FASILKOM UI
            </h1>

            <p className="text-black font-normal text-xs md:text-xl pr-7 line-clamp-6 mb-2 lg:mb-6">
              Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer Universitas
              Indonesia (BEM Fasilkom UI) merupakan organisasi mahasiswa
              Fasilkom UI untuk mengabdi dan menciptakan kreasi yang bermakna
              bagi kepentingan Fasilkom UI dengan memanfaatkan teknologi
              informasi.
            </p>

            <Button className="shadow-pacil-blue-200 text-sm! md:text-base! px-3! py-1! md:px-6! md:py-3! rounded-lg">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
