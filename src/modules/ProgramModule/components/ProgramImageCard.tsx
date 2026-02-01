import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProgramImageCardProps } from "../type";

export const ProgramImageCard = ({
  imageUrl,
  title,
  className,
}: ProgramImageCardProps) => {
  return (
    <div
      className={cn(
        `relative rounded-xl w-full h-full aspect-auto `,
        className,
      )}
    >
      <Image
        src={imageUrl}
        alt={title || "Gambar Program"}
        layout="fill"
        className="object-cover  rounded-xl"
      />
    </div>
  );
};

export default ProgramImageCard;
