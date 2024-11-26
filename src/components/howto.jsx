import { HowtoData } from "@/data/howTo";
import Link from "next/link";
import React from "react";
export default function Howto() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-full mb-6 nadpisText-800 text-4xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
        jak nakupovat?{" "}
      </h2>
      <div className="flex flex-col justify-center w-full">
        {HowtoData.map((how, index) => (
          <div
            className={`flex max-w-screen-xl gap-8 flex-col justify-center text-center mx-auto mb-24 md:text-left md:items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            key={index}
          >
            <div className="md:hidden w-16 bg-gray-50 mx-auto h-16 flex justify-center items-center text-2xl md:text-4xl text-bolder drop-shadow-xl nadpisText-800">
              {index + 1}
            </div>
            <div className="md:w-2/5">
              <h3 className="nadpisText-700 uppercase text-xl md:text-3xl pb-4 text-jarvisSecondary">
                {how.title}
              </h3>
              <p>
                Stačí naskenovat kód na vstupních dveřích a získáte přístup do
                prodejny.
              </p>
            </div>
            <div className="hidden md:flex md:w-1/5">
              <div className="bg-gray-50 mx-auto w-16 h-16 flex justify-center items-center text-2xl md:text-4xl text-bolder drop-shadow-xl nadpisText-800 ">
                {index + 1}
              </div>
            </div>
            <div className="md:w-2/5 mx-auto">
              <img
                src="https://dummyimage.com/400x250.png"
                alt="vstup do prodejny"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
