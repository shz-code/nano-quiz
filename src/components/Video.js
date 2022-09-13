import React from "react";
import img from "./assets/images/html-basics-quiz.png";

export default function Video() {
  return (
    <div>
      <a href="quiz.html">
        <div className="video">
          <img src={img} alt="" />
          <p>#1 Web basics</p>
          <div className="qmeta">
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </div>
  );
}
