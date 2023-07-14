import superman from "../assets/iconHeroes/superman.png";
import batman from "../assets/iconHeroes/batman.png";
import coringa from "../assets/iconHeroes/coringa.png";
import cap from "../assets/iconHeroes/cap.png";
import flash from "../assets/iconHeroes/flash.png";

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
      </div>
    </div>
  );
}