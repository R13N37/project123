import React from "react";
import HeaderTitleView from "./HeaderTitle.view";

const HeaderTitle = (props) => {
  return (
    <HeaderTitleView
      title={props.title}
      link1={props.link1}
      link2={props.link2}
    ></HeaderTitleView>
  );
};

export default HeaderTitle;
