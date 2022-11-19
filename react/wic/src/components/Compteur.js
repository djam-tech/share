import React, { useState } from "react";

export default function Compteur(props) {
  //props {...}
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
    console.log(state);
  };
  const addWithDelay = () => {
    setTimeout(() => setState((state) => state + 1), 2000);
  };
  return (
    <div>
      <input type="text" value={state} />
      <button onClick={add}>inc +</button>
      <button onClick={addWithDelay}>inc after 2s</button>
    </div>
  );
}
