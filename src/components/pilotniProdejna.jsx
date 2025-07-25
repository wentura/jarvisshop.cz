import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function PilotniProdejna() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-full mb-8 nadpisText-800 text-4xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
        naše prodejny
      </h2>
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl text-center md:text-left md:text-2xl font-bold order-1">
            Mělnické Vtelno - Radouň
          </h2>
          <div className="flex flex-col justify-center order-2">
            <div className="max-w-full mb-6">
              <p className="mt-4">
                Prodejna je dočasně mimo provoz z technických důvodů.
              </p>
            </div>
            <div className="flex items-center  mb-4">
              <Image
                src="/icon_map.png"
                height={50}
                width={50}
                alt="ikona mapy"
              />
              <a
                href="https://www.google.com/maps/place/Choru%C5%A1ick%C3%A1+111,+277+38+M%C4%9Blnick%C3%A9+Vtelno-Radou%C5%88/@50.3483543,14.6747154,17z/data=!3m1!4b1!4m6!3m5!1s0x470be36c193766fb:0xf30dc2233cba8293!8m2!3d50.3483543!4d14.6772957!16s%2Fg%2F11c4kmcg2x!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="pl-8 nadpisText-400 underline decoration-jarvisPrimary text-jarvisSecondary text-lg"
              >
                Chorušická 111, Mělnické Vtelno - Radouň
              </a>
            </div>
          </div>
          {/* <div>
            <Image
              className="object-cover w-full h-56 rounded-xl shadow-xl sm:h-96"
              src="/mapa.webp"
              height={300}
              width={500}
              alt="mapa Mělnické Vtelno - Radouň"
            />
          </div> */}
        </div>
        <div>
          <h2 className="text-xl text-center md:text-left md:text-2xl font-bold order-1">
            Kralupy nad Vltavou, Palackého náměstí 460/12
          </h2>
          <div className="flex flex-col justify-center order-2">
            <div className="max-w-full mb-6">
              <p className="mt-4">
                Kamenná prodejna hned vedle Turbo Pizza na Palackého náměstí.
              </p>
            </div>
            <div className="flex items-center  mb-4">
              <Image
                src="/icon_map.png"
                height={50}
                width={50}
                alt="ikona mapy"
              />
              <a
                href="https://maps.app.goo.gl/b2DasT7UbPw846io8"
                target="_blank"
                className="pl-8 nadpisText-400 underline decoration-jarvisPrimary text-jarvisSecondary text-lg"
              >
                Kralupy nad Vltavou, Palackého náměstí 460/12
              </a>
            </div>
          </div>
          {/* <div>
            <Image
              className="object-cover w-full h-56 rounded-xl shadow-xl sm:h-96"
              src="/mapa.webp"
              height={300}
              width={500}
              alt="mapa Mělnické Vtelno - Radouň"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
