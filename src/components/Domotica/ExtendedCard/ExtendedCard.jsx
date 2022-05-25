import React from "react";
import ExtendedCardView from "./ExtendedCard.view";

const ExtendedCard = (props) => {
  return (
    <ExtendedCardView
      img={props.img}
      content={props.content}
      title={props.title}
      buttonText={props.buttonText}
    ></ExtendedCardView>
  );
};

export default ExtendedCard;
