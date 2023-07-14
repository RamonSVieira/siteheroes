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

import { useTranslation } from "react-i18next";

import { IconHeroe } from "../components/utils/IconHeroe";

export function Persons() {
  const { t } = useTranslation();
  return (
    <div className="container py-6 px-6 max-w-5xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
      <h1 className="text-6xl md:text-7xl text-center font-badaboom text-secondary-title drop-shadow-title2 dark:text-primary-title dark:drop-shadow-title1">
        {t("tituloPersonagens")}
      </h1>

      <div className="flex gap-10 flex-wrap">
        <IconHeroe
          urlImage={superman}
          name=""
          className="bg-[#51AAFF] w-[200px] h-[200px] rounded-full relative hover:border-4 border-red-800"
        />

        <IconHeroe
          urlImage={batman}
          name=""
          className="bg-[#32322E] w-[200px] h-[200px] rounded-full relative hover:border-4 border-black"
        />

        <IconHeroe
          urlImage={coringa}
          name=""
          className="bg-[#9C76F0] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#0C380B]"
        />

        <IconHeroe
          urlImage={cap}
          name=""
          className="bg-[#7B9FCA] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#6A1A18]"
        />

        <IconHeroe
          urlImage={flash}
          name=""
          className="bg-[#EBAF50] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#E12C28]"
        />

        <IconHeroe
          urlImage={panter}
          name=""
          className="bg-[#6777A9] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#09090B]"
        />

        <IconHeroe
          urlImage={wonder}
          name=""
          className="bg-[#851824] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#013D6C]"
        />

        <IconHeroe
          urlImage={ironman}
          name=""
          className="bg-[#FFE98D] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#762220]"
        />

        <IconHeroe
          urlImage={wanda}
          name=""
          className="bg-[#D98D9C] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#E43325]"
        />

        <IconHeroe
          urlImage={arrow}
          name=""
          className="bg-[#ECEFC8] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#5C8C54]"
        />

        <IconHeroe
          urlImage={spider}
          name=""
          className="bg-[#416984] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#B5000F]"
        />
      </div>
    </div>
  );
}
