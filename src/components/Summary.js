import React from "react";
import styles from "./assets/css/Summary.module.css";
import img from "./assets/images/success.png";

export default function Summary() {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={styles.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
}
