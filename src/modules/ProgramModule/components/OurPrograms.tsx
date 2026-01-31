"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { FilterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROGRAM_BEM } from "../const";
import { Badge } from "@/components/ui/badge";
import useScrollRadius from "@/hooks/useScrollRadius";
import useMediaQuery from "@/hooks/useMediaQuery";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ProgramCardProps = {
  title: string;
  desc: string;
  href: string;
  image?: string;
  tags: string[];
};

const ITEMS_PER_PAGE = 3;

const ProgramCard = ({ title, desc, href, image, tags }: ProgramCardProps) => {
  return (
    <div className="flex max-md:flex-col  lg:flex-row items-stretch bg-white shadow-md rounded-xl gap-5 px-5 md:px-10 md:gap-20  py-10">
      <div className="flex-1 relative max-md:aspect-video md:w-[26.7rem] md:h-76 rounded-lg">
        <Image
          src={image || "/placeholder.jpeg"}
          alt="Gambar Project"
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-2  flex-col text-start gap-3 md:gap-5">
        <h1 className="text-lg md:text-3xl font-semibold">{title}</h1>
        <p className="max-mdtext-sm">{desc}</p>
        <div className="flex flex-wrap gap-2 ">
          {tags.map((t, i) => (
            <Badge key={i}>{t}</Badge>
          ))}
        </div>

        <Link href={href} className="mt-auto">
          <Button className="items-center gap-4 text-center w-full">
            <BiSearch /> See Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default function OurPrograms() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(PROGRAM_BEM.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currItems = PROGRAM_BEM.slice(startIndex, endIndex);

  const radius = useScrollRadius(ref, {
    maxRadius: isMobile ? 100 : 250,
  });

  const allTags = Array.from(new Set(PROGRAM_BEM.flatMap((p) => p.tags)));

  const searchRef = useRef<HTMLButtonElement>(null);
  const handleSearchClick = () => {
    return;
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (searchRef.current) {
        searchRef.current.click();
      }
    }
  };

  return (
    <section className="min-h-screen">
      <motion.div
        ref={ref}
        style={{
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        className="flex flex-col h-full rounded-b-none pt-20 md:px-20 px-5 gap-5 bg-linear-to-b from-pacil-blue-300  to-white will-change-transform text-center"
      >
        <h2 className="text-4xl md:text-5xl space-y-2 md:space-y-4 font-extrabold ">
          <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
            Program BEM
          </span>
        </h2>
        <div className="flex  flex-row items-center gap-4">
          <Input
            type="text"
            placeholder="Search..."
            className="border-black max-md:py-5 md:py-6"
            onKeyDown={handleEnterKey}
          />
          <div className="flex flex-row gap-2">
            <Button
              ref={searchRef}
              onClick={handleSearchClick}
              className="bg-white py-0! max-md:p-3! hover:bg-white/80 "
            >
              <BiSearch className="text-black" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="md:space-x-3 max-md:p-3!">
                  <FilterIcon className="size-4 " />
                  <span className="max-md:hidden">Filter </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {allTags.map((t, i) => (
                  <DropdownMenuItem key={i}>{t}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          {currItems.map((p, i) => (
            <ProgramCard
              key={i}
              title={p.title}
              tags={p.tags}
              desc={p.desc}
              href={p.href}
            />
          ))}
        </div>
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
              />
            </PaginationItem>
            {Array.from({ length: totalPage }).map((_, i) => {
              const page = i + 1;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(prev + 1, totalPage));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </motion.div>
    </section>
  );
}
