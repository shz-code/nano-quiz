import React from "react";
import Answer from "./Answer";
import styles from "./assets/css/Question.module.css";

export default function Question({ question }) {
  return (
    <div className={styles.question}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Correct answers of {question.title}!
      </div>
      <Answer choices={question.choices} />
    </div>
  );
}
