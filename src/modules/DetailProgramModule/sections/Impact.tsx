"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const impactData = [
  {
    title: "Lorem Ipsum",
    image: "/placeholder.jpeg",
  },
  {
    title: "Lorem Ipsum",
    image: "/placeholder.jpeg",
  },
  {
    title: "Lorem Ipsum",
    image: "/placeholder.jpeg",
  },
];

export default function Impact() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="w-full relative py-12 lg:py-20 overflow-hidden">
      <div className="absolute lg:top-40 left-0 w-full h-full -z-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bg-lines.png"
          alt="Background Lines"
          className="w-full h-full object-cover lg:object-contain lg:w-full lg:h-auto"
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-10 justify-center items-center">
        {/* Title & Controls Wrapper */}
        <div className="flex items-center gap-8">
          <button
            className="lg:hidden rounded-full shadow-lg cursor-pointer p-4"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </button>

          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          {/* Next Button (Mobile Only) */}
          <button
            className="lg:hidden rounded-full shadow-lg cursor-pointer p-4"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </button>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden lg:flex flex-row gap-20">
          {impactData.map((item, index) => (
            <div key={index} className="bg-white mb-4 shadow-lg p-4 rounded-lg">
              <div className="relative w-72 h-84">
                <Image
                  src={item.image}
                  alt="Impact"
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="text-center mt-5">
                <p className="text-2xl font-bold text-pacil-blue-900">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View (Carousel) */}
        <div className="block lg:hidden w-full max-w-sm">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {impactData.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center">
                      <div className="relative w-full aspect-[3/4]">
                        <Image
                          src={item.image}
                          alt="Impact"
                          layout="fill"
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="text-center mt-5">
                        <p className="text-2xl font-bold text-pacil-blue-900">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
