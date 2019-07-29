import React from "react";
import { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {specialState.map((value) => {
        return <SpecialButton spec={value} />
      })}
    </div>
  );
};

export default Specials;

