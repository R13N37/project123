import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./OurService.module.css";

const OurServiceView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["containerWrapper"]}>
      <div className={classes["container"]}>
        <div className={classes["containerTag"]}>
          {t("components.history.table.aboutServices.services_about")}
        </div>
        <div className={classes["containerTitle"]}>{t("components.history.table.aboutServices.services_title")}</div>
      </div>
    </div>
  );
};

export default OurServiceView;
