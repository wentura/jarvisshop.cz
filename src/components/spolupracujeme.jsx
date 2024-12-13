import { SpolupracujemeData } from "@/data/spolupracujemeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Spolupracujeme() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-full mb-10 md:mx-auto sm:text-center lg:max-w-screen-md md:mb-12">
          <h2 className="hidden md:blockmax-w-full mb-6 nadpisText-800 text-3xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
            spolupracujeme
          </h2>
          <h2 className="block md:hiddenmax-w-full mb-6 nadpisText-800 text-3xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
            naši dodavatelé
          </h2>
          <p className="">
            <span className="font-bold">
              {" "}
              Spolupracujeme a podporujeme místní farmáře a výrobce
            </span>
            , kteří dodávají{" "}
            <span className="font-bold">čerstvé potraviny</span> a kvalitní
            produkty přímo do našich prodejen. Každý nákup přispívá k rozvoji
            místní ekonomiky.
          </p>
        </div>
        <div className="grid gap-2 md:row-gap-4 md:mb-8 lg:grid-cols-4 grid-cols-2">
          {SpolupracujemeData.map((item, index) => (
            <div className="flex flex-col h-full" key={index}>
              <Image
                src={item.logo}
                className="object-contain w-auto h-36 md:h-56 mx-auto"
                width={250}
                height={250}
                alt={`${item.title} logo`} // Alt text for the logo
              />
              <div className="flex-grow border border-t-0 rounded-b hidden md:block">
                <div className="p-2">
                  <h6 className="mb-2 font leading-5 nadpisText-700 text-jarvisSecondary uppercase">
                    {item.title}
                  </h6>
                  <p className="text-sm text-gray-900">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
