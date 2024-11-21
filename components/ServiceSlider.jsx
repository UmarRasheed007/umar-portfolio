import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Full-Stack Development",
    description:
      "Expert in building end-to-end web applications using the latest technologies",
  },
  {
    Icon: RxCrop,
    title: "Data Science Solutions",
    description:
      "Machine learning and data analysis to drive insights and create predictive models",
  },
  {
    Icon: RxPencil2,
    title: "Machine Learning",
    description:
      "Machine learning models to automate decision-making, and uncover hidden patterns from data",
  },
  {
    Icon: RxRocket,
    title: "Cloud Engineering",
    description:
      "Cloud-based architectures and optimizing data pipelines for efficient real-time processing",
  },
  {
    Icon: RxReader,
    title: "Data Visualization",
    description:
      "Transforming complex data into interactive visualizations to support decision-making",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[340px] overflow-hidden"
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      allowTouchMove={true}
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
