"use client";
import Image from "next/image";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSliderData } from "../data/heroSliderData";
export default function SwiperDiv() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay]}
      className="mySwiper bg-cover bg-center bg-no-repeat bg-[#000000] bg-blend-darken "
    >
      {heroSliderData.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item.img}
            alt="heroSlider"
            className="w-full h-full object-cover sm:object-fill max-w-4xl opacity-50"
            width={1900}
            height={1000}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
