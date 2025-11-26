import type { EmblaCarouselType } from "embla-carousel";
import React, { type PropsWithChildren, useCallback } from "react";

type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> & {
  direction: "prev" | "next";
  onClick: () => void;
};

export const CarouselButton: React.FC<PropType> = (props) => {
  const { children, direction, onClick, ...restProps } = props;

  return (
    <button onClick={onClick} {...restProps}>
      {direction === "prev" ? (
        <img
          alt="prev"
          src="/testimony-arrow.svg"
          className=" max-md:w-10 duration-300 hover:scale-105"
        />
      ) : (
        <img
          alt="next"
          src="/testimony-arrow.svg"
          className="rotate-180 max-md:w-10 duration-300 hover:scale-105"
        />
      )}
      {children}
    </button>
  );
};
