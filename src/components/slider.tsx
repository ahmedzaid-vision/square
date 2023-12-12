import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Slider({ projects }: any) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projects.map((project: any) => (
          <>
            <SwiperSlide className="">
              <img
                src={project.src}
                alt="Square Contracting Logo"
                className={`w-[100%]  object-cover transition-transform duration-150  `}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
}
