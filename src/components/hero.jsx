import Link from "next/link";
import React from "react";
export default function Hero() {
  return (
    <div className="bg-teal-600">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <Link href="/" className="mb-6 sm:mx-auto"></Link>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <h1 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                  JARVIS
                </h1>
                <p className="mb-6 ">shop</p>
              </div>
              <p className=" md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
