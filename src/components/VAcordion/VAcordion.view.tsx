import React, { PropsWithChildren } from "react";

import classes from "./VAcordion.module.css";

type Props = {
  show: boolean;
  header: string;
  onClick: () => void;
};

const VAcordionView: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["accordion"]} onClick={props.onClick}>
        {props.header}
      </div>
      {props.show && props.children}
    </div>
  );
};

export default VAcordionView;
