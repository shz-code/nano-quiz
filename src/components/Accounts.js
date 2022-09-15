import React from "react";
import { Link } from "react-router-dom";

export default function Accounts() {
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup" className="signup-text">
        Signup
      </Link>
      <Link to="/login" className="signup-text">
        Login
      </Link>
      {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  );
}
