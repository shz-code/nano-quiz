import React from "react";
import styles from "./assets/css/TextInput.module.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <div className={styles.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}