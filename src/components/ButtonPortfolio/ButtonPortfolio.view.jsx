import React from 'react'
import { useTranslation } from "react-i18next";

import classes from './ButtonPortfolio.module.css'

const ButtonPortfolioView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes['container']}>
        <a className={classes['buttonText']}href="">{t("components.history.table.ourWorks.works_btn")}</a>
    </div>
  )
}

export default ButtonPortfolioView