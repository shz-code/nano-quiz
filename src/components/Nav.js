import React from "react";
import { Link } from "react-router-dom";
import Accounts from "./Accounts";
import "./assets/css/Nav.css";
import logo from "./assets/images/nano-logo.png";
export default function Nav() {
  return (
    <nav>
      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="brand">
              <img src={logo} alt="Nano Quiz Logo" />
            </Link>
          </li>
          <li>
            <Link to="/">Quizzes</Link>
          </li>
          <li>
            <Link to="/all_results">Results</Link>
          </li>
        </ul>
        <Accounts />
      </div>
    </nav>
  );
}
