import React from "react";
import { Button } from "@/components/ui/Button";

export default function ProjectSection() {
  return (
    <section className="w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-pacil-red-200 via-[#F8F8F8] to-[#F8F8F8] rounded-t-[100px] lg:rounded-t-[226px]">

      <div className="container px-8 lg:mx-auto z-1 flex flex-col justify-center items-center">
        
        {/* JUDUL SECTION */}
        <div className="text-center mb-8 md:mt-16">
          <h2 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent inline-block pb-2">
            Our Projects
          </h2>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 auto-rows-[100px] lg:auto-rows-[220px]">
          
          {/* CARD 1: TEXT INFO  */}
          <div className="row-span-1 lg:rounded-3xl rounded-lg p-[2px] bg-gradient-to-br from-pacil-blue-800 to-pacil-red-800 drop-shadow-xl relative">
             <div className="w-full h-full bg-white rounded-[6px] lg:rounded-[21px] p-8 flex flex-col justify-start items-center text-center relative overflow-hidden">
          
                <h3 className="text-lg lg:text-3xl font-bold text-black mb-3 mt-2 relative z-10">Project</h3>
                <p className="text-gray-600 relative z-10 text-xs lg:text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
             </div>
          </div>

          {/* TALL IMAGE (Tengah) */}
          <div className="row-span-2 lg:rounded-2xl rounded-lg relative overflow-hidden group drop-shadow-xl">
            {/* Image Placeholder (Ganti src nanti) */}
            <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
               {/* Gunakan <Image> nextjs nanti, ini placeholder warna */}
               <div className="w-full h-full bg-[url('https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg')] bg-cover bg-center" />
            </div>
            {/* Overlay Gradient di Bawah */}
            <div className="absolute inset-0 bg-gradient-to-t from-pacil-blue-950 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 text-center w-full">
              <h3 className="text-white text-xl md:text-3xl font-bold">Nama Project</h3>
            </div>
          </div>

          {/* CARD 3: STANDARD IMAGE (Kanan Atas) */}
          <div className="row-span-1 lg:rounded-2xl rounded-lg relative overflow-hidden group drop-shadow-xl">
            <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-[url('https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg')] bg-cover bg-center" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pacil-blue-950 to-transparent opacity-80" />
            <div className="absolute bottom-6 text-center w-full ">
              <h3 className="text-white text-xl md:text-3xl font-bold">Nama Project</h3>
            </div>
          </div>

          {/* CARD 4: STANDARD IMAGE  */}
          <div className="row-span-1 lg:rounded-2xl rounded-lg relative overflow-hidden group drop-shadow-xl">
             <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[url('https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg')] bg-cover bg-center" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-pacil-blue-950 to-transparent opacity-80" />
             <div className="absolute bottom-6  text-center w-full ">
              <h3 className="text-white text-xl md:text-3xl font-bold">Nama Project</h3>
            </div>
          </div>

          {/* CARD 5: TALL IMAGE*/}
          <div className="row-span-1 md:row-span-2 lg:rounded-2xl rounded-lg relative overflow-hidden group drop-shadow-xl md:col-start-3 md:row-start-2">
            <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[url('https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg')] bg-cover bg-center" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pacil-blue-950 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 text-center w-full">
              <h3 className="text-white text-xl md:text-3xl font-bold">Nama Project</h3>
            </div>
          </div>

          {/* CARD 6: WIDE IMAGE */}
          <div className="col-span-2 row-span-1 lg:rounded-2xl rounded-lg relative overflow-hidden group drop-shadow-xl">
             <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[url('https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg')] bg-cover bg-center" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-pacil-blue-950 to-transparent opacity-80" />
             <div className="absolute bottom-6 text-center w-full">
              <h3 className="text-white text-xl md:text-3xl font-bold">Nama Project</h3>
            </div>
          </div>

        </div>

        {/* TOMBOL MORE */}
        <div className="flex justify-center mt-12">
          <Button className="bg-pacil-blue-900 text-white rounded-full hover:bg-pacil-blue-800 transition-shadow hover:shadow-lg hover:shadow-pacil-blue-200">
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}