import homiranha from "../../assets/homiranha.png";
import batman from "../../assets/batman.png";
import black_panter from "../../assets/black-panter.png";
import cap_ame from "../../assets/cap-ame.png";
import deadpool from "../../assets/deadpool.png";
import flash from "../../assets/flash.png";
import green_arrow from "../../assets/green-arrow.png";
import green_lantern from "../../assets/green-lantern.png";
import iron_man from "../../assets/iron-man.png";
import thor from "../../assets/Thor.png";
import wonder_woman from "../../assets/wonder-woman.png";

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

import { Link } from "react-router-dom";

export function Main() {
  const { t } = useTranslation();
  return (
    <div className="bg-header dark:bg-zinc-800 relative">
      <div className="container py-6 px-6 max-w-7xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
        <h1 className="text-6xl md:text-7xl text-center font-badaboom text-primary-title drop-shadow-title1">
          {t("tituloPrincipal")}
        </h1>

        <div className="relative max-w-7xl px-16">
          <Swiper
            initialSlide={5}
            // loop={true}
            centeredSlides={true}
            centeredSlidesBounds={false}
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 2,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              enabled: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container mySwiper relative"
          >
            <div className="h-full w-20 absolute left-0 top-0 z-30 bg-gradient-to-r from-color1 to-color4 dark:from-zinc-800"></div>
            <div className="h-full w-20 absolute right-0 top-0 z-30 bg-gradient-to-l from-color1 to-color4 dark:from-zinc-800"></div>

            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={homiranha}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={batman}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={black_panter}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={cap_ame}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={deadpool}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={flash}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={green_arrow}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={green_lantern}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={iron_man}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={thor}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <Link to="/stories">
                <img
                  src={wonder_woman}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </Link>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-pagination static"></div>
            </div>
          </Swiper>

          <div className="swiper-button-prev slider-arrow absolute left-0">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-4xl text-white"
            />
          </div>
          <div className="swiper-button-next slider-arrow absolute right-0">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-4xl text-white"
            />
          </div>
        </div>

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
