import Link from "next/link";
import React from "react";
export default function Hero() {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dqtptqvnb/image/upload/v1732557687/1000001408_oqeyqx.webp)] bg-cover bg-center bg-no-repeat bg-[#00000055] bg-blend-darken">
      <div className="pt-32 pb-20 md:pt-44 md:pb-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pt-56 lg:pb-44 flex flex-col mb-16 text-center sm:mb-0">
        <div className="max-w-full mb-10 md:mx-auto sm:text-center md:mb-12">
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
  );
}
