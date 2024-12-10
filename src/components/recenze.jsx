import { recenzePicData } from "@/data/recenzePicData";
import Image from "next/image";
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
      <div className="flex flex-wrap justify-center mx-auto lg:gap-6">
        {recenzePicData.slice(0, 6).map((item, index) => (
          <div
            className={` ${
              index % 2 === 0 ? "rotate-6" : "-rotate-4"
            }  h-80 w-80  flex flex-col justify-center`}
            key={index}
          >
            <Image
              src={item}
              alt="recenze"
              width={400}
              height={400}
              className="drop-shadow-2xl"
            />
          </div>
        ))}
      </div>
      <div className="text-right mt-12">
        <Link
          href="/recenze"
          className="text-jarvisSecondary underline underline-jarvisPrimary"
        >
          více recenzí a ohlasů
        </Link>
      </div>
    </div>
  );
}
