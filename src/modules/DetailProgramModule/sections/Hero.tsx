import CircularGallery from "@/components/CircularGallery";
import CircularProgramCard from "../components/CircularProgramCard";
import { ChevronLeftIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-4 px-10">
        <button className="bg-white rounded-full shadow-md  w-fit p-3 cursor-pointer mb-5">
          <ChevronLeftIcon className="size-6" />
        </button>
        <h2 className="text-xl md:text-4xl  font-extrabold">
          <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
            Nama Program
          </span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi debitis
          sequi eos vel quisquam necessitatibus aperiam expedita, earum officia
          voluptatem odit, excepturi a eum odio quidem provident ex delectus
          amet!
        </p>
      </div>
      <CircularGallery bend={1} scrollSpeed={2} gap={50} className="mt-10">
        {[...Array(6)].map((_, i) => (
          <CircularProgramCard
            key={i}
            image={`https://picsum.photos/seed/${i + 10}/600/800`}
            title={`Program ${i + 1}`}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            period="Januari - Mei"
          />
        ))}
      </CircularGallery>
    </section>
  );
}
