import React from "react";
import styles from "./assets/css/Progress.module.css";
import Button from "./Button";
export default function Progress({
  handleCurrentQna,
  currentQna,
  length,
  submit,
}) {
  const progress = parseInt(((currentQna + 1) / length) * 100);

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.backButton}
        onClick={() => handleCurrentQna("prev")}
      >
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>{progress}% Complete!</div>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {progress === 100 ? (
        <Button className={styles.next} onClick={submit}>
          <span>Submit</span>
          <span className="material-icons-outlined">done</span>
        </Button>
      ) : (
        <Button
          className={styles.next}
          onClick={() => handleCurrentQna("next")}
        >
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      )}
    </div>
  );
}
