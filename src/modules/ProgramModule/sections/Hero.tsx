"use client";
import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { motion, type Variants } from "framer-motion";
import ProgramImageCard from "../components/ProgramImageCard";
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

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className="absolute inset-0 w-full overflow-hidden h-full pointer-events-none z-0">
        {/* Top Left Red Square */}
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="absolute top-[5%] -left-[2vw] rotate-[35deg] opacity-80"
        >
          <div className="w-[9vw] h-[9vw] md:w-[7vw] md:h-[7vw] border-4 border-pacil-red-700 p-3">
            <div className="w-full h-full bg-pacil-red-700 " />
          </div>
        </motion.div>

        {/* Bottom Left Shapes */}
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

        {/* Bottom Right Shapes */}
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="absolute bottom-[10%] -right-[1%] w-[10vw] h-[10vw] md:w-[7vw] md:h-[7vw] bg-pacil-red-700 rounded-full"
        />

        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="absolute bottom-[3%] right-6 w-[8vw] h-[8vw] border-2 border-white rounded-full"
        />

        {/* 5. Top Right Blue Square */}
        <motion.div
          variants={shapePop}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="absolute top-[8%] -right-[2%] w-[10vw] h-[10vw] border border-2 border-pacil-blue-500 rotate-[-15deg]"
        />
      </div>

      <div className="gap-8 md:px-32 px-10 justify-between py-20 md:py-32 flex flex-col lg:flex-row lg:gap-36 ">
        <div className="flex flex-2  justify-center flex-col gap-12">
          <h2 className="text-4xl md:text-5xl space-y-2 md:space-y-4 font-extrabold ">
            <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
              Program BEM
            </span>
            <br />
            <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
              Fasilkom UI
            </span>
          </h2>
          <p className="md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aspernatur iste doloremque soluta alias dolor, excepturi sed laborum
            accusantium facilis explicabo totam fugiat eveniet natus
            perspiciatis cumque? Itaque, mollitia nesciunt.
          </p>
          <Button className="flex w-fit flex-row gap-3">
            <BiSearch />
            Explore More
          </Button>
        </div>
        <div className="flex flex-3 gap-4 h-full flex-col">
          <div className="flex h-60 flex-row gap-4">
            <ProgramImageCard
              imageUrl="/placeholder.jpeg"
              title="Kucing Tidur"
              className="flex-1"
            />
            <ProgramImageCard
              imageUrl="/placeholder.jpeg"
              title="Kucing Tidur"
              className="flex-1"
            />
          </div>
          <ProgramImageCard
            imageUrl="/placeholder.jpeg"
            title="Kucing Tidur"
            className="w-full h-72"
          />
        </div>
      </div>
    </section>
  );
}
