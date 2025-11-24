"use client";
import { useState } from "react";

export default function ProjectFilter() {
  const [activeTab, setActiveTab] = useState("internal");
  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full">
        <button
          onClick={() => setActiveTab("internal")}
          className={`px-10 py-1 rounded-md ${
            activeTab === "internal" ? "bg-red-400" : "bg-white"
          }  `}
        >
          Internal
        </button>
        <button
          onClick={() => setActiveTab("external")}
          className={`px-10 py-1 rounded-md ${
            activeTab === "external" ? "bg-red-400" : "bg-white"
          }  `}
        >
          External
        </button>
      </div>
      <div className="rounded-t-2xl flex flex-col gap-6 px-15">
        <div className="w-full shadow-xl flex gap-15 py-10 px-30 rounded-xl">
          <div className="bg-gray-200 aspect-4/3 h-76 overflow-hidden rounded-xl"></div>
          <div className="flex flex-col gap-7 grow">
            <div className="flex w-full justify-between">
              <h1>Program</h1>
              <h6>April 2026</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              totam animi sit sed enim provident?
            </p>
            <button>See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
