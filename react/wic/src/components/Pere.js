import React, { Component } from "react";
import Fils from "./Fils";

class Pere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fils: [
        {
          prenom: "mohamed",
          sex: "H",
          age: 18,
        },
        {
          prenom: "amina",
          sex: "F",
          age: 15,
        },
        {
          prenom: "sarah",
          sex: "F",
          age: 25,
        },
      ],
    };
  }

  prenom = "mohamed";
  render() {
    return (
      <>
        <div>Je suis le component pere</div>
        {this.state.fils.map((el, i) => (
          <Fils prenom={el.prenom} sex={el.sex} age={el.age} />
        ))}
      </>
    );
  }
}
export default Pere;
