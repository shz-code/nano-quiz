import React from "react";
import styles from "./assets/css/Question.module.css";

export default function Question() {
  return (
    <div className={styles.question}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Correct answers of the quiz!
      </div>
      {/* <Answer /> */}
    </div>
  );
}
