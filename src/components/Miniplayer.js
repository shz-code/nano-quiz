import React, { useState } from "react";
import styles from "./assets/css/Miniplayer.module.css";
import image from "./assets/images/html-basics-quiz.png";

export default function Miniplayer() {
  const [show, Setshow] = useState(true);
  return (
    <>
      {show === true ? (
        <div
          className={`${styles.miniPlayer} ${styles.floatingBtn}`}
          onClick={() => Setshow((e) => !e)}
        >
          <span className={`material-icons-outlined ${styles.open}`}>
            play_circle_filled
          </span>
        </div>
      ) : (
        <div className={`${styles.miniPlayer}`}>
          <span
            className={`material-icons-outlined ${styles.close}`}
            onClick={() => Setshow((e) => !e)}
          >
            close
          </span>
          <img src={image} alt="" />
          <p>#1 Web basics</p>
        </div>
      )}
    </>
  );
}
