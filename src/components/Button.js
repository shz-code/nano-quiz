import React from "react";
import styles from "./assets/css/Button.module.css";
export default function Button({ text, ...rest }) {
  return (
    <div className={styles.button} {...rest}>
      <span>{text}</span>
    </div>
  );
}
