import React, { PropsWithChildren } from "react";

import ExtendedCardView from "./ExtendedCard.view";

type Props = {
  img: string;
  content: string;
  title: string;
  buttonText: string;
};

const ExtendedCard: React.FC<Props> = (props: PropsWithChildren<Props>) => {
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
