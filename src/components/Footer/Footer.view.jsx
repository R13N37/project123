import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BiMap } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const FooterView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["footer"]}>
      <div className={classes["container"]}>
        <div className={classes["contacts"]}>
          <div className={classes["contactTitle"]}>
            {t("components.history.table.headers.contacts")}
          </div>
          <div className={classes["contactInfo"]}>
            <BiMap className={classes["icons"]} />
            Terni - Italy
          </div>
          <div className={classes["contactInfo"]}>
            <HiOutlineMailOpen className={classes["icons"]} />
            info@habitatsolutions.it
          </div>
          <div className={classes["contactInfo"]}>
            <FiPhone className={classes["icons"]} />
            +39 342 8029448
          </div>
        </div>
        <div className={classes["infoCompany"]}>
          <div>
            <img className={classes["logoImg"]} src={logo} />
          </div>
          <div className={classes["aboutCompany"]}>
            {t("components.history.table.footer.footer_descript")}
          </div>
          <div className={classes["containerIconsSocial"]}>
            <a href="#">
              <FaFacebookF className={classes["iconsSocial"]} />
            </a>
            <a href="#">
              <FaLinkedinIn className={classes["iconsSocial"]} />
            </a>
            <a href="#">
              <GrInstagram className={classes["iconsSocial"]} />
            </a>
          </div>
        </div>
        <div className={classes["linksContainer"]}>
          <div className={classes["linksTitle"]}>
            {t("components.history.table.footer.latest_projects")}
          </div>
          <a className={classes["links"]} href="#">
            Borgobrufa Spa Resort
          </a>
          <a className={classes["links"]} href="#">
            Quasar Village
          </a>
          <a className={classes["links"]} href="#">
            Borgo dei Conti Resort
          </a>
        </div>
      </div>
      <div className={classes["privacyContainer"]}>
        <div className={classes["privacy"]}>
          Copyright © 2020 Habitat Solutions. All Rights Reserved. – P. Iva
          01495650556
        </div>
      </div>
    </div>
  );
};

export default FooterView;
