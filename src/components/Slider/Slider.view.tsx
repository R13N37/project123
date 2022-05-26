import React from "react";
import Slider from "react-slick";

import classes from "./Slider.module.css";

import thinknx from "../../assets/images/logo-thinknx.png";
import lithoss from "../../assets/images/lithoss_logo.png";
import ekinex from "../../assets/images/ekinex_logo-azzurro.png";

const SliderView = () => {
  var settings = {
    infinite: true,
    speed: 1200,
    autoplaySpeed: 1000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className={classes["containerSlider"]}>
      <Slider {...settings}>
        <div className={classes["imageContainer"]}>
          <img className={classes["image"]} src={thinknx} />
        </div>
        <div>
          <img className={classes["image"]} src={lithoss} />
        </div>
        <div>
          <img className={classes["image"]} src={ekinex} />
        </div>
        <div className={classes["imageContainer"]}>
          <img className={classes["image"]} src={thinknx} />
        </div>
        <div>
          <img className={classes["image"]} src={lithoss} />
        </div>
        <div>
          <img className={classes["image"]} src={ekinex} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderView;
