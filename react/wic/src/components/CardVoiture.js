import React from "react";

export default function CardVoiture(props) {
  const {id, nom, marque, energie=100, couleur, puissance, picture, visible, toogle } = props;
  console.log("PROPS", props);
  return (
    <div className="card">
      <div className="pic"></div>
      <div className="desc">
        <h3
          style={{
            color:`${visible?'blue':'red'}`
          }}
        >{nom}</h3>
        <button onClick={()=>toogle(id)}>toogle color</button>
        {/* <ul>
          <li>
            <span>marque</span>:<span>{}</span>
          </li>
          <li>
            <span>couleur</span>:<span>{"rouge"}</span>
          </li>
          <li><span>puissance</span>:<span>{puissance}</span></li>
                    <li><span>energie</span>:<span>{energie}</span></li>
        </ul> */}
      </div>
    </div>
  );
}
