import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const clients = [
  { id: 1, logo: "/clients/img1.png" },
  { id: 1, logo: "/clients/img2.png" },
  { id: 1, logo: "/clients/img3.png" },
  { id: 1, logo: "/clients/img4.png" },
  { id: 1, logo: "/clients/img5.png" },
  { id: 1, logo: "/clients/img6.png" },
];

export default function ClientSlider() {
  return (
    <div className="py-10 w-full ">
      <div className="text-xl text-center mb-10  text-[#005826] ">
        Our Clients
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwipernpy w-[60%]"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <img src={client.logo} alt={`Company ${client.id}`} className="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
