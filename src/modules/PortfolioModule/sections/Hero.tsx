"use client";

import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { LEFT_IMAGES, RIGHT_IMAGES } from "../const";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  images: string[];
  duration?: number;
  className?: string;
  reverse?: boolean;
};

function MarqueeColumn({
  images,
  duration = 40,
  className,
  reverse = false,
}: MarqueeProps) {
  const [ref, { height }] = useMeasure();
  const controls = useAnimation();
  const yTranslation = useMotionValue(0);

  const BLOCKS = [1, 2];
  const GAP = 20;

  useEffect(() => {
    if (height === 0) return;

    const loopDistance = height + GAP;

    const startY = reverse ? -loopDistance : 0;
    const endY = reverse ? 0 : -loopDistance;

    controls.start({
      y: [startY, endY],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [height, duration, controls, reverse]);

  return (
    <div className={cn("flex flex-col", className)}>
      <motion.div
        animate={controls}
        className="flex flex-col gap-5"
        style={{ y: yTranslation }}
      >
        {BLOCKS.map((blockIndex) => (
          <div
            key={blockIndex}
            ref={blockIndex === 1 ? ref : undefined}
            className="flex flex-col gap-5"
          >
            {images.map((src, imgIndex) => (
              <div
                key={`${blockIndex}-${imgIndex}`}
                className="relative  max-lg:aspect-square w-42 lg:w-80 lg:h-64  overflow-hidden "
              >
                <Image
                  src={src}
                  alt={`Portfolio Image ${imgIndex}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeRow({
  images,
  duration = 40,
  className,
  reverse = false,
}: MarqueeProps) {
  const [ref, { width }] = useMeasure();
  const controls = useAnimation();

  const xTranslation = useMotionValue(0);

  const BLOCKS = [1, 2];
  const GAP = 20;

  useEffect(() => {
    if (width === 0) return;

    const loopDistance = width + GAP;

    const startX = reverse ? -loopDistance : 0;
    const endX = reverse ? 0 : -loopDistance;

    controls.start({
      x: [startX, endX],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [width, duration, controls, reverse]);

  return (
    <div className={cn("flex flex-row overflow-hidden", className)}>
      <motion.div
        animate={controls}
        className="flex flex-row gap-5"
        style={{ x: xTranslation }} // Bind ke xTranslation
      >
        {BLOCKS.map((blockIndex) => (
          <div
            key={blockIndex}
            ref={blockIndex === 1 ? ref : undefined}
            className="flex flex-row gap-3" // Ubah ke flex-row
          >
            {images.map((src, imgIndex) => (
              <div
                key={`${blockIndex}-${imgIndex}`}
                className="relative aspect-video w-48 h-40  overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Portfolio Image ${imgIndex}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative md:px-10 max-md:gap-7  max-md:flex-col flex overflow-hidden max-h-screen md:justify-between bg-white dark:bg-neutral-950">
      <MarqueeColumn
        images={LEFT_IMAGES}
        duration={40}
        className="hidden md:flex"
      />

      <div className="flex px-10 lg:px-20 flex-col items-center mt-10 md:mt-72 text-center gap-5 lg:gap-9">
        <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold">
          <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>
        <p className="max-lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus
          exercitationem itaque, expedita officia labore iure tempora pariatur.
          Perferendis voluptates quos magnam necessitatibus nostrum obcaecati
          saepe suscipit distinctio, exercitationem dolorum.
        </p>
        <Button className="flex items-center gap-3">
          <BiSearch /> <span className="max-lg:text-sm">Explore More</span>
        </Button>
      </div>
      <div className="md:hidden flex flex-col gap-4">
        <MarqueeRow images={LEFT_IMAGES} duration={40} />
        <MarqueeRow images={LEFT_IMAGES} duration={50} reverse={true} />
      </div>
      <MarqueeColumn
        images={RIGHT_IMAGES}
        duration={50}
        reverse={true}
        className="hidden md:flex"
      />
      <div className="pointer-events-none max-md:hidden absolute bottom-0 left-0 w-full h-96 bg-linear-to-t from-white via-white to-transparent z-20" />
    </section>
  );
}
