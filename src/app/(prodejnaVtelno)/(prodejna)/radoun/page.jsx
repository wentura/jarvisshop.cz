import React from "react";
import { nabidka } from "./nabidka";

export default function Radoun() {
  return (
    <div className="w-full bg-amber-950 bg-opacity-60">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Naše Nabídka</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {nabidka.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 transition-all duration-300 transform hover:-translate-y-1"
              style={{
                transform: `rotate(${Math.floor(Math.random() * 17) - 5}deg)`,
              }}
            >
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-md font-bold text-white  bg-amber-700 w-20 h-20 rounded-full flex items-center absolute -bottom-10 -right-4 bottom-4 flex justify-center">
                  {item.price} Kč
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-50 mb-2 ">
                {item.title}
              </h2>
              <p className="text-gray-50 mb-0 text-xl">{item.description}</p>
              <div className="flex justify-end items-center"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
