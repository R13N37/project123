import React, { PropsWithChildren } from "react";

import NavbarView from "./Navbar.view";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

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

const Navbar: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const navigate = useNavigate();

  return (
    <NavbarView
      handleHomeAutomatizationClick={() => navigate("/domotica")}
      handleHotelClick={() => navigate("/hotel")}
      handleHomeClick={() => navigate("/")}
      handleContactClick={() => navigate("/contact")}
      handleAboutUsClick={() => navigate("/aboutUs")}
      handleSuperbonusClick={() => navigate("/superbonus")}
      handleFaqClick={() => navigate("/faq")}
      handleNewsClick={() => navigate("/news")}
    ></NavbarView>
  );
};

export default Navbar;
