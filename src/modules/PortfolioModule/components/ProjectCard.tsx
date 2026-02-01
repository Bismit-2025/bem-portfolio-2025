import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "../type";

const ProjectCard = ({ title, desc, href, image, tags }: ProjectCardProps) => {
  return (
    <div className="w-full flex max-md:flex-col lg:flex-row bg-white shadow-md rounded-xl gap-5 px-5 md:px-10 py-10">
      <div className="flex-1 relative max-md:aspect-video md:w-[26.7rem] md:h-76 rounded-lg">
        <Image
          src={"/placeholder.jpeg"}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-2 flex-col gap-3 md:gap-5 text-start">
        <h1 className="text-lg md:text-3xl font-semibold">{title}</h1>
        <p>{desc}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <Badge key={i}>{t}</Badge>
          ))}
        </div>

        <Link href={href} className="mt-auto">
          <Button className="w-full gap-3">
            <BiSearch /> See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
