import React from "react";
import styles from "./assets/css/Progress.module.css";
import Button from "./Button";
export default function Progress({ handleCurrentQna, currentQna, length }) {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.backButton}
        onClick={() => handleCurrentQna("prev")}
      >
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>
          {((currentQna + 1) / length) * 100}% Complete!
        </div>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `calc(${currentQna + 1} / ${length} * 100%)` }}
          ></div>
        </div>
      </div>
      <Button className={styles.next} onClick={() => handleCurrentQna("next")}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
