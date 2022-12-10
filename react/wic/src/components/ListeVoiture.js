import React, { useState } from "react";
import CardVoiture from "./CardVoiture";

// import {data} from '../data'
import { data } from "../data";
import './css/listeVoiture.css'

export default function ListeVoiture() {
  const [voitures, setVoitures] = useState(data);

  console.log('voitures',voitures);

  const toogle = (id)=>{
    const voiture = voitures.filter(el=>el.id===id)[0]
    const newVoiture = {...voiture, visible:!voiture.visible}
    const newListVoiture = voitures.filter(el=>el.id!==id)
    setVoitures([...newListVoiture, newVoiture].sort((a,b)=>(a.id>b.id)?1:-1))
  }

  return (
    <div className="cars-container">
      {voitures.map((el, id) => (
        <CardVoiture 
        key = {''+id}
        id={el.id}
        nom={el.nom}
        marque = {el.marque}
        energie = {el.energie}
        couleur={el.couleur}
        puissance = {el.puissance}
        picture ={el.pictures}
        visible={el.visible}
        toogle={toogle}
        />
      ))}
    </div>
  );
}
