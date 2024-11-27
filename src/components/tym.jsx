import Link from "next/link";
import React from "react";
export default function Tym() {
  return (
    <div className="bg-jarvisBg">
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
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Oliver Aguilerra</p>
                    <p className="text-sm text-gray-800">Product Manager</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Marta Clermont</p>
                    <p className="text-sm text-gray-800">Design Team Lead</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Anthony Geek</p>
                    <p className="text-sm text-gray-800">CTO, Lorem Inc.</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Alice Melbourne</p>
                    <p className="text-sm text-gray-800">Human Resources</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Martin Garix</p>
                    <p className="text-sm text-gray-800">Bad boy</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Andrew Larkin</p>
                    <p className="text-sm text-gray-800">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
              <div>selkgj</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
