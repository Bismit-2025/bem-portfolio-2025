"use client";
import { useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

type UseScrollRadiusOptions = {
  maxRadius?: number;
};

export default function useScrollRadius(
  targetRef: RefObject<HTMLElement | null>,
  { maxRadius = 48 }: UseScrollRadiusOptions = {},
) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });

  const radius = useTransform(scrollYProgress, [0, 0.5], [0, maxRadius]);
  return radius;
}
