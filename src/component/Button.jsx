import React from 'react'
import Component1 from './Component1'
import { useContext } from "react";
import { counterContext } from "../context/context";

function Button() {
    const value = useContext(counterContext);
  return (
    <div>
      <button onClick={value.incCountx}>
        <span>
          <Component1 />
        </span>
        I am a Button
      </button>
    </div>
  );
}

export default Button