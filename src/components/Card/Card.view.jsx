import React from "react";
import classes from "./Card.module.css";
const CardView = (props) => {
  return (
    <div  className={classes["container"]}>
      <img className={classes["img"]} src={props.img} />
      <div className={classes["title"]}>{props.title}</div>
      <div className={classes["content"]}>{props.content}</div>
    </div>
  );
};

export default CardView;
