"use client";

import { useEffect, useMemo, useState } from "react";
import { PROJECT_BEM } from "../const";
import ProjectCard from "../components/ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProjectList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSelected, setIsSelected] = useState<1 | 2>(1);

  const filteredProjects = useMemo(() => {
    if (isSelected === 1) {
      return PROJECT_BEM.filter((p) => p.type === "internal");
    } else {
      return PROJECT_BEM.filter((p) => p.type === "external");
    }
  }, [isSelected]);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <section className="min-h-screen max-md:mt-20">
      <div className="h-full">
        <div className="flex flex-row items-center justify-center gap-3">
          <button
            onClick={() => setIsSelected(1)}
            className={`px-10 py-1 rounded-t-md focus:text-white font-semibold font-sans text-lg  cursor-pointer ${isSelected === 1 ? "bg-red-500 text-white" : ""}`}
          >
            Internal
          </button>
          <button
            onClick={() => setIsSelected(2)}
            className={`px-10 py-1 rounded-t-md focus:text-white font-semibold font-sans text-lg  cursor-pointer ${isSelected === 2 ? "bg-red-500 text-white" : ""}`}
          >
            External
          </button>
        </div>
        <div className="p-12 flex flex-col justify-center h-full shadow-sm bg-white gap-12 rounded-t-[60px]">
          {currentProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </section>
  );
}
