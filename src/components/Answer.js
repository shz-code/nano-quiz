import React from "react";
import styles from "./assets/css/Answer.module.css";
import Checkbox from "./CheckBox";
export default function Answer({ choices, handleCheckBox, input }) {
  return (
    <>
      <div className={styles.answers}>
        {choices.map((item, index) => (
          <div key={index}>
            {input ? (
              <Checkbox
                className={`${styles.answer}`}
                text={item.title}
                value={index}
                checked={item.checked}
                onChange={(e) => handleCheckBox(e, index)}
              />
            ) : (
              <Checkbox
                className={`${styles.answer} ${
                  item.correct && !item.checked
                    ? styles.correct_notchecked
                    : item.correct
                    ? styles.correct
                    : item.checked
                    ? styles.wrong
                    : null
                }`}
                text={item.title}
                defaultChecked={item.checked}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
