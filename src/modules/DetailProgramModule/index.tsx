"use client"

import Impact from "./sections/impact";
import OurClients from "./sections/our-clients";

interface ProgramDetailProps {
  data: ProgramData;
  variant: "program";  
}

interface PortfolioDetailProps {
  data: PortfolioData;
  variant: "portfolio";  
}

type DetailProps = ProgramDetailProps | PortfolioDetailProps;

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
        <div className="flex w-full justify-between max-md:flex-col">
          <h1 className="text-5xl max-lg:text-4xl text-wrap font-bold bg-linear-to-r text-transparent bg-clip-text from-pacil-blue-700 to-pacil-red-700">
            {data.name}
          </h1>
          <h1 className="font-semibold text-3xl max-lg:text-xl">April 2026</h1>
        </div>
        <p className="text-xl max-md:text-base">
          {data.desc}
        </p>
      </div>
      <div className="overflow-hidden w-full pb-4 md:pb-10 lg:pb-15 flex justify-center">
        <div className="flex w-fit gap-15 max-md:gap-8 justify-center items-center">
          <div className="flex relative rounded-xl overflow-hidden  aspect-5/4 max-md:aspect-square max-md:h-54 h-86 max-lg:h-72 drop-shadow-lg bg-gray-200 md:-rotate-6 md:translate-y-5 opacity-50">
            <img
              src="/file.svg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="bg-white absolute rounded-t-xl max-lg:py-4 max-lg:px-2 px-4 py-6 text-center w-full bottom-0">
              <span className="text-4xl max-lg:text-2xl font-bold bg-linear-to-r text-transparent bg-clip-text from-pacil-blue-700 to-pacil-red-700">
                Nama Momen
              </span>
            </div>
          </div>
          <div className="flex relative rounded-xl overflow-hidden aspect-5/4 max-md:aspect-square max-md:h-54 h-86 max-lg:h-72 drop-shadow-lg bg-gray-200">
            <img
              src="/file.svg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="bg-white absolute rounded-t-xl max-lg:py-4 max-lg:px-2 px-4 py-6 text-center w-full bottom-0">
              <span className="text-4xl max-lg:text-2xl font-bold bg-linear-to-r text-transparent bg-clip-text from-pacil-blue-700 to-pacil-red-700">
                Nama Momen
              </span>
            </div>
          </div>
          <div className="flex relative rounded-xl overflow-hidden aspect-5/4 max-md:aspect-square max-md:h-54 h-86 max-lg:h-72 drop-shadow-lg bg-gray-200 md:rotate-6 md:translate-y-5 opacity-50">
            <img
              src="/file.svg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="bg-white absolute rounded-t-xl max-lg:py-4 max-lg:px-2 px-4 py-6 text-center w-full bottom-0">
              <span className="text-4xl max-lg:text-2xl font-bold bg-linear-to-r text-transparent bg-clip-text from-pacil-blue-700 to-pacil-red-700">
                Nama Momen
              </span>
            </div>
          </div>
        </div>
      </div>
      <Impact />
      <OurClients />
    </main>
  );
};

export default DetailModule;
