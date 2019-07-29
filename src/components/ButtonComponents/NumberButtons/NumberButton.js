import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = (props) => {
  return (
    <>
      {<button className="middle">{props.num}</button>}
    </>
  );
};

export default NumberButton;
