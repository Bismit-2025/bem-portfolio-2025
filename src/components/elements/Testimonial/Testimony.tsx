import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import type { TestimonyProps } from "./interface";
import { CarouselButton } from "./TestimonyButton";

type PropType = {
  slides: TestimonyProps[];
  options?: EmblaOptionsType;
};

const Testimony: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
    slidesToScroll: 1,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-hidden pt-32 pb-10">
      <div className="relative">
        <div className="" ref={emblaRef}>
          <div className="flex -mx-4">
            {slides.map((slide, index) => (
              <div
                className="min-w-0 px-4 flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_33.333%]"
                key={index}
              >
                <div
                  className={`h-80 border rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform scale-100 opacity-100 lg:${
                    (index === activeIndex && slides.length > 3) ||
                    slides.length === 3
                      ? "scale-100 lg:opacity-100 -translate-y-1/6"
                      : "lg:scale-95 lg:opacity-35"
                  }`}
                >
                  <div className="p-10 space-y-4 relative">
                    <div className="flex gap-6 items-center">
                      <img
                        alt="profile"
                        src={slide.profilePic ?? "/brands/compfest-logo.png"}
                        className="w-30 aspect-square mx-auto bg-neutral-100 dark:bg-neutral-900 rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {slide.name}
                        </h3>
                        <h4 className="text-sm">
                          {slide.position}
                        </h4>
                      </div>
                    </div>

                    <div className="pt-10 space-y-2">
                      <p className="text-xs md:text-sm text-basic text-center overflow-auto max-h-24 pr-2">
                        {slide.testimony}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {slides.length > 3 && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
            <CarouselButton
              direction="prev"
              onClick={scrollPrev}
              className="ml-3 md:ml-20 lg:ml-52 xl:ml-86 cursor-pointer"
            />
            <CarouselButton
              direction="next"
              onClick={scrollNext}
              className="mr-3 md:mr-20 lg:mr-52 xl:mr-86 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimony;
