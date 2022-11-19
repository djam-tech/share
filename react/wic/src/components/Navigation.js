import React from "react";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav>
      <label htmlFor="check" className="check check-container">
        <div style={{ transform: "rotate(90deg)", display: "inline-block" }}>
          |||
        </div>
      </label>

      <h3>LOGO</h3>
      <div className="full-height">
        <input type="checkbox" id="check" />
        <ul>
          <li>Home </li>
          <li>about</li>
          <li>services</li>
          <li>connexion</li>
        </ul>
      </div>
    </nav>
  );
}
