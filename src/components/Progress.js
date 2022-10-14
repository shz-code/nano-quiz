import React, { useRef, useState } from "react";
import styles from "./assets/css/Progress.module.css";
import Button from "./Button";
export default function Progress({
  handleCurrentQna,
  currentQna,
  length,
  submit,
}) {
  const [show, Setshow] = useState(false);
  const progress = parseInt(((currentQna + 1) / length) * 100);

  const tooltipRef = useRef();

  const toggleToolip = () => {
    if (show) {
      Setshow(false);
      tooltipRef.current.style.display = "none";
    } else {
      Setshow(true);
      tooltipRef.current.style.left = `calc(${progress}% - 59px)`;
      tooltipRef.current.style.display = "block";
    }
  };

  return (
    <>
      <div className={styles.progressBar}>
        <div
          className={styles.backButton}
          onClick={() => handleCurrentQna("prev")}
        >
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={styles.rangeArea}>
          <div className={styles.tooltip} ref={tooltipRef}>
            {progress}% Complete!
          </div>
          <div className={styles.rangeBody}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
              onMouseOver={toggleToolip}
              onMouseOut={toggleToolip}
            ></div>
          </div>
        </div>
        {progress === 100 ? (
          <Button className={styles.next} onClick={submit}>
            <span>Submit</span>
            <span className="material-icons-outlined">done</span>
          </Button>
        ) : (
          <Button
            className={styles.next}
            onClick={() => handleCurrentQna("next")}
          >
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </Button>
        )}
      </div>
      {progress === 100 && (
        <div className={styles.warningMsg}>
          Answer Once Submitted can't be changed
        </div>
      )}
    </>
  );
}
