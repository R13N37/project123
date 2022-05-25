import React from "react";
import hotel1 from "../../assets/images/hotel1.png";
import hotel2 from "../../assets/images/hotel2.png";
import hotel3 from "../../assets/images/hotel3.png";
import classes from "./HotelImg.module.css";
import "./HotelImg.module.css";

const HotelImgView = () => {
  return (
    <div className={classes["container"]}>
      <a>
        <img className={classes["imag"]} src={hotel1} />
      </a>
      <a>
        <img className={classes["imag"]} src={hotel2} />
      </a>
      <a>
        <img className={classes["imag"]} src={hotel3} />
      </a>
    </div>
  );
};

export default HotelImgView;
