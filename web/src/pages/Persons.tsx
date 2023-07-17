import superman from "../assets/iconHeroes/superman.png";
import batman from "../assets/iconHeroes/batman.png";
import coringa from "../assets/iconHeroes/coringa.png";
import cap from "../assets/iconHeroes/cap.png";
import flash from "../assets/iconHeroes/flash.png";
import panter from "../assets/iconHeroes/panter.png";
import wonder from "../assets/iconHeroes/wonder.png";
import ironman from "../assets/iconHeroes/ironman.png";
import wanda from "../assets/iconHeroes/wanda.png";
import arrow from "../assets/iconHeroes/arrow.png";
import spider from "../assets/iconHeroes/spider.png";

import Csuperman from "../assets/iconHQ/superman.png";
import Cbatman from "../assets/iconHQ/batman.png";
import Ccoringa from "../assets/iconHQ/coringa.png";
import Ccap from "../assets/iconHQ/cap.png";
import Cflash from "../assets/iconHQ/flash.png";
import Cpantera from "../assets/iconHQ/pantera.png";
import Cwonder from "../assets/iconHQ/wonder.png";
import CironMan from "../assets/iconHQ/ironMan.png";
import Cwanda from "../assets/iconHQ/wanda.png";
import Carrow from "../assets/iconHQ/arrow.png";
import Cmiranha from "../assets/iconHQ/arrow.png";

import { useTranslation } from "react-i18next";

import { IconHeroe } from "../components/utils/IconHeroe";
import { useState } from "react";
import { Modal } from "../components/StoriesFamous/Modal";

const heroes: Hero[] = [
  {
    id: 1,
    image: Csuperman,
    name: "Superman",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 2,
    image: Cbatman,
    name: "Batman",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 3,
    image: Ccoringa,
    name: "Coringa",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 4,
    image: Ccap,
    name: "Capitão América",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 5,
    image: Cflash,
    name: "Flash",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 6,
    image: Cpantera,
    name: "Pantera",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 7,
    image: Cwonder,
    name: "Mulher Maravilha",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 8,
    image: CironMan,
    name: "Homem de Ferro",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 9,
    image: Cwanda,
    name: "Feiticeira Escarlate",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 10,
    image: Carrow,
    name: "Arqueiro Verde",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 11,
    image: Cmiranha,
    name: "Homem Aranha",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
];

interface Hero {
  id: number;
  image: string;
  name: string;
  title: string;
  story: string;
}

export function Persons() {
  const { t } = useTranslation();

  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container py-6 px-6 max-w-5xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
      <h1 className="text-6xl md:text-7xl text-center font-badaboom text-secondary-title drop-shadow-title2 dark:text-primary-title dark:drop-shadow-title1">
        {t("tituloPersonagens")}
      </h1>

      {selectedHero && (
        <Modal
          hero={selectedHero}
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        />
      )}

      <div className="flex gap-10 flex-wrap">
        <IconHeroe
          urlImage={superman}
          name=""
          className="bg-[#51AAFF] w-[200px] h-[200px] rounded-full relative hover:border-4 border-red-800 dark:border-white"
          onClick={() => handleHeroClick(heroes[0])}
        />

        <IconHeroe
          urlImage={batman}
          name=""
          className="bg-[#32322E] w-[200px] h-[200px] rounded-full relative hover:border-4 border-black dark:border-white"
          onClick={() => handleHeroClick(heroes[1])}
        />

        <IconHeroe
          urlImage={coringa}
          name=""
          className="bg-[#9C76F0] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#0C380B] dark:border-white"
          onClick={() => handleHeroClick(heroes[2])}
        />

        <IconHeroe
          urlImage={cap}
          name=""
          className="bg-[#7B9FCA] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#6A1A18] dark:border-white"
          onClick={() => handleHeroClick(heroes[3])}
        />

        <IconHeroe
          urlImage={flash}
          name=""
          className="bg-[#EBAF50] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#E12C28] dark:border-white"
          onClick={() => handleHeroClick(heroes[4])}
        />

        <IconHeroe
          urlImage={panter}
          name=""
          className="bg-[#6777A9] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#09090B] dark:border-white"
          onClick={() => handleHeroClick(heroes[5])}
        />

        <IconHeroe
          urlImage={wonder}
          name=""
          className="bg-[#851824] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#013D6C] dark:border-white"
          onClick={() => handleHeroClick(heroes[6])}
        />

        <IconHeroe
          urlImage={ironman}
          name=""
          className="bg-[#FFE98D] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#762220] dark:border-white"
          onClick={() => handleHeroClick(heroes[7])}
        />

        <IconHeroe
          urlImage={wanda}
          name=""
          className="bg-[#D98D9C] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#E43325] dark:border-white"
          onClick={() => handleHeroClick(heroes[8])}
        />

        <IconHeroe
          urlImage={arrow}
          name=""
          className="bg-[#ECEFC8] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#5C8C54] dark:border-white"
          onClick={() => handleHeroClick(heroes[9])}
        />

        <IconHeroe
          urlImage={spider}
          name=""
          className="bg-[#416984] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#B5000F] dark:border-white"
          onClick={() => handleHeroClick(heroes[10])}
        />
      </div>
    </div>
  );
}
