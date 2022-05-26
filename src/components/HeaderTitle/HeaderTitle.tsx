import React, { PropsWithChildren } from "react";

import HeaderTitleView from "./HeaderTitle.view";

type Props = {
  title: string;
  link1: string;
  link2: string;
};

const HeaderTitle: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <HeaderTitleView
      title={props.title}
      link1={props.link1}
      link2={props.link2}
    ></HeaderTitleView>
  );
};

export default HeaderTitle;
