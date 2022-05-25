import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Portfolio.module.css"

const PortfolioView = () => {
    const { t } = useTranslation();
    return(
        <div className={classes['containerWrapper']}>
        <div className={classes['container']}>
            <div className={classes['containerTag']}> {t("components.history.table.ourWorks.works_about")} </div>
            <div className={classes['containerTitle']}>{t("components.history.table.ourWorks.works_title")}</div>
        </div></div>
    )
}

export default PortfolioView;