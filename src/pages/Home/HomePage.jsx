import React from "react";

import Navbar from "../../components/Navbar/Navbar.tsx";
import Footer from "../../components/Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import OurService from "./OurService/OurService";

import HotelImg from "./HotelImg/HotelImg";
import Portfolio from "./Portfolio/Portfolio";
import PortfolioImg from "./PortfolioImg/PortfolioImg";
import ButtonPortfolio from "./ButtonPortfolio/ButtonPortfolio";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <OurService></OurService>
      <HotelImg></HotelImg>
      <Portfolio></Portfolio>
      <PortfolioImg></PortfolioImg>
      <ButtonPortfolio></ButtonPortfolio>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default HomePage;
