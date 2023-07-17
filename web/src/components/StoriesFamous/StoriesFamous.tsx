import CardPersons from "./CardPersons";

import spiderMan from "../../assets/hq/spiderman.png";
import coringa from "../../assets/hq/coringa.png";
import stark from "../../assets/hq/stark.png";
import batman from "../../assets/hq/batman.png";
import arlequina from "../../assets/hq/arlequina.png";
import wanda from "../../assets/hq/wanda.png";
import thanos from "../../assets/hq/thanos.png";
import cap from "../../assets/hq/cap.png";
import arrow from "../../assets/hq/arrow.png";
import superman from "../../assets/hq/superman.png";
import loki from "../../assets/hq/loki.png";

import marvelLogo from "../../assets/marvel.png";
import { useTranslation } from "react-i18next";
import { Modal } from "./Modal";
import { useState } from "react";

import Chomiranha from "../../assets/iconHQ/miranha.png";
import Ccoringa from "../../assets/iconHQ/coringa.png";
import CironMan from "../../assets/iconHQ/ironMan.png";
import Carlequina from "../../assets/iconHQ/arlequina.png";
import Cbatman from "../../assets/iconHQ/batman.png";
import Cwanda from "../../assets/iconHQ/wanda.png";
import Ccap from "../../assets/iconHQ/cap.png";
import Cthanos from "../../assets/iconHQ/thanos.png";
import Carrow from "../../assets/iconHQ/arrow.png";
import Csuperman from "../../assets/iconHQ/superman.png";
import Cloki from "../../assets/iconHQ/loki.png";

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
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 2,
    image: Ccoringa,
    name: "Coringa",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 3,
    image: CironMan,
    name: "Homem de Ferro",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 4,
    image: Carlequina,
    name: "Arlequina",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 5,
    image: Cbatman,
    name: "Batman",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 6,
    image: Cwanda,
    name: "Wanda",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 7,
    image: Ccap,
    name: "Capitão América",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 8,
    image: Cthanos,
    name: "Thanos",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 9,
    image: Carrow,
    name: "Arqueira Verdo",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 10,
    image: Csuperman,
    name: "Superman",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 11,
    image: Cloki,
    name: "Loki",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
];

export function StoriesFamous() {
  const { t } = useTranslation();

  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
      {selectedHero && (
        <Modal
          hero={selectedHero}
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        />
      )}

      <div className="">
        <div className="max-w-5xl mx-auto pt-10 px-6">
          <div className="text-6xl md:text-7xl text-center mb-12 font-badaboom text-secondary-title drop-shadow-title2 tracking-wider dark:text-primary-title dark:drop-shadow-title1">
            {t("mostFamous")}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <CardPersons
              urlCard={spiderMan}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Queens"
              categoria3={t("avenger")}
              title={t("spiderMan")}
              subtitle={t("textSpiderMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[0])}
            />
            <CardPersons
              urlCard={coringa}
              urlLogo={marvelLogo}
              categoria1={t("villain")}
              categoria2="Gotham"
              categoria3={t("psi")}
              title={t("joker")}
              subtitle={t("textJoker")}
              villain={true}
              onClick={() => handleHeroClick(heroes[1])}
            />
            <CardPersons
              urlCard={stark}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[2])}
            />

            <CardPersons
              urlCard={arlequina}
              urlLogo={marvelLogo}
              categoria1={t("villain")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={true}
              onClick={() => handleHeroClick(heroes[3])}
            />

            <CardPersons
              urlCard={batman}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[4])}
            />

            <CardPersons
              urlCard={wanda}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[5])}
            />

            <CardPersons
              urlCard={cap}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[6])}
            />

            <CardPersons
              urlCard={thanos}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={true}
              onClick={() => handleHeroClick(heroes[7])}
            />

            <CardPersons
              urlCard={arrow}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[8])}
            />

            <CardPersons
              urlCard={superman}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[9])}
            />

            <CardPersons
              urlCard={loki}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={true}
              onClick={() => handleHeroClick(heroes[10])}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
