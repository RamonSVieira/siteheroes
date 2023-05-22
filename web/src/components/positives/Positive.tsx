import { Card } from "../main/Card";
import ilustration from "../../assets/ilustration.png";

import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../utils/ChangeLanguage";



export function Positive() {
  const {t}= useTranslation()

  return (
    <div className="mt-32 md:mt-36 lg:mt-52 2xl:mt-64 mb-20 py-6 px-6 max-w-5xl mx-auto ">
      <h3 className="text-center text-3xl font-semibold">
        {t("titlePositives")}
      </h3>

      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-around flex-wrap gap-6 m-auto">
        <Card
          urlImg={ilustration}
          title={t("headerCardPosit1")}
          paragraph={t("textCardPosit1")}
        />
        <Card
          urlImg={ilustration}
          title={t("headerCardPosit2")}
          paragraph={t("textCardPosit2")}
        />
        <Card
          urlImg={ilustration}
          title={t("headerCardPosit3")}
          paragraph={t("textCardPosit3")}
        />
        <Card
          urlImg={ilustration}
          title={t("headerCardPosit4")}
          paragraph={t("textCardPosit4")}
        />
        <Card
          urlImg={ilustration}
          title={t("headerCardPosit5")}
          paragraph={t("textCardPosit5")}
        />
        <Card
          urlImg={ilustration}
          title={t("headerCardPosit6")}
          paragraph={t("textCardPosit6")}
        />
      </div>
    </div>
  );
}
