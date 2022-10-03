import React from "react";
import styles from "./assets/css/Answer.module.css";
import Checkbox from "./CheckBox";
export default function Answer({ choices }) {
  return (
    <>
      <div className={styles.answers}>
        {choices.map((item, index) => (
          <Checkbox key={index} className={styles.answer} text={item.title} />
        ))}
      </div>
    </>
  );
}
