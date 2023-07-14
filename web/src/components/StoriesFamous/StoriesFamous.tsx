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

      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />

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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
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
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
