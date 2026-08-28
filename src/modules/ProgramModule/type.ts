import { ComponentProps } from "react";

type ImageProps = {
  imageUrl: string;
  title?: string;
};

export type ProgramImageCardProps = ImageProps & ComponentProps<"div">;

export type ProgramCardProps = {
  title: string;
  desc: string;
  href: string;
  image?: string;
  tags: string[];
};
