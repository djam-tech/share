import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adress: "",
    ville: "",
  });

  const editForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <input
        type="text"
        onChange={(e) => editForm(e)}
        name="nom"
        placeholder="nom"
      />
      <input
        type="text"
        onChange={(e) => editForm(e)}
        name="prenom"
        placeholder="prenom"
      />
      <input
        type="text"
        onChange={(e) => editForm(e)}
        name="adress"
        placeholder="adress"
      />
      <input
        type="text"
        onChange={(e) => editForm(e)}
        name="ville"
        placeholder="ville"
      />
    </div>
  );
}
