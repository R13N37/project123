import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import {
  RiFileList3Fill,
  RiTwitterFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { TiSocialPinterest } from "react-icons/ti";
import { useTranslation } from "react-i18next";

import Navbar from "../../components/Navbar/Navbar";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Slider from "../../components/Slider/Slider";
import VAcordion from "../../components/VAcordion/VAcordion";

import img1 from "../../assets/images/Termostati.png";
import img2 from "../../assets/images/Supervisione.png";
import img3 from "../../assets/images/Superbonus.png";
import img4 from "../../assets/images/vimar.png";
import img5 from "../../assets/images/Superbonus110.png";
import classes from "./SuperBonus.module.css";
import SuperBonusImg from "../../assets/images/Superbonus110.png";
import acordions from "../../components/VAcordion/VAcordionMap";
import { IFilterAcordion } from "../../components/VAcordion/VAcordion.model";

const SuperBonusView = () => {
  const { t } = useTranslation();

  return (
    <div className={classes["container"]}>
      <Navbar></Navbar>
      <HeaderTitle
        title="Superbonus 110%"
        link1="HOME"
        link2="SUPERBONUS 110%"
      ></HeaderTitle>
      <div className={classes["contentContainer"]}>
        <div className={classes["leftContainer"]}>
          <div className={classes["imgSuperbonusContainer"]}>
            <img className={classes["imgSuperbonus"]} src={SuperBonusImg} />
          </div>
          <div className={classes["contentContainerAbout"]}>
            <div className={classes["titleSuperBonusAbout"]}>
              {t("components.history.table.superbonus.title1")}
            </div>
            <div className={classes["descriptionSuperBonusAbout"]}>
              {t("components.history.table.superbonus.title1_desc1")}
            </div>
            <div className={classes["descriptionSuperBonusAbout"]}>
              {t("components.history.table.superbonus.title1_desc2")}{" "}
            </div>
          </div>
          <Slider></Slider>
          <div className={classes["contactFormContainer"]}>
            <div className={classes["titleContactForm"]}>
              {t("components.history.table.superbonus.title2")}
            </div>
            <div className={classes["titleContactForm"]}>
              {t("components.history.table.superbonus.sub_title2")}
            </div>
          </div>
          <div className={classes["containerContactForm"]}>
            <div className={classes["leftContentContactForm"]}>
              <div className={classes["contactInfoContainer"]}>
                <div className={classes["contactInfo"]}>
                  <div className={classes["contactTitle"]}>
                    {t("components.history.table.superbonus.contact_title1")}
                  </div>
                  <div className={classes["contactText"]}>
                    {t("components.history.table.superbonus.contact_desc1")}
                  </div>
                  <div className={classes["contactImg"]}>
                    <BsTelephoneFill className={classes["img"]} />
                  </div>
                </div>
                <div className={classes["contactInfo"]}>
                  <div className={classes["contactTitle"]}>
                    {t("components.history.table.superbonus.contact_title2")}
                  </div>
                  <div className={classes["contactText"]}>
                    {t("components.history.table.superbonus.contact_desc2")}
                  </div>
                  <div className={classes["contactImg"]}>
                    <RiFileList3Fill className={classes["img"]} />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className={classes["rightContentContactForm"]}>
              <div className={classes["rightcontactInput"]}>
                <div className={classes["titleContactFormInput"]}>
                  {t("components.history.table.superbonus.form_title")}
                </div>
                <div className={classes["subTitleContactFormInput"]}>
                  {t("components.history.table.superbonus.form_desc")}
                </div>
              </div>
              <div className={classes["inputContent"]}>
                <input
                  className={classes["inputArea"]}
                  placeholder={t(
                    "components.history.table.superbonus.form_name"
                  )}
                />
                <input
                  className={classes["inputArea"]}
                  placeholder={t(
                    "components.history.table.superbonus.form_mail"
                  )}
                />
                <input
                  className={classes["inputArea"]}
                  placeholder={t(
                    "components.history.table.superbonus.form_tel"
                  )}
                />
                <div className={classes["message"]}>
                  {t("components.history.table.superbonus.form_message")}
                </div>
                <textarea
                  className={classes["messa   geArea"]}
                  placeholder=""
                />
                <label className={classes["inputTextArea"]}>
                  <input type="checkbox" />
                  <div className={classes["textCheckBox"]}>
                    {t("components.history.table.superbonus.check_form")}
                  </div>
                </label>
                <a className={classes["button"]} href="#">
                  {t("components.history.table.superbonus.check_button")}
                </a>
              </div>
            </div>
          </div>
          <div className={classes["secondTitleContent"]}>
            <div className={classes["secondTitle"]}>
              {t("components.history.table.superbonus.title3")}
            </div>
            <div className={classes["secondTitleDescription"]}>
              {t("components.history.table.superbonus.title3_desc1")}
            </div>
            <div className={classes["secondTitleDescription"]}>
              {t("components.history.table.superbonus.title3_desc2")}
            </div>
            <div className={classes["secondTitle"]}>
              {t("components.history.table.superbonus.title4")}
            </div>
            <div className={classes["secondTitleDescription"]}>
              {t("components.history.table.superbonus.title4_desc1")}
            </div>
            <div className={classes["secondTitleDescription"]}>
              {t("components.history.table.superbonus.title4_desc2")}
            </div>
          </div>
          <div className={classes["containerAcordion"]}>
            {acordions.map((acordion: IFilterAcordion) => {
              return (
                <VAcordion header={acordion.header}>
                  {acordion.content}
                </VAcordion>
              );
            })}
          </div>
          <div className={classes["containerLink"]}>
            <div className={classes["containerLinkLeft"]}>
              <div className={classes["containerLinkTitle"]}>
                {t("components.history.table.superbonus.link")}
              </div>
            </div>
            <div className={classes["containerLinkRight"]}>
              <div className={classes["containerLinkTitleRight"]}>
                {t("components.history.table.superbonus.title5")}
              </div>
              <div className={classes["contentLinkRight"]}>
                <ul>
                  <li>
                    {t("components.history.table.superbonus.title5_desc1")}
                  </li>
                  <li>
                    {t("components.history.table.superbonus.title5_desc2")}
                  </li>
                  <li>
                    {t("components.history.table.superbonus.title5_desc3")}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes["superBonusSocialContainer"]}>
            <div className={classes["superBonusSocialButton"]}>
              <a className={classes["superBonusSocialButtonText"]}>
                {t("components.history.table.superbonus.button")}
              </a>
            </div>
            <div className={classes["superBonusSocialLinkscContainer"]}>
              <div className={classes["superBonusSocialTwitter"]}>
                <a>
                  <RiTwitterFill className={classes["imageSocial"]} />
                </a>
              </div>
              <div className={classes["superBonusSocialFacebook"]}>
                <a>
                  <RiFacebookFill className={classes["imageSocial"]} />
                </a>
              </div>
              <div className={classes["superBonusSocialPinterest"]}>
                <a>
                  <TiSocialPinterest className={classes["imageSocial"]} />
                </a>
              </div>
              <div className={classes["superBonusSocialLinkedIn"]}>
                <a>
                  <RiLinkedinFill className={classes["imageSocial"]} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["pageRightContent"]}>
          <div className={classes["rightTitle"]}>ULTIMI ARTICOLI</div>
          <div>.................</div>
          <div className={classes["article"]}>
            <div className={classes["containerImgTextLeft"]}>
              <img src={img1} alt="" />
              <a className={classes["textAlign"]}>Blueface</a>
            </div>
            <div className={classes["containerImgTextLeft"]}>
              <img src={img2} alt="" />
              <a className={classes["textAlign"]}>ThinKnx – Supervisione</a>
            </div>
            <div className={classes["containerImgTextLeft"]}>
              <img src={img3} alt="" />
              <a className={classes["textAlign"]}>Superbonus 110% – Novità</a>
            </div>
            <div className={classes["containerImgTextLeft"]}>
              <img src={img4} alt="" />
              <a className={classes["textAlign"]}>Vimar Smart Clima</a>
            </div>
            <div className={classes["containerImgTextLeft"]}>
              <img src={img5} alt="" />
              <a className={classes["textAlign"]}>Superbonus 110%</a>
            </div>
          </div>

          <div className={classes["tagContainer"]}>
            <div className={classes["tagText"]}>TAG</div>
            <div>.................</div>

            <div className={classes["tags"]}>
              <div className={classes["tagsGroup"]}>
                <a href="#">basalte</a>
                <a href="#">bticino</a>
                <a href="#">design</a>
              </div>
              <div className={classes["tagsGroup"]}>
                <a href="#">ekinex</a>
                <a href="#">superbonus</a>
                <a href="#">thinknx</a>
              </div>
              <div className={classes["tagsGroup"]}>
                <a href="#">vimar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperBonusView;
