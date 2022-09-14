import React from "react";
import styles from "./assets/css/Progress.module.css";
import Button from "./Button";

export default function Progress() {
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% Cimplete!</div>
        <div className={styles.rangeBody}>
          <div className={styles.progress} style={{ width: "50%" }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className={styles.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
}
