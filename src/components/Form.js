import React from "react";
import styles from "./assets/css/Form.module.css";
export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${styles.form} ${className}`} action="#" {...rest}>
      {children}
    </form>
  );
}
