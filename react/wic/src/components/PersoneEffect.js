import React, { useEffect, useState } from "react";

export default function PersoneEffect() {
  const [persone, setPersone] = useState({
    nom: "",
    selected: false,
  });

  const [inputValue, setInputVale] = useState("");

  useEffect(() => {
    console.log("effect");
  }, [persone.nom, persone.selected]);

  console.log("render");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputVale(e.target.value)}
      />
      <button onClick={() => setPersone({ ...persone, nom: inputValue })}>
        Change nom
      </button>
      <button onClick={() => setPersone({ ...persone, selected: true })}>
        select
      </button>
      <p>{`{ nom:${persone.nom}, selected:${persone.selected} } `}</p>
    </div>
  );
}
