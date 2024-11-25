import React from "react";

export default function Howto() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="text-center">jak nakupovat</div>
      <div className="flex flex-col justify-center max-w-screen-xl">
        <div className="grid max-w-screen-xl gap-8 lg:grid-cols-5 sm:mx-auto py-8">
          <div className="col-span-2 min-w-96 bg-cyan-400">a</div>
          <div className="w-16 bg-red-300 bg-stone-50 mx-auto h-16 flex justify-center items-center text-2xl text-bolder drop-shadow-xl">
            1
          </div>
          <div className="col-span-2 min-w-96 bg-cyan-400">c</div>
        </div>
        <div className="grid max-w-screen-xl gap-8 lg:grid-cols-5 sm:mx-auto py-8">
          <div className="col-span-2 bg-cyan-400">a</div>
          <div className="w-36 bg-red-300">b</div>
          <div className="col-span-2 bg-cyan-400">c</div>
        </div>
      </div>
    </div>
  );
}
