import { localProducts } from "@/data/localProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function LocalProducts() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          {localProducts.map((product, index) => (
            <div className="pb-6 mb-6" key={index}>
              <h6 className="mb-1 nadpisText-700 text-lg md:text-xl tracking-tight text-jarvisSecondary uppercase">
                {product.title}
              </h6>
              <p className="">{product.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5">
          <Image
            className="object-center object-cover w-full h-56 col-span-2 rounded-xl shadow-lg"
            src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733842973/paul_b4tsl2.webp"
            alt="lokální produkty"
            width={500}
            height={500}
          />
          <img
            className="object-cover w-full h-48 rounded-xl shadow-lg "
            src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733842963/Jahodovy-dzem-s-vanilkou-vesnicke-dobroty-300x200_lpqg2c.webp"
            alt="lokální produkty"
            width={300}
            height={300}
          />
          <img
            className="object-cover w-full h-48 rounded-xl shadow-lg"
            src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1733842969/Vesnicke_dobroty_dzem-300x200_k6f0xm.webp"
            alt="lokální produkty"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
