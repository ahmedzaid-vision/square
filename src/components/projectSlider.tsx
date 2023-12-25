import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

export default function Slider({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
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
        className="mySwiper max-w-full "
      >
        {images.map((image: any) => (
          <div className="">
            <SwiperSlide className="w-full">
              <img
                src={image}
                alt="Square Contracting Logo"
                className={`w-[400px] h-[400px] rounded-md object-cover transition-transform duration-150  `}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
