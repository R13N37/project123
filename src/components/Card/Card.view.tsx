import React, { PropsWithChildren } from "react";

import classes from "./Card.module.css";


type Props = {
  img: string;
  content: string;
  title: string;
}

const CardView: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <div  className={classes["container"]}>
      <img className={classes["img"]} src={props.img} />
      <div className={classes["title"]}>{props.title}</div>
      <div className={classes["content"]}>{props.content}</div>
    </div>
  );
};

export default CardView;
