import { timelineData, timelineDataFuture } from "@/data/timelineData";
import React from "react";

export default function Timeline() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-full mb-10 md:mx-auto sm:text-center lg:max-w-screen-lg md:mb-12">
        <h2 className="max-w-full mb-6 nadpisText-800 text-4xl tracking-tight text-jarvisSecondary md:text-5xl lg:text-7xl uppercase text-center">
          Časová osa
        </h2>
      </div>
      <div className="flex w-full flex-col items-start">
        {timelineData.map((item, index) => (
          <div key={index} className="group flex gap-x-2 md:gap-x-8">
            <div className="relative">
              {index < timelineData.length - 0 && (
                <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-neutral-300"></div>
              )}
              <span className="relative z-10 grid h-12 w-12 md:w-20 place-items-center bg-white font-bold nadpisText-700 text-lg md:text-xl tracking-tight uppercase text-center">
                {item.year}
              </span>
            </div>
            <div className="-translate-y-1.5 pb-8 text-slate-600">
              <p className="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">
                {item.year}
              </p>
              <ul className="mt-8 space-y-1 text-base antialiased">
                {item.events.map((event, eventIndex) => (
                  <li
                    key={eventIndex}
                    dangerouslySetInnerHTML={{ __html: event }}
                  >
                    {/* {event} */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pl-2 md:pl-8 text-jarvisSecondary nadpisText-700 md:text-xl tracking-tight uppercase text-center">
        Jedeme dál a rozrůstáme se.
      </div>
      {/* <div className="flex w-full flex-col items-start">
        {timelineDataFuture.map((item, index) => (
          <div key={index} className="group flex gap-x-2 md:gap-x-8">
            <div className="relative">
              {index < timelineDataFuture.length - 0 && (
                <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-neutral-300"></div>
              )}
              <span className="relative z-10 grid h-12 w-12 md:w-20 place-items-center rounded-full bg-white  font-bold nadpisText-800 text-lg md:text-2xl tracking-tight uppercase text-center">
                {item.year}
              </span>
            </div>
            <div className="-translate-y-1.5 pb-8 text-slate-600">
              <p className="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">
                {item.year}
              </p>
              <ul className="mt-8 space-y-1 text-base antialiased">
                {item.events.map((event, eventIndex) => (
                  <li
                    key={eventIndex}
                    dangerouslySetInnerHTML={{ __html: event }}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        ))} 
      </div>*/}
    </div>
  );
}
