import React from "react";
import { useTranslation } from "react-i18next";

import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import classes from "./AboutUs.module.css";

const AboutUsView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["container"]}>
      <Navbar></Navbar>
      <HeaderTitle title="Chi Samo" link1="HOME" link2="CHI SAMO"></HeaderTitle>
      <div className={classes["tagsInfo"]}>
        <div className={classes["offerInfo"]}>
          {t("components.history.table.aboutUs.our_offer")}
        </div>
        <div className={classes["titleInfo"]}>
          {t("components.history.table.aboutUs.about_us")}
        </div>
        {t("components.history.table.aboutUs.about_us_descript")}
      </div>
      <div className={classes["infoContentTitleWrapper"]}>
        <div className={classes["infoContentTitle"]}></div>
      </div>
      <div className={classes["imagesContainer"]}>
        <div className={classes["imagesAboutUsContent"]}>
          <img className={classes["imagesAboutUs"]} src="" />
        </div>
        <div className={classes["imagesAboutUsContent"]}>
          <img className={classes["imagesAboutUs"]} src="" />
        </div>
        <div className={classes["imagesAboutUsContent"]}>
          <img className={classes["imagesAboutUs"]} src="" />
        </div>
      </div>
      <div className={classes["carousel"]}>
        <div className={classes["carouselContent"]}></div>
      </div>
      <div className={classes["informationContainer"]}>
        <div className={classes["information"]}></div>
        <div className={classes["information"]}></div>
        <div className={classes["information"]}></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUsView;
