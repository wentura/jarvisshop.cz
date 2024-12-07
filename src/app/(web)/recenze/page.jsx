import { recenzeData } from "@/data/recenzeData";
import Link from "next/link";
import React from "react";
export default function Recenze() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-full mb-10 md:mx-auto sm:text-center lg:max-w-screen-lg md:mb-12">
        <h2 className="max-w-full mb-6 nadpisText-800 text-4xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
          recenze a ohlasy
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mx-auto lg:gap-6 indie-flower">
        {recenzeData.map((item, index) => (
          <div
            className={` ${
              index % 2 === 0 ? "rotate-6" : "-rotate-4"
            } p-5 bg-yellow-200 shadow-xl h-80 w-80 flex flex-col justify-center`}
            key={index}
          >
            <h6
              className={` ${
                index % 2 === 0 ? "-rotate-3" : "-rotate-6"
              } pt-4 text-2xl pb-2`}
            >
              {item.title}
            </h6>
            <p
              className={` ${
                index % 2 === 0 ? "-rotate-3" : "-rotate-6"
              } text-xl text-gray-900`}
            >
              {item.text}
            </p>
            {/* <p
              className={` ${
                index % 2 === 0 ? "-rotate-12" : "-rotate-8"
              } text-right text-xl pt-4 pr-8`}
            >
              {item.name}
            </p> */}
          </div>
        ))}
      </div>
      <div className="text-right mt-12">
        <Link
          href="/"
          className="text-jarvisSecondary underline underline-jarvisPrimary"
        >
          více recenzí a ohlasů
        </Link>
      </div>
    </div>
  );
}
