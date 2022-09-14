import React from "react";
import styles from "../assets/css/Answer.module.css";
import Checkbox from "../CheckBox";
export default function Answer() {
  return (
    <>
      <div className={styles.answers}>
        <Checkbox className={styles.answer} text="Test Option" />
        <Checkbox className={styles.answer} text="Test Option" />
        <Checkbox className={styles.answer} text="Test Option" />
        <Checkbox className={styles.answer} text="Test Option" />
        <Checkbox className={styles.answer} text="Test Option" />
        <Checkbox className={styles.answer} text="Test Option" />
      </div>
    </>
  );
}
