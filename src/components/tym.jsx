import React from "react";
import Link from "next/link";
export default function Tym() {
  return (
    <div className="bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="d9d7687a-355f-4502-8ec4-7945db034688"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">The</span>
              </span>{" "}
              quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  The quick, brown fox
                  <br className="hidden md:block" />
                  jumps over{" "}
                  <span className="inline-block text-deep-purple-accent-400">
                    a lazy dog
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg lg:grid-cols-2">
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Oliver Aguilerra</p>
                    <p className="text-sm text-gray-800">Product Manager</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Marta Clermont</p>
                    <p className="text-sm text-gray-800">Design Team Lead</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Anthony Geek</p>
                    <p className="text-sm text-gray-800">CTO, Lorem Inc.</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Alice Melbourne</p>
                    <p className="text-sm text-gray-800">Human Resources</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Martin Garix</p>
                    <p className="text-sm text-gray-800">Bad boy</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Andrew Larkin</p>
                    <p className="text-sm text-gray-800">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
              <div>selkgj</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
