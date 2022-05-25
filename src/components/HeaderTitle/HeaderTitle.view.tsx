import React, { PropsWithChildren } from "react";

import classes from "./HeaderTitle.module.css";

type Props = {
  title: string;
  link1: string;
  link2: string;
};

const HeaderTitleView: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={classes["header"]}>
      <div className={classes["text"]}>{props.title}</div>
      <div className={classes["dots"]}>
        <a href="#" className={classes["link"]}>
          {props.link1}
        </a>
        <div className={classes["dot"]}></div>
        <div className={classes["dot"]}></div>
        <a href="#" className={classes["link"]}>
          {props.link2}
        </a>
      </div>
    </div>
  );
};

export default HeaderTitleView;
