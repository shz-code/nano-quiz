import React from "react";
import { Link } from "react-router-dom";
export default function QuizCard({ item }) {
  const { sl, title, img, noq } = item;

  return (
    <div>
      <Link to={`/quiz/${sl}`}>
        <div className="quiz">
          <img src={img} alt="" />
          <p>
            #{sl} {title}
          </p>
          <div className="qmeta">
            <p>{noq} Questions</p>
            <p>Score : {noq * 5}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}