import React, { PropsWithChildren } from "react";

import NavbarView from "./Navbar.view.tsx";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

type Props = {
  handleHomeAutomatizationClick: () => void;
  handleHotelClick: () => void;
  handleHomeClick: () => void;
  handleContactClick: () => void;
  handleAboutUsClick: () => void;
  handleSuperbonusClick: () => void;
 
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
    ></NavbarView>
  );
};

export default Navbar;
