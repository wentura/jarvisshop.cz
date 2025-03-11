"use client";

import React, { useMemo, useState } from "react";
import { nabidka } from "./nabidka";

const title = "Naše nabídka";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Radoun() {
  const [activeGroup, setActiveGroup] = useState("all");

  // Get unique groups from nabidka
  const groups = ["all", ...new Set(nabidka.map((item) => item.group))];

  // Filter and shuffle items based on active group
  const filteredItems = useMemo(() => {
    const filtered =
      activeGroup === "all"
        ? nabidka
        : nabidka.filter((item) => item.group === activeGroup);
    return shuffleArray(filtered);
  }, [activeGroup]);

  // Group name translations
  const groupNames = {
    all: "Vše",
    syr: "Sýry",
    mlecne: "Mléčné výrobky",
    maso: "Maso",
    vesnickeDobroty_sirupy: "Sirupy",
    vesnickeDobroty_omacka: "Omáčky",
    vesnickeDobroty_dzem: "Džemy",
    vceliFarma: "Včelí farma",
  };

  return (
    <div className="w-full bg-red-950 bg-opacity-80">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">{title}</h1>

        {/* Navigation Menu */}
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                activeGroup === group
                  ? "bg-red-700 text-white"
                  : "bg-red-200 text-red-900 hover:bg-red-200"
              }`}
            >
              {groupNames[group]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-center items-center"
              style={{
                transform: `rotate(${Math.floor(Math.random() * 17) - 5}deg)`,
              }}
            >
              <div className="relative mb-4 text-center flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-44 h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-md font-bold text-white  bg-red-700 w-20 h-20 rounded-full flex items-center absolute -bottom-10 -right-4 bottom-4 flex justify-center">
                  {item.price} Kč
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-2 text-center">
                {item.title}
              </h2>
              <p className="text-gray-200 mb-0 text-md md:text-xl text-center">
                {item.description}
              </p>
              <div className="flex justify-end items-center"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
