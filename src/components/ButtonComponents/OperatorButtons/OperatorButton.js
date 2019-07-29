import React from "react";

const OperatorButton = (props) => {
  return (
    <div className="operator">
      {<button className="side">{props.oper}</button>}
    </div>
  );
};

export default OperatorButton;