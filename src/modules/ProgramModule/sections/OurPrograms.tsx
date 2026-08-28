"use client";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PROGRAM_BEM } from "../const";
import useScrollRadius from "@/hooks/useScrollRadius";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProgramCard from "../components/ProgramCard";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FilterIcon } from "lucide-react";

const ITEMS_PER_PAGE = 3;

export default function OurPrograms() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [titleQuery, setTitleQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProgramByTag, setFilterProgramByTag] = useState<string | null>(
    null,
  );

  const radius = useScrollRadius(ref, {
    maxRadius: isMobile ? 100 : 250,
  });

  const filteredPrograms = useMemo(() => {
    let programs = PROGRAM_BEM;
    const q = titleQuery.trim().toLowerCase();

    if (q) {
      programs = programs.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (filterProgramByTag) {
      programs = programs.filter((p) => p.tags.includes(filterProgramByTag));
    }

    return programs;
  }, [titleQuery, filterProgramByTag]);

  const totalPage = Math.ceil(filteredPrograms.length / ITEMS_PER_PAGE);

  const currentPrograms = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPrograms.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPrograms, currentPage]);

  const allTags = Array.from(new Set(PROGRAM_BEM.flatMap((p) => p.tags)));

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
            onChange={(e) => {
              setTitleQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="border-black"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white space-x-2 py-2! hover:bg-white/80">
                <FilterIcon className="text-black" />
                <span className="hidden md:inline text-black font-semibold">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onSelect={() => {
                  setFilterProgramByTag(null);
                  setCurrentPage(1);
                }}
              >
                All
              </DropdownMenuItem>
              {allTags.map((t, i) => (
                <DropdownMenuItem
                  onSelect={() => {
                    setFilterProgramByTag(t);
                    setCurrentPage(1);
                  }}
                  key={i}
                >
                  {/* hey */}
                  {t}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
          <Pagination className="mt-10 mb-10">
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
