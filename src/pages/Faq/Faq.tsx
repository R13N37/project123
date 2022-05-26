import React, { PropsWithChildren } from "react";

import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import FaqView from "./Faq.view";

import classes from "./Faq.module.css";

type Props = {
  img: JSX.Element;
  title: string;
  content: string;
};

const Faq: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={classes["pageContent"]}>
      <HeaderTitle title="Faq" link1={"HOME"} link2="FAQ"></HeaderTitle>
      <div className={classes["contentFaq"]}>
        <FaqView></FaqView>
      </div>
    </div>
  );
};

export default Faq;
