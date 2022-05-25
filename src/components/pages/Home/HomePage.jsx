import React from "react";

import Navbar from '../../Navbar/Navbar'
import Footer from "../../Footer/Footer";
import Home from "../../Home/Home";
import About from "../../About/About";
import OurService from "../../OurService/OurService";
import HotelImg from "../../HotelImg/HotelImg";
import Portfolio from "../../Portfolio/Portfolio";
import PortfolioImg from "../../PortfolioImg/PortfolioImg";
import ButtonPortfolio from "../../ButtonPortfolio/ButtonPortfolio";


const HomePage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <OurService></OurService>
        <HotelImg></HotelImg>
        <Portfolio></Portfolio>
        <PortfolioImg></PortfolioImg>
        <ButtonPortfolio></ButtonPortfolio>
        <Footer></Footer>
    </div>
  )
}

export default HomePage;