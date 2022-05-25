import React from "react";
import { useTranslation } from "react-i18next";

import Card from "../../components/Card/Card.tsx";
import ExtendedCard from "../../components/ExtendedCard/ExtendedCard.tsx";

import camera from "../../assets/images/camera.png";
import intercom from "../../assets/images/intercom.png";
import smartphone from "../../assets/images/smartphone.png";
import sun from "../../assets/images/sun.png";
import light from "../../assets/images/light.png";
import multimedia from "../../assets/images/multimedia.png";
import voice from "../../assets/images/voice.png";
import elan from "../../assets/images/elan.png";
import thinknx from "../../assets/images/thinknx.png";
import classes from "./Domotica.module.css";

const DomoticaView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["container"]}>
      <div class="align-items-center">
        <div class="col-lg-8">
          <div class="inner-heading text-center">
            <div className={classes["header"]}>
              <h1 className={classes["text"]}>Domotica</h1>
              <p className={classes["paragraph"]}>HOME..DOMOTICA</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["offer"]}>
        <p>{t("components.history.table.domotica.offer")}</p>
        <h2>{t("components.history.table.domotica.title")}</h2>
        <p>...............</p>
        <p>
        {t("components.history.table.domotica.descript")}
        </p>
      </div>
      <div className={classes["contentImagesWrapper"]}>
        <div className={classes["contentImages"]}></div>
      </div>
      <div className={classes["containerDomWrapper"]}>
        <div className={classes["containerDom"]}>
          <div className={classes["leftInfoWrapper"]}>
            <div className={classes["leftInfoWrapper--tag"]}>
            {t("components.history.table.domotica.services")}
            </div>
            <div className={classes["leftInfoWrapper--title"]}>
            {t("components.history.table.domotica.title2")}
            </div>
          </div>

          <div className={classes["rightInfoWrapper"]}>
            <div className={classes["rightInfoWrapper--section"]}>
              <Card
                img={sun}
                title={t("components.history.table.domotica.title_des1")}
                content={t("components.history.table.domotica.des1")}
              ></Card>
              <Card
                img={light}
                title={t("components.history.table.domotica.title_des2")}
                content={t("components.history.table.domotica.des2")}
              ></Card>
            </div>
            <div className={classes["rightInfoWrapper--section"]}>
              <Card
                img={multimedia}
                title={t("components.history.table.domotica.title_des3")}
                content={t("components.history.table.domotica.des3")}
              ></Card>
              <Card
                img={voice}
                title={t("components.history.table.domotica.title_des4")}
                content={t("components.history.table.domotica.des4")}
              ></Card>
            </div>
          </div>
        </div>
      </div>
      <div className={classes['sicurrezzaContainer']}>
      <div className={classes["Sicurezza"]}>
        <h2>{t("components.history.table.domotica.title3")}</h2>
        <p>...............</p>
        <p>
        {t("components.history.table.domotica.title3_des")}
        </p>
      </div></div>
      <div className={classes["containerSicurezza"]}>
        <div>
          <img src={camera} />
          <h6>{t("components.history.table.domotica.title3_sub1")}</h6>
          <p>
          {t("components.history.table.domotica.title3_des1")}
          </p>
        </div>
        <div>
          <img src={intercom} />
          <h6>{t("components.history.table.domotica.title3_sub2")}</h6>
          <p>
          {t("components.history.table.domotica.title3_des2")}
          </p>
        </div>
        <div>
          <img src={smartphone} />
          <h6>{t("components.history.table.domotica.title3_sub3")}</h6>
          <p>
          {t("components.history.table.domotica.title3_des3")}
          </p>
        </div>
      </div>
      <div className={classes["sicurezzaWrapper"]}>
        <div className={classes["sicurezzaCard"]}>
          <div className={classes["productsTag"]}>{t("components.history.table.domotica.our_products")}</div>
          <div className={classes["titleExtendedCard"]}>
          {t("components.history.table.domotica.title4")}
          </div>
          <div className={classes["infoExtendedCardContent"]}>
          {t("components.history.table.domotica.title4_des")}
          </div>
          <div className={classes["buttonText"]}>{t("components.history.table.domotica.button")}</div>
        </div>
        <ExtendedCard
          img={elan}
          title={t("components.history.table.domotica.title5_sub1")}
          content={t("components.history.table.domotica.title5_des1")}
        ></ExtendedCard>
        <ExtendedCard
          img={thinknx}
          title={t("components.history.table.domotica.title5_sub2")}
          content={t("components.history.table.domotica.title5_des2")}
        ></ExtendedCard>
      </div>
      <div className={classes["carousel"]}>
        <div className={classes["carouselContent"]}></div>
        <div className={classes["carouselContent"]}></div>
        <div className={classes["carouselContent"]}></div>
      </div>
    </div>
  );
};

export default DomoticaView;
