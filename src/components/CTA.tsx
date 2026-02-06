import { ContactIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="px-8 py-10 md:px-20 md:py-12 flex flex-row rounded-xl items-center shadow-lg gap-8 md:gap-0 bg-white">
      <div className="flex flex-col gap-4 md:gap-10 items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl font-bold md:text-4xl">
          Kamu punya pertanyaan?
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          eveniet perspiciatis rem error quam, excepturi tempora eligendi
          obcaecati, omnis, quia laudantium est? Nobis itaque porro quas
          excepturi. Magni, magnam suscipit.
        </p>
        <Button className="flex w-fit max-md:text-xs flex-row gap-3">
          <ContactIcon className="w-4 h-4" />
          Contact Us
        </Button>
      </div>
      <img src="/cta.svg" alt="CTA icon" className="max-md:hidden" />
    </div>
  );
}
