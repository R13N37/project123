import { useTranslation } from "react-i18next";
import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./Navbar.module.css";
import classes from "./Navbar.module.css";
import HomePage from "../pages/Home/HomePage";
import AboutUsPg from "../pages/About Us/AboutUs";
import ContactPg from "../pages/ContactPg/ContactPg";
import HotelPg from '../pages/HotelPg/HotelPg'
import Domotica from '../pages/DomoticaPg/Domotica'


const NavbarView = () => {
  const { t } = useTranslation();

  return (
    <nav class="navbar navbar-expand-lg fixed-top sticky" id="navbar">
      <div class="container-fluid custom-container">
        <a class=" text-dark " href="home">
          <img className={classes["imgLogo"]} src={logo} alt="" height="50px" />
        </a>
        <div>
          <button
            class="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-label="Toggle navigation"
          >
            <i class="mdi mdi-menu"></i>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto navbar-center">
            <li class="nav-item ">
              <a class="nav-link " href="home">
                {t("components.history.table.headers.home")}
              </a>
            </li>

            <li class="nav-item dropdown dropdown-hover">
              <a
                href="#"
                class="nav-link"
                id="homedrop"
                role="button"
                data-bs-toggle="dropdown"
              >
                {t("components.history.table.headers.services")}
              </a>
              <ul
                class="dropdown-menu dropdown-menu-center"
                aria-labelledby="homedrop"
              >
                <li>
                  <a class="dropdown-item" href="domotica">
                    <i class="align-middle"></i>
                    {t("components.history.table.headers.domotica")}
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="hotel">
                    <i class="align-middle"></i>
                    {t("components.history.table.headers.hotel")}
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown dropdown-hover">
              <a class="nav-link " href="contacts">
              {t("components.history.table.headers.contacts")}
              </a>
            </li>
            <li class="nav-item dropdown dropdown-hover">
              <a class="nav-link " href="aboutUs">
              {t("components.history.table.headers.about_us")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage/>}/>
          <Route path="aboutUs" element={<AboutUsPg/>}/>
          <Route path="contact" element={<ContactPg/>}/>
          <Route path="hotel" element={<HotelPg/>}/>
          <Route path="domotica" element={<Domotica/>}/>
        </Routes>
        </BrowserRouter>
    </nav>
  );
};

export default NavbarView;
