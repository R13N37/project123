import { useTranslation } from "react-i18next";
import React, { PropsWithChildren } from "react";

import logo from "../../assets/images/logo.png";
import classes from "./Navbar.module.css";

type Props = {
  handleHomeAutomatizationClick: () => void;
  handleHotelClick: () => void;
  handleHomeClick: () => void;
  handleContactClick: () => void;
  handleAboutUsClick: () => void;
  handleSuperbonusClick: () => void;
  handleFaqClick: () => void;
  handleNewsClick: () => void;
};

const NavbarView: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const { t } = useTranslation();
  return (
    <nav
      className="container navbar navbar-expand-lg fixed-top sticky"
      id="navbar"
    >
      <div className="container-fluid custom-container">
        <a className=" text-dark " onClick={props.handleHomeClick}>
          <img className={classes["logo"]} src={logo} alt="" height="50px" />
        </a>
        <div>
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto navbar-center">
            <li className="nav-item ">
              <a className="nav-link " onClick={props.handleHomeClick}>
                {t("components.history.table.headers.home")}
              </a>
            </li>

            <li className="nav-item dropdown dropdown-hover">
              <a
                href="#"
                className="nav-link"
                id="homedrop"
                role="button"
                data-bs-toggle="dropdown"
              >
                {t("components.history.table.headers.services")}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-center"
                aria-labelledby="homedrop"
              >
                <li>
                  <a
                    className="dropdown-item"
                    onClick={props.handleHomeAutomatizationClick}
                  >
                    <i className="align-middle"></i>
                    {t("components.history.table.headers.domotica")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={props.handleHotelClick}>
                    <i className="align-middle"></i>
                    {t("components.history.table.headers.hotel")}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown dropdown-hover">
              <a className="nav-link " onClick={props.handleNewsClick}>
                {t("components.history.table.headers.news")}
              </a>
            </li>
            <li className="nav-item dropdown dropdown-hover">
              <a className="nav-link " onClick={props.handleContactClick}>
                {t("components.history.table.headers.contacts")}
              </a>
            </li>
            <li className="nav-item dropdown dropdown-hover">
              <a className="nav-link " onClick={props.handleAboutUsClick}>
                {t("components.history.table.headers.about_us")}
              </a>
            </li>
            <li className="nav-item dropdown dropdown-hover">
              <a className="nav-link " onClick={props.handleSuperbonusClick}>
                {t("components.history.table.headers.superbonus")}
              </a>
            </li>
            <li className="nav-item dropdown dropdown-hover">
              <a className="nav-link " onClick={props.handleFaqClick}>
                {t("components.history.table.headers.faq")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
