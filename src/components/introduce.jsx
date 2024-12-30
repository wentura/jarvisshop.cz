import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Introduce() {
  return (
    <div
      className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 lg:py-12 scroll-mt-12"
      id="o-nas"
    >
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="lg:pr-10">
          <h5 className="mb-1 text-4xl nadpisText-800 uppercase tracking-tight md:text-7xl text-jarvisSecondary">
            Inovativní nakupování bez omezení
          </h5>

          <div className="flex items-center uppercase nadpisText-700 pl-1 text-jarvisSecondary">
            bez čekání a bez obsluhy
          </div>
        </div>
        <div>
          {/* <img
            className="object-fit w-full scale-110"
            src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1732556877/jarvis-logo-rgb-02_nq2szx.png"
            alt="Jarvsi Shop logo"
						
          /> */}
          <Image
            className="object-fit w-full rounded-xl shadow-xl"
            src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733733657/a3_dzmtno.webp"
            alt="Jarvsi Shop logo"
            width={400}
            height={300}
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
