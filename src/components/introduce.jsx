import Link from "next/link";
import React from "react";
export default function Introduce() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-1 text-4xl nadpisText-800 uppercase tracking-tight md:text-7xl text-jarvisSecondary">
            Inovantivni nakupivani bez omezeni
          </h5>

          <div className="flex items-center uppercase nadpisText-700 pl-1 text-jarvisSecondary">
            bez omezení a bez obsluhy
          </div>
        </div>
        <div>
          <img
            className="object-fit w-full"
            src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1732556877/jarvis-logo-rgb-02_nq2szx.png"
            alt="Jarvsi Shop logo"
          />
          <p className="my-6 text-gray-800 ">
            Naše prodejny nabízeji{" "}
            <span className="font-bold">maximální komfort a pohodlí</span> při
            každém nákupu.{" "}
            <span className="font-bold">
              Moderní technologie, inteligentní pokladny
            </span>{" "}
            a samoobslužný přístup přináší zákazníkům nákup během několika
            minut.
          </p>
        </div>
      </div>
    </div>
  );
}
