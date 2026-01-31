"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
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
    <div className="flex max-md:flex-col lg:flex-row bg-white shadow-md rounded-xl gap-5 px-5 md:px-10 py-10">
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

export default function OurPrograms() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [titleQuery, setTitleQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const radius = useScrollRadius(ref, {
    maxRadius: isMobile ? 100 : 250,
  });

  const filteredPrograms = useMemo(() => {
    const q = titleQuery.trim().toLowerCase();
    if (!q) return PROGRAM_BEM;

    return PROGRAM_BEM.filter((program) =>
      program.title.toLowerCase().includes(q),
    );
  }, [titleQuery]);

  const totalPage = Math.ceil(filteredPrograms.length / ITEMS_PER_PAGE);

  const currentPrograms = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPrograms.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPrograms, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [titleQuery]);

  return (
    <section className="min-h-screen">
      <motion.div
        ref={ref}
        style={{
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        }}
        className="flex flex-col pt-20 px-5 md:px-20 gap-6 bg-linear-to-b from-pacil-blue-300 to-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-linear-to-r from-pacil-blue-700 to-pacil-red-700 bg-clip-text text-transparent">
            Program BEM
          </span>
        </h2>

        <div className="flex items-center gap-4">
          <Input
            placeholder="Search program..."
            value={titleQuery}
            onChange={(e) => setTitleQuery(e.target.value)}
            className="border-black"
          />

          <Button className="bg-white py-2! hover:bg-white/80">
            <BiSearch className="text-black" />
            <span className="hidden md:inline text-black">Search</span>
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          {currentPrograms.length === 0 && (
            <p className="text-gray-500">Belum ada Program</p>
          )}

          {currentPrograms.map((p, i) => (
            <ProgramCard key={i} {...p} />
          ))}
        </div>

        {totalPage > 1 && (
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((p) => Math.max(p - 1, 1));
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
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((p) => Math.min(p + 1, totalPage));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </motion.div>
    </section>
  );
}
