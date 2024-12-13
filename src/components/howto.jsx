import { HowtoData } from "@/data/howTo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Howto() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-full mb-6 nadpisText-800 text-4xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
        jak nakupovat?{" "}
      </h2>
      <div className="flex flex-col justify-between w-full mx-auto mb-24">
        <div className="youtube-video-container rounded-2xl overflow-hidden">
          <iframe
            width="800"
            height="600"
            src="https://www.youtube.com/embed/6WJUsLlIUUs?si=nRKEZ-X2SJC62oIz"
            title="Jak nakupovat v Jarvis prodejně"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full">
        {HowtoData.map((how, index) => (
          <div
            className={`flex max-w-screen-xl md:gap-x-24 gap-y-8 flex-col justify-center text-center mx-auto mb-24 md:text-left md:items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            key={index}
          >
            <div className="md:hidden w-16 bg-gray-50 mx-auto h-16 flex justify-center items-center text-2xl md:text-4xl text-bolder drop-shadow-xl nadpisText-800">
              {index + 1}
            </div>
            <div className="md:w-[500px]">
              <h3 className="nadpisText-700 uppercase text-xl md:text-3xl pb-4 text-jarvisSecondary">
                {how.title}
              </h3>
              <p>{how.text}</p>
            </div>
            <div className="hidden md:flex">
              <div className="w-[50px]">
                <div className="bg-gray-50 mx-auto w-16 h-16 flex justify-center items-center text-2xl md:text-4xl text-bolder drop-shadow-xl nadpisText-800 ">
                  {index + 1}
                </div>
              </div>
            </div>
            <div className="mx-auto h-72 overflow-hidden object-center  rounded-xl">
              <Image
                src={how.image}
                alt="vstup do prodejny"
                className="w-[500px]"
                width={400}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
