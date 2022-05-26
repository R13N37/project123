import React, { PropsWithChildren } from "react";

import VAcordion from "../../components/VAcordion/VAcordion";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Navbar from "../../components/Navbar/Navbar";

import acordions from "../../components/VAcordion/VAcordionMap";
import { IFilterAcordion } from "../../components/VAcordion/VAcordion.model";

const FaqView = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderTitle title="Faq" link1={"HOME"} link2="FAQ"></HeaderTitle>
      {acordions.map((acordion: IFilterAcordion) => {
        return (
          <VAcordion header={acordion.header}>{acordion.content}</VAcordion>
        );
      })}
    </div>
  );
};

export default FaqView;
