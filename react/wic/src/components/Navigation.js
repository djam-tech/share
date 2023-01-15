import React from "react";
import { Link } from 'react-router-dom'

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
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/todo'>Todo</Link></li>
          <li><Link to='/compteur'>Compteur</Link></li>
          <li><Link to='/Exam'>Exam</Link></li>
                    
        </ul>
      </div>
    </nav>
  );
}
