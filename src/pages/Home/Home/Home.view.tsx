import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Home.module.css";

const HomeView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["container"]}>
      <div className={classes["upperContent"]}>
        <div className={classes["contentTitle"]}>
          {t("components.history.table.homeHeader.home_title")}
        </div>
        <div className={classes["contentInfo"]}>
          {t("components.history.table.homeHeader.home_descript")}
        </div>
        <div className={classes["btnPortfolio"]}>
          <a className={classes["btnText"]} href="#">
            {t("components.history.table.homeHeader.home_btn")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
