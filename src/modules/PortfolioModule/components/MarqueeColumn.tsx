import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { MarqueeProps } from "../type";

export default function MarqueeColumn({
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
