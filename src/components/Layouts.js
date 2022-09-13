import React from "react";
import styles from "../components/assets/css/Layouts.module.css";
import Nav from "./Nav";
import Home from "./pages/Home";

export default function Layouts() {
  return (
    <div>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
            <Home />
        </div>
      </main>
      <footer className={styles.footer}>
        &#169; Developed by Shahidul Alam. Designe Inspired.
      </footer>
    </div>
  );
}
