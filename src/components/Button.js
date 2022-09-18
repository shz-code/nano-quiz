import React from "react";
import styles from "./assets/css/Button.module.css";
export default function Button({ children, className, ...rest }) {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
