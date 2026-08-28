export type MarqueeProps = {
  images: string[];
  duration?: number;
  className?: string;
  reverse?: boolean;
};

export type ProjectCardProps = {
  title: string;
  desc: string;
  href: string;
  image?: string;
  tags: string[];
};
