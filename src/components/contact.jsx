import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Contact() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-xl sm:text-center sm:mx-auto">
        <h2 className="max-w-full mb-12 nadpisText-800 text-4xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
          kontakt
        </h2>
        <div className="flex flex-col gap-y-16 md:flex-row  items-top  justify-around">
          <div className="flex flex-col items-center max-w-[350px] gap-y-2">
            <h4 className=" nadpisText-800 uppercase">sídlo</h4>
            <p>
              Kropáčova Vrutice 112
              <br />
              294 79, Kropáčova Vrutice <br />
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[350px] gap-y-2">
            <h4 className=" nadpisText-800 uppercase">1. prodejna</h4>
            <p>
              Chorušická 111
              <br />
              Mělnické Vtelno - Radouň
              <br />
              <a
                href="https://www.google.com/maps/place/Choru%C5%A1ick%C3%A1+111,+277+38+M%C4%9Blnick%C3%A9+Vtelno-Radou%C5%88/@50.3483543,14.6747154,17z/data=!3m1!4b1!4m6!3m5!1s0x470be36c193766fb:0xf30dc2233cba8293!8m2!3d50.3483543!4d14.6772957!16s%2Fg%2F11c4kmcg2x!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <Image
                  src="/icon_map.png"
                  width={300}
                  height={300}
                  alt="mapa"
                  className="w-10 h-10 mx-auto mt-4"
                />
              </a>
            </p>
          </div>
        </div>
        <hr className="w-full my-8 border-gray-300" />
        <div className="flex flex-col md:flex-row gap-y-4 justify-around items-center">
          <a
            className="py-4 px-12 nadpisText-700 bg-jarvisBg drop-shadow-2xl rounded-lg border-2 border-jarvisSecondary hover:bg-jarvisSecondary hover:text-gray-100 transition duration-300 hover:drop-shadow-md"
            // href="tel:+420733475746"
            href="tel:+420777776985"
          >
            {/* +420 733 47 57 46 */}
            infolinka - 777 77 69 85
          </a>
          <a
            className="py-4 px-12 nadpisText-700 bg-jarvisBg drop-shadow-2xl rounded-lg border-2 border-jarvisSecondary hover:bg-jarvisSecondary hover:text-gray-100 transition duration-300 hover:drop-shadow-md"
            href="mailto:info@jarvisshop.net"
          >
            info@jarvisshop.net
          </a>
        </div>
      </div>
    </div>
  );
}
