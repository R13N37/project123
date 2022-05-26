import React from "react";
import { useTranslation } from "react-i18next";

import img from "../../../assets/images/domotica.png";
import classes from "./About.module.css";

const AboutView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["container"]}>
      <div className={classes["imgAbout"]}>
        <img className={classes["imageAbout"]} src={img} />
      </div>

      <div className={classes["aboutInfoWrapper"]}>
        <div className={classes["aboutInfoContainer"]}>
          <div className={classes["aboutInfo"]}>
            {t("components.history.table.aboutContent.about_company")}
          </div>
          <div className={classes["aboutTitle"]}>
            {t("components.history.table.aboutContent.about_title")}
          </div>
          <div className={classes["aboutContent"]}>
            {t("components.history.table.aboutContent.about_descript1")}
          </div>
          <div className={classes["aboutContent"]}>
            {t("components.history.table.aboutContent.about_descript2")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
