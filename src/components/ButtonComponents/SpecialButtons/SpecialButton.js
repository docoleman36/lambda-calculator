import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = (props) => {
  return (
    <>
      {<button className="top">{props.spec}</button>}
    </>
  );
};

export default SpecialButton;
