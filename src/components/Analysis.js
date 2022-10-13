import React from "react";
import styles from "./assets/css/Analysis.module.css";
import Question from "./Question";

export default function Analysis({ answers, count, score }) {
  return (
    <div className={styles.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {score} out of {count} questions correctly
      </h4>
      {answers.map((question, index) => (
        <Question question={question} key={index} />
      ))}
    </div>
  );
}
