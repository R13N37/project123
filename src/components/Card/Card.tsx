import React, { PropsWithChildren } from "react";

import CardView from "./Card.view.tsx";

type Props = {
  img: string;
  content: string;
  title: string;
}

const Card: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <CardView
      img={props.img}
      content={props.content}
      title={props.title}
    ></CardView>
  );
};

export default Card;
