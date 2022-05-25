import React from "react";
import classes from "./PortfolioImg.module.css";

import img1 from "../../assets/images/Chirofisiogen.png";
import img2 from "../../assets/images/borgodeiconti.png";
import img3 from "../../assets/images/BorgoBrufa.png";
import img4 from "../../assets/images/Vetrya.png";
import img5 from "../../assets/images/QuasarVillage.png";
import img6 from "../../assets/images/RoccaAlbornotz.png";

const PortfolioImgView = () => {
  return (
    <div className={classes['container']}>
      <div className={classes["group1"]}>
        <a href="#">
          <img className={classes['group1Img']} src={img1} />
        </a>
        <a href="#">
          <img  className={classes['group1Img']} src={img2} />
        </a>
      </div>
      <div className={classes['group2']}>
        <a href="#">
          <img  className={classes['group2Img']} src={img3} />
        </a>
        <a href="#">
          <img  className={classes['group2Img']} src={img4} />
        </a>
        <a href="#">
          <img className={classes['group2Img']}  src={img5} />
        </a>
        <a href="#">
          <img className={classes['group2Img']}  src={img6} />
        </a>
      </div>
    </div>
  );
};

export default PortfolioImgView;
