import CardPersons from "./CardPersons";

import spiderMan from "../../assets/spiderman.png";
import coringa from "../../assets/coringa.png";
import stark from "../../assets/stark.png";
import batman from "../../assets/hq/batman.png";
import arlequina from "../../assets/hq/arlequina.png";
import wanda from "../../assets/hq/wanda.png";
import thanos from "../../assets/hq/thanos.png";
import cap from "../../assets/hq/cap.png";
import arrow from "../../assets/hq/arrow.png";
import lex from "../../assets/hq/lex.png";
import superman from "../../assets/hq/superman.png";
import loki from "../../assets/hq/loki.png";

import marvelLogo from "../../assets/marvel.png";
import { useTranslation } from "react-i18next";
import { Modal } from "./Modal";
import { useState } from "react";

export function StoriesFamous() {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
      <div className="relative">
        <div className="bg-header dark:bg-zinc-800">
          <div className="py-6 rounded-3xl text-6xl font-badaboom text-theader2 max-w-5xl mx-auto flex items-center flex-col gap-10 dark:text-white">
            <h2 className="text-6xl md:text-7xl text-center font-badaboom text-primary-title drop-shadow-title1 tracking-wider">
              {t("historias")}
            </h2>

            <div className="w-full flex gap-6">
              <div className="min-w-[72px] w-full h-[600px] bg-black rounded-[37px] bg-stark bg-cover bg-center drop-shadow-title1"></div>
              <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-cap bg-cover bg-bottom drop-shadow-title1"></div>
              <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-stark bg-cover bg-center drop-shadow-title1"></div>
              <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-cap bg-cover bg-bottom drop-shadow-title1"></div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-52 bottom-[-200px] z-10">
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

      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />

      <div className="">
        <div className="max-w-5xl mx-auto pt-80 px-6">
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
            />

            <CardPersons
              urlCard={lex}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={true}
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
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
              onClick={() => console.log("Oi")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
