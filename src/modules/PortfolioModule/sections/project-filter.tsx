"use client";
import { useState } from "react";

export default function ProjectFilter() {
  const [activeTab, setActiveTab] = useState("internal");
  return (
    <div id="programs" className="flex flex-col pt-30">
      <div className="flex justify-center w-full font-semibold">
        <button
          onClick={() => setActiveTab("internal")}
          className={`px-12 py-1.5 rounded-md max-md:px-8 ${
            activeTab === "internal"
              ? "bg-red-400 text-white"
              : "hover:brightness-95 text-black bg-white"
          }  `}
        >
          Internal
        </button>
        <button
          onClick={() => setActiveTab("external")}
          className={`px-12 py-1.5 rounded-md max-md:px-8 ${
            activeTab === "external"
              ? "bg-red-400 text-white"
              : "hover:brightness-95 text-black bg-white"
          }  `}
        >
          External
        </button>
      </div>
      <div className="rounded-t-2xl flex flex-col gap-10 px-15 max-md:px-10 max-md:bg-transparent max-md:border-0 max-md:drop-shadow-none border py-10 border-gray-100 drop-shadow-2xl w-full">
        <div className="w-full drop-shadow-lg bg-white  rounded-3xl flex max-lg:flex-col max-lg:gap-10 gap-15 py-10 px-30 max-lg:px-10 max-md:p-4 max-md:gap-3">
          <div className="bg-gray-200 aspect-3/2 max-md:aspect-video max-md:h-auto h-76 overflow-hidden rounded-xl"></div>
          <div className="flex flex-col grow gap-6 justify-between">
            <div className="flex flex-col gap-7 max-md:gap-4">
              <div className="flex w-full justify-between">
                <h1 className="text-3xl font-bold max-md:text-lg">
                  Project Name
                </h1>
                <h6 className="font-bold text-lg max-md:text-xs max-md:text-gray-500 max-md:font-semibold">
                  April 2026
                </h6>
              </div>
              <p className="max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                totam animi sit sed enim provident?
              </p>
            </div>
            <button className="px-5 py-3 bg-pacil-blue-900 text-white justify-center text-base rounded-lg flex gap-2.5 items-center hover:opacity-90 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.49944 6.40333 3.02389 5.12222 4.07333 4.07333C5.12278 3.02444 6.40389 2.5 7.91667 2.5C9.42944 2.5 10.7108 3.02444 11.7608 4.07333C12.8108 5.12222 13.335 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84444 11.6672 8.95889 11.6667 7.91667C11.6661 6.87444 11.3017 5.98917 10.5733 5.26083C9.845 4.5325 8.95944 4.16778 7.91667 4.16667C6.87389 4.16556 5.98861 4.53028 5.26083 5.26083C4.53306 5.99139 4.16833 6.87667 4.16667 7.91667C4.165 8.95667 4.52972 9.84222 5.26083 10.5733C5.99195 11.3044 6.87722 11.6689 7.91667 11.6667Z"
                  fill="white"
                />
              </svg>
              See Details
            </button>
          </div>
        </div>
        <div className="w-full drop-shadow-lg bg-white rounded-3xl flex max-lg:flex-col max-lg:gap-10 gap-15 py-10 px-30 max-lg:px-10 max-md:p-4 max-md:gap-3">
          <div className="bg-gray-200 aspect-3/2 max-md:aspect-video max-md:h-auto h-76 overflow-hidden rounded-xl"></div>
          <div className="flex flex-col grow gap-6 justify-between">
            <div className="flex flex-col gap-7 max-md:gap-4">
              <div className="flex w-full justify-between">
                <h1 className="text-3xl font-bold max-md:text-lg">
                  Project Name
                </h1>
                <h6 className="font-bold text-lg max-md:text-xs max-md:text-gray-500 max-md:font-semibold">
                  April 2026
                </h6>
              </div>
              <p className="max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                totam animi sit sed enim provident?
              </p>
            </div>
            <button className="px-5 py-3 bg-pacil-blue-900 text-white justify-center text-base rounded-lg flex gap-2.5 items-center hover:opacity-90 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.49944 6.40333 3.02389 5.12222 4.07333 4.07333C5.12278 3.02444 6.40389 2.5 7.91667 2.5C9.42944 2.5 10.7108 3.02444 11.7608 4.07333C12.8108 5.12222 13.335 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84444 11.6672 8.95889 11.6667 7.91667C11.6661 6.87444 11.3017 5.98917 10.5733 5.26083C9.845 4.5325 8.95944 4.16778 7.91667 4.16667C6.87389 4.16556 5.98861 4.53028 5.26083 5.26083C4.53306 5.99139 4.16833 6.87667 4.16667 7.91667C4.165 8.95667 4.52972 9.84222 5.26083 10.5733C5.99195 11.3044 6.87722 11.6689 7.91667 11.6667Z"
                  fill="white"
                />
              </svg>
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
