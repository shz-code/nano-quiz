import React from "react";
import { Link } from "react-router-dom";
import Accounts from "./Accounts";
import "./assets/css/Nav.css";
import logo from "./assets/images/nano-logo.png";
export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Nano Quiz Logo" />
          </Link>
        </li>
      </ul>
      <Accounts />
    </nav>
  );
}
