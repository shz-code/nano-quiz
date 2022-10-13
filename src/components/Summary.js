import React from "react";
import styles from "./assets/css/Summary.module.css";
import img from "./assets/images/success.png";

export default function Summary({ score, count }) {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />
          {score * 5} out of {count * 5}
        </p>
      </div>

      <div className={styles.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
}
