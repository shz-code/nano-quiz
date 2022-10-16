import React from "react";
import { Link } from "react-router-dom";
import Accounts from "./Accounts";
import "./assets/css/Nav.css";
import Logo from "./Logo";
export default function Nav() {
  return (
    <nav>
      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="brand">
              <Logo className="logo" />
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
