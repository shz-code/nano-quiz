import React from "react";
import Accounts from "./Accounts";
import "./assets/css/Nav.css";
import logo from "./assets/images/nano-logo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="index.html" className="brand">
            <img src={logo} alt="Nano Quiz Logo" />
          </a>
        </li>
      </ul>
      <Accounts />
    </nav>
  );
}
