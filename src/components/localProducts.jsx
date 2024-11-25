import { localProducts } from "@/data/localProducts";
import Link from "next/link";
import React from "react";
export default function LocalProducts() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center order-1">
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
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
