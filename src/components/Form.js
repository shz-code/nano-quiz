import React from 'react'
import styles from "./assets/css/Form.module.css"
export default function Form({children, className}) {
  return (
    <form className={`${styles.form} ${className}`}>
        {children}
    </form>
  )
}
