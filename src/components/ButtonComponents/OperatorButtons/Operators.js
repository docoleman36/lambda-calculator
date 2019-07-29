import React from "react";
import { useState } from "react";
import { operators } from '../../../data';
//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div>
      {operatorState.map((value) => {
        return <OperatorButton oper={value.char} />
      })}
    </div>
  );
};

export default Operators;
