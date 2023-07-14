import CardPersons from "./CardPersons";

import spiderMan from "../../assets/spiderman.png";
import coringa from "../../assets/coringa.png";
import stark from "../../assets/stark.png";
import marvelLogo from "../../assets/marvel.png";
import { useTranslation } from "react-i18next";

export function StoriesFamous() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="my-24 rounded-3xl text-6xl font-badaboom text-theader2 drop-shadow-title1 dark:bg-zinc-800 py-6 px-6 max-w-5xl mx-auto flex items-center flex-col gap-10 dark:text-white">
        <h2 className="text-6xl">{t("historias")}</h2>

        <div className="w-full flex gap-6">
          <div className="min-w-[72px] w-full h-[600px] bg-black rounded-[37px] bg-stark bg-cover bg-center"></div>
          <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-cap bg-cover bg-bottom"></div>
          <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-stark bg-cover bg-center"></div>
          <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-cap bg-cover bg-bottom"></div>
        </div>
      </div>

      <div className="bg-theader2 dark:bg-zinc-700">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <div className="text-center drop-shadow-title2 font-badaboom text-6xl text-purple mb-12">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}
