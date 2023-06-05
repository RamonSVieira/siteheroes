import React from "react";
import { Button } from "../utils/Button";

import homiranha from "../../assets/homiranha.png";
import { useTranslation } from "react-i18next";

import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export function Main() {
  const { t } = useTranslation();
  return (
    <div className="bg-header dark:bg-zinc-800 relative">
      <div className="container py-6 px-6 max-w-5xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
        <h1 className="font-black text-4xl md:text-5xl text-center">
          {t("tituloPrincipal")}
        </h1>

        <Swiper
          observeParents={true}
          observer={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            enabled: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src={homiranha} alt="slide_image" className="cursor-pointer" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow absolute left-0">
              <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
            </div>
            <div className="swiper-button-next slider-arrow absolute right-0">
              <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        <div className="absolute w-full h-52 bottom-[-200px] -z-10">
          <svg
            className="object-cover w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              className=" fill-primary dark:fill-secondary"
              fill=""
              fill-opacity="1"
              d="M0,256L34.3,224C68.6,192,137,128,206,117.3C274.3,107,343,149,411,149.3C480,149,549,107,617,96C685.7,85,754,107,823,128C891.4,149,960,171,1029,165.3C1097.1,160,1166,128,1234,117.3C1302.9,107,1371,117,1406,122.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
