"use client";

import Contact from "@/components/elements/AnyQuestion/Contact";
import { PortfolioData, ProgramData } from "./interface";
import Impact from "./sections/impact";
import OurClients from "./sections/our-clients";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Moments from './sections/moments';

interface ProgramDetailProps {
  data: ProgramData;
  variant: "program";
}

interface PortfolioDetailProps {
  data: PortfolioData;
  variant: "portfolio";
}

type DetailProps = ProgramDetailProps | PortfolioDetailProps;

const formatDate = (dateStr: string) => {
  const [year, month] = dateStr.split("-").map(Number);
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return `${monthNames[month - 1]} ${year}`;
};

const DetailModule = ({ data, variant }: DetailProps) => {
  return (
    <main className="flex flex-col gap-15 w-full pt-20">
      <div className="w-full px-5 md:px-10 lg:px-15">
        <button
          onClick={() => {
            window.location.href = `/${variant}`;
          }}
          className="aspect-square w-12 rounded-full drop-shadow-lg bg-white border-neutral-100 border hover:brightness-95 flex items-center justify-center transition p-1"
        >
          {/* arrow */}
          <svg
            width="12"
            height="24"
            viewBox="0 0 12 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.54801 6.58001L8.48701 5.52001L2.70801 11.297C2.61486 11.3896 2.54093 11.4996 2.49048 11.6209C2.44003 11.7421 2.41406 11.8722 2.41406 12.0035C2.41406 12.1348 2.44003 12.2649 2.49048 12.3861C2.54093 12.5074 2.61486 12.6174 2.70801 12.71L8.48701 18.49L9.54701 17.43L4.12301 12.005L9.54801 6.58001Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-6 px-15 max-lg:px-10 max-md:px-5">
        <div className="flex w-full justify-between gap-4 items-center max-md:flex-col max-md:items-start">
          <div className="bg-linear-to-r bg-clip-text from-pacil-blue-700 to-pacil-red-700 pb-3">
            <h1 className="text-5xl max-lg:text-4xl text-wrap font-bold text-transparent">
              {data.name}
            </h1>
          </div>
          {variant === "portfolio" ? (
            <Link href={data.link} target="_blank">
              <button className="gap-4 items-center bg-white drop-shadow-lg px-4 py-2 flex rounded-xl text-nowrap font-semibold hover:brightness-95 active:brightness-90">
                <img
                  src="/instagram.svg"
                  alt="icon"
                  className="aspect-square w-6"
                />
                Tautan Portolio
              </button>
            </Link>
          ) : (
            <h1 className="font-semibold text-3xl max-lg:text-xl">
              {formatDate(data.date)}
            </h1>
          )}
        </div>
        <p className="text-xl max-md:text-base">{data.desc}</p>
      </div>
      <Moments moments={data.moments}/>
      <div className="w-full relative">
        <img src="/impact-bg.svg" alt="icon" className="absolute w-full bottom-6 max-lg:w-7xl max-md:top-1/2" />
        <Impact impacts={data.impacts} />
      </div>
      <OurClients />
      <Contact />
    </main>
  );
};

export default DetailModule;
