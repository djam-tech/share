// @flow strict

import * as React from "react";

class Fils extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.sex === "F" ? "Fille" : "Fils"}, je m'applee{" "}
        {this.props.prenom}
      </div>
    );
  }
}

export default Fils;
