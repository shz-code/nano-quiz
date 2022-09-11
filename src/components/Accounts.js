import React from "react";

export default function Accounts() {
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html" className="signup-text">
        Signup
      </a>
      {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  );
}
