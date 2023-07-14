import { Card } from "../main/Card";
import meninaVoando from "../../assets/meninaVoando.png";
import meninaSurfando from "../../assets/meninaSurfando.png";
import garota2 from "../../assets/garota2.png";
import meninoLendo from "../../assets/meninoLendo.png";
import menino2 from "../../assets/menino2.png";
import menino3 from "../../assets/menino3.png";

import { useTranslation } from "react-i18next";

export function Positive() {
  const { t } = useTranslation();

  return (
    <div className="mt-32 bg-theader2 md:mt-36 lg:mt-52 2xl:mt-64 mb-20 py-6 px-6 max-w-5xl mx-auto ">
      <h3 className="text-6xl md:text-7xl text-center font-badaboom text-secondary-title drop-shadow-title2 tracking-wider dark:text-primary-title dark:drop-shadow-title1 select-none">
        {t("titlePositives")}
      </h3>

      <div className="flex bg-theader2 flex-col md:flex-row items-center md:items-stretch justify-around flex-wrap gap-6 m-auto">
        <Card
          className="absolute -top-36"
          urlImg={meninaVoando}
          title={t("headerCardPosit1")}
          paragraph={t("textCardPosit1")}
        />
        <Card
          className="absolute -top-36"
          urlImg={meninoLendo}
          title={t("headerCardPosit2")}
          paragraph={t("textCardPosit2")}
        />
        <Card
          className="absolute -top-52"
          urlImg={garota2}
          title={t("headerCardPosit3")}
          paragraph={t("textCardPosit3")}
        />
        <Card
          className="absolute -top-28"
          urlImg={menino2}
          title={t("headerCardPosit4")}
          paragraph={t("textCardPosit4")}
        />
        <Card
          className="absolute -top-28"
          urlImg={meninaSurfando}
          title={t("headerCardPosit5")}
          paragraph={t("textCardPosit5")}
        />
        <Card
          className="absolute -top-40"
          urlImg={menino3}
          title={t("headerCardPosit6")}
          paragraph={t("textCardPosit6")}
        />
      </div>
    </div>
  );
}