import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { MarqueeProps } from "../type";

export default function MarqueeRow({
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
