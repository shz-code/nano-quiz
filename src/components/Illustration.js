import React from "react";
import styles from "./assets/css/Illustration.module.css";
import login_img from "./assets/images/secure_login.svg";
import signup_img from "./assets/images/welcome.svg";

export default function Illustration({ type }) {
  return (
    <div className={styles.illustration}>
      {type === "signup" ? (
        <img src={signup_img} alt="Signup" />
      ) : (
        <img src={login_img} alt="Login" />
      )}
    </div>
  );
}
