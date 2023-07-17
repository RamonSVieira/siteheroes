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

import Chomiranha from "../../assets/iconHQ/miranha.png";
import Cbatman from "../../assets/iconHQ/batman.png";
import Cpantera from "../../assets/iconHQ/pantera.png";
import Ccap from "../../assets/iconHQ/cap.png";
import Cdead from "../../assets/iconHQ/deadpool.png";
import Cflash from "../../assets/iconHQ/flash.png";
import Csuperman from "../../assets/iconHQ/superman.png";
import Clanternaverde from "../../assets/iconHQ/lanternaverde.png";
import CironMan from "../../assets/iconHQ/ironMan.png";
import Cthor from "../../assets/iconHQ/thor.png";
import Cwonder from "../../assets/iconHQ/wonder.png";

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

import { useState } from "react";
import { Modal } from "../StoriesFamous/Modal";

interface Hero {
  id: number;
  image: string;
  name: string;
  title: string;
  story: string;
}

const heroes: Hero[] = [
  {
    id: 1,
    image: Chomiranha,
    name: "Homem Aranha",
    title: "The Amazing spider man",
    story:
      'A história começa em Nova York, onde conhecemos Peter Parker, um jovem estudante do ensino médio. Peter é um rapaz inteligente, porém um tanto desajeitado e socialmente deslocado. Sua vida muda completamente quando ele participa de uma excursão científica em uma exposição de aranhas. Durante essa excursão, Peter é picado por uma aranha geneticamente modificada. Ele logo descobre que a picada lhe concedeu poderes surpreendentes. Ele se torna mais forte, ágil e adquire a habilidade de escalar paredes. Assim, o Homem-Aranha nasce! No início, Peter vê seus poderes como uma oportunidade de obter dinheiro fácil e fama. Ele cria um traje vermelho e azul e se apresenta em uma luta livre, adotando o nome "Homem-Aranha". No entanto, ele acaba aprendendo uma dura lição quando permite que um ladrão fuja, acreditando que isso não era mais responsabilidade dele. Infelizmente, essa escolha tem consequências trágicas. O mesmo ladrão acaba assassinando seu tio Ben, uma pessoa querida e importante em sua vida. Consumido pela culpa, Peter percebe que tem a responsabilidade de usar seus poderes para proteger os inocentes. Ele aprende que "com grandes poderes vêm grandes responsabilidades". Assim, o Homem-Aranha emerge como um verdadeiro herói. Ele patrulha as ruas de Nova York, lutando contra o crime e enfrentando uma galeria de vilões perigosos. Entre seus adversários mais notórios estão o Duende Verde, o Doutor Octopus, o Venom e muitos outros. Esses vilões testam suas habilidades, inteligência e força de vontade em batalhas épicas. No entanto, a vida de Peter Parker também é explorada. Ele enfrenta desafios pessoais, como equilibrar sua vida como estudante, seu trabalho como fotógrafo freelancer no Clarim Diário e seus relacionamentos pessoais, especialmente com sua amada Mary Jane Watson. A vida de Peter é repleta de altos e baixos, e ele precisa encontrar um equilíbrio entre sua vida dupla como Homem-Aranha e suas responsabilidades como Peter Parker. Ao longo dos anos, o Homem-Aranha se tornou um símbolo de esperança e inspiração para as pessoas de Nova York e além. Sua coragem, resiliência e senso de justiça o tornaram um dos heróis mais amados e populares do universo dos quadrinhos. A narrativa do Homem-Aranha é repleta de aventuras emocionantes, momentos de humor e profundidade emocional. Seja enfrentando desafios pessoais ou lutando contra super vilões, o Homem-Aranha sempre se mantém fiel aos seus princípios e continua a proteger os inocentes.',
  },
  {
    id: 2,
    image: Cbatman,
    name: "Batman",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 3,
    image: Cpantera,
    name: "Pantera Negra",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 4,
    image: Ccap,
    name: "Capitão América",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 5,
    image: Cdead,
    name: "Deadpool",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 6,
    image: Cflash,
    name: "Flash",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 7,
    image: Csuperman,
    name: "Superman",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 8,
    image: Clanternaverde,
    name: "Lanterna Verde",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 9,
    image: CironMan,
    name: "Homem de ferro",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 10,
    image: Cthor,
    name: "Thor",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 11,
    image: Cwonder,
    name: "Mulher Maravilha",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
];

export function Main() {
  const { t } = useTranslation();
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-header dark:bg-zinc-800 relative">
      <div className="container py-6 px-6 max-w-7xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
        <h1 className="text-6xl md:text-7xl text-center font-badaboom text-primary-title drop-shadow-title1 tracking-wider">
          {t("tituloPrincipal")}
        </h1>

        {selectedHero && (
          <Modal
            hero={selectedHero}
            isOpen={openModal}
            setModalOpen={() => setOpenModal(!openModal)}
          />
        )}

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
              <div onClick={() => handleHeroClick(heroes[0])}>
                <img
                  src={homiranha}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[1])}>
                <img
                  src={batman}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[2])}>
                <img
                  src={black_panter}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[3])}>
                <img
                  src={cap_ame}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[4])}>
                <img
                  src={deadpool}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[5])}>
                <img
                  src={flash}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[6])}>
                <img
                  src={green_arrow}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[7])}>
                <img
                  src={green_lantern}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[8])}>
                <img
                  src={iron_man}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[9])}>
                <img
                  src={thor}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-sm select-none">
              <div onClick={() => handleHeroClick(heroes[10])}>
                <img
                  src={wonder_woman}
                  alt="slide_image"
                  className="cursor-pointer transition duration-300 hover:brightness-100"
                />
              </div>
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
