import React, { useState } from "react";

export default function Personne() {
  const [persone, setPersone] = useState({
    nom: "",
    age: 18,
  });
  // {
  //     nom:'mohamed',
  //     age:21,
  //      picture:[]
  // }
  const setNom = (e) => {
    setPersone({ ...persone, nom: e.target.value });
  };
  return (
    <>
      <div>Mon nom {persone.nom}</div>
      <input
        type="text"
        placeholder="Nom"
        value={persone.nom}
        onChange={(e) => setNom(e)}
      />
    </>
  );
}
