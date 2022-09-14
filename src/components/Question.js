import React from "react";
import Answer from "./Answer";
import styles from "./assets/css/Question.module.css";

export default function Question() {
  return (
    <div className={styles.question}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answer />
    </div>
  );
}
