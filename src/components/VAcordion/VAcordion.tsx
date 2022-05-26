import React, { PropsWithChildren, useState } from "react";

import VAcordionView from "./VAcordion.view";

type Props = {
  header: string;
};

const VAcordion: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const [showState, setShowState] = useState(false);

  const handleClick = () => {
    setShowState((prev) => !prev);
  };

  return (
    <VAcordionView header={props.header} show={showState} onClick={handleClick}>
      {props.children}
    </VAcordionView>
  );
};

export default VAcordion;
