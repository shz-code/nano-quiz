import React from "react";
import styles from "../components/assets/css/Layouts.module.css";
import Nav from "./Nav";

export default function Layouts({ children }) {
  return (
    <div>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer className={styles.footer}>
        &#169; Developed by Shahidul Alam. Design Inspired.
      </footer>
    </div>
  );
}
