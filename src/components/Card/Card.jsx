import React from "react";

import CardView from "./Card.view";

const Card = (props) => {
  return (
    <CardView
      img={props.img}
      content={props.content}
      title={props.title}
    ></CardView>
  );
};

export default Card;
