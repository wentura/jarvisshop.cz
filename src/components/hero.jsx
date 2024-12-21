import Link from "next/link";
import React from "react";

import SwiperDiv from "./swiper";
export default function Hero() {
  return (
    // <div className="bg-[url(https://res.cloudinary.com/dqtptqvnb/image/upload/v1732557687/1000001408_oqeyqx.webp)] bg-cover bg-center bg-no-repeat bg-[#00000055] bg-blend-darken">
    <div>
      <div>
        <div className="bg-[url(https://res.cloudinary.com/dqtptqvnb/image/upload/v1734802747/shutterstock_zlxmsc.webp)] bg-cover bg-center bg-no-repeat bg-[#00000055] bg-blend-darken sm:hidden block">
          <div className="abosolute pt-4 pb-2 mx-auto flex flex-col text-center">
            <div className="max-w-full mb-10">
              <ul className="justify-center text-[11px] -mb-2 nadpisText-400 text-white uppercase  flex gap-x-3">
                <li>potraviny</li>
                <li>|</li>
                <li>lahůdky</li>
                <li>|</li>
                <li>alkohol</li>
                <li>|</li>
                <li>drogérie</li>
              </ul>
              <h1 className="nadpisText-800 text-8xl leading-none tracking-tight mx-auto md:text-[150px] lg:text-[250px] xl:text-[300px] text-white mb-2">
                JARVIS
              </h1>
              <ul className="text-lg md:text-xl md:text-right nadpisText-700 text-white uppercase">
                <li>prodejny budoucnosti</li>
                <li>otevřeno 24/7</li>
                <li>lokálnost</li>
                <li>inovace</li>
                <li>pohodlí</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden sm:block">
        <div className="absolute top-0 left-0 right-0 mx-auto max-w-4xl max-h-[600px] md:max-h-[550px] lg:max-h-[700px] xl:max-h-[730px] -z-10 overflow-hidden">
          <SwiperDiv />
        </div>
        <div className="abosolute pt-4 pb-2 sm:pt-12 sm:pb-8 md:pt-24 md:pb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pt-32 lg:pb-24 flex flex-col text-center sm:mb-0">
          <div className="max-w-full mb-10 md:mx-auto sm:text-center md:mb-12">
            <ul className="justify-center  text-[11px] -mb-2 md:text-xs md:-mb-4 md:justify-start nadpisText-400 text-white uppercase lg:-mb-8 flex gap-x-3">
              <li>potraviny</li>
              <li>|</li>
              <li>lahůdky</li>
              <li>|</li>
              <li>alkohol</li>
              <li>|</li>
              <li>drogérie</li>
            </ul>
            <h1 className="nadpisText-800 text-8xl leading-none tracking-tight mx-auto md:text-[150px] lg:text-[250px] xl:text-[300px] text-white mb-2">
              JARVIS
            </h1>
            <ul className="text-lg md:text-xl md:text-right nadpisText-700 text-white uppercase">
              <li>prodejny budoucnosti</li>
              <li>otevřeno 24/7</li>
              <li>lokálnost</li>
              <li>inovace</li>
              <li>pohodlí</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
