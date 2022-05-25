import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Contact.module.css";
import img1 from "../../assets/images/maps.png";
import img2 from "../../assets/images/email.png";
import img3 from "../../assets/images/phone.png";

const ContactView = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <h1 className={classes["text"]}>
          {t("components.history.table.contacts.contacts")}
        </h1>
        <p className={classes["paragraph"]}>
          {t("components.history.table.headers.HOME")}..{" "}
          {t("components.history.table.contacts.contactsUP")}
        </p>
      </div>
      <div className={classes["contentContainer"]}>
        <div className={classes["content1"]}>
          <h3>{t("components.history.table.contacts.left_title")}</h3>
          <p>{t("components.history.table.contacts.left_descript")} </p>
          <input placeholder="NOME"></input>
          <hr />
          <input placeholder="EMAIL"></input>
          <hr />
          <input placeholder="MESSAGIO..."></input>
          <hr />
          <p>{t("components.history.table.contacts.left_text1")}</p>
          <p>{t("components.history.table.contacts.left_text2")}</p>
          <button>{t("components.history.table.contacts.left_btn")}</button>
        </div>
        <div className={classes["content2"]}>
          <p>{t("components.history.table.contacts.right_pretitle")}</p>
          <h3>{t("components.history.table.contacts.contacts")}</h3>
          <p>{t("components.history.table.contacts.right_descripiton")}</p>

          <div className={classes["contentContact"]}>
            <div className={classes["imageContainer"]}>
              <img className={classes["imageContact"]} src={img1} />
            </div>

            <div className={classes["infoContainer"]}>
              <h6>{t("components.history.table.contacts.right_address")}:</h6>
              <p>Terni - Italia</p>
            </div>
          </div>
          <div className={classes["contentContact"]}>
            <div lassName={classes["imageContainer"]}>
              <img className={classes["imageContact"]} src={img2} />
            </div>
            <div className={classes["infoContainer"]}>
              <h6>EMAIL:</h6>
              <p>commerciale@habitatsolutions.it</p>
            </div>
          </div>
          <div className={classes["contentContact"]}>
            <div lassName={classes["imageContainer"]}>
              <img className={classes["imageContact"]} src={img3} />
            </div>
            <div className={classes["infoContainer"]}>
              <h6>{t("components.history.table.contacts.right_call")}</h6>
              <p>+39 342 8029448</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
