import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {<button className="top">{props.oper}</button>}
    </>
  );
};

export default OperatorButton;