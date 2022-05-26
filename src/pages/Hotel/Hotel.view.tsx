import React from "react";
import { useTranslation } from "react-i18next";

import Card from "../../components/Card/Card";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import review from "../../assets/images/review.png";
import smarthome from "../../assets/images/smarthome.png";
import thermostat from "../../assets/images/thermostat.png";
import classes from "./Hotel.module.css";

const HotelView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["container"]}>
      <Navbar></Navbar>
      <HeaderTitle title="HOTEL" link1="HOME" link2="HOTEL"></HeaderTitle>
      <div className={classes["tagsInfo"]}>
        <div className={classes["offerInfo"]}>
          {t("components.history.table.hotel.hotel_offer")}
        </div>
        <div className={classes["titleInfo"]}>
          {t("components.history.table.hotel.hotel_title")}
        </div>
      </div>
      <div className={classes["infoContentTitleWrapper"]}>
        <div className={classes["infoContentTitle"]}>
          {t("components.history.table.hotel.hotel_descript")}
        </div>
      </div>
      <div className={classes["slider"]}>
        <div className={classes["sliderContent"]}></div>
      </div>
      <div className={classes["innerContainer"]}>
        <div className={classes["innerTitle"]}>
          {t("components.history.table.hotel.hotel_title2")}
        </div>
        <div className={classes["innerInfo"]}>
          {t("components.history.table.hotel.hotel_offer")}
        </div>
      </div>
      <div className={classes["containerCard"]}>
        <Card
          img={smarthome}
          title={t("components.history.table.hotel.hotel_offer1")}
          content={t("components.history.table.hotel.hotel_des1")}
        ></Card>
        <Card
          img={thermostat}
          title={t("components.history.table.hotel.hotel_offer2")}
          content={t("components.history.table.hotel.hotel_des2")}
        ></Card>
        <Card
          img={review}
          title={t("components.history.table.hotel.hotel_offer3")}
          content={t("components.history.table.hotel.hotel_des3")}
        ></Card>
      </div>
      <div className={classes["space"]}></div>
      <Footer></Footer>
    </div>
  );
};

export default HotelView;
