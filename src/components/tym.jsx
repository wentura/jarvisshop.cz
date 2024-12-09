import Link from "next/link";
import React from "react";
export default function Tym() {
  return (
    <div className="container mx-auto px-4">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-full mb-6 nadpisText-800 text-4xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
            jarvis shop tým
          </h2>
        </div>
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-12">
              {/* <h2 className="nadpisText-700 uppercase text-xl md:text-3xl pb-4 text-jarvisSecondary">
                  náš tým
                </h2> */}
              <p className="text-base text-gray-700 md:text-lg">
                Jsme technologická společnost JARVIS, která vyrábí obchody
                budoucnosti. Bez nutnosti obsluhy a NONSTOP otevřeno! Věříme v
                lepší a zábavnější nakupování. Prostě inteligentní obchod
                budoucnosti.
              </p>
            </div>
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg lg:grid-cols-2">
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733735651/a4_fniwpq.webp"
                  alt="Karel Šindelář"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Karel Šindelář</p>
                  <p className="text-sm text-gray-800">zakladatel</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733735651/a5_xoxpx3.webp"
                  alt="Jakub Šindelář"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Jakub Šindelář</p>
                  <p className="text-sm text-gray-800">
                    řízení výroby provozoven
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733735651/a6_dto5kp.webp"
                  alt="Petra Medřická"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Petra Medřická</p>
                  <p className="text-sm text-gray-800">
                    produkt manažer, komunikace
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full"
              src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733735651/a10_ro0dj7.webp"
              alt="Šindelářovi"
            />
            <div className="flex flex-row justify-around pt-4">
              <div>Karel Šindelář</div>
              <div>Jakub Šindelář</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
