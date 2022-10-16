import React from "react";
import { Link } from "react-router-dom";

export default function ResultTable({ item }) {
  const { sl, correctAns, modQuestions } = item;
  return (
    <div>
      <div className="result_table">
        <div className="row">
          <div>
            {" "}
            <span className="title">Quiz Number:</span> {sl}
          </div>
          <div>
            You Got {correctAns * 5} out of {modQuestions.length * 5}{" "}
          </div>
          <div>
            <span className="title">Remarks: </span>{" "}
            {parseInt((correctAns / modQuestions.length) * 100) === 100
              ? "Excellent"
              : parseInt((correctAns / modQuestions.length) * 100) > 80
              ? "Great"
              : parseInt((correctAns / modQuestions.length) * 100) > 60
              ? "Good"
              : "You can do better"}
          </div>
          <div>
            <Link to={`/result/${sl}`}>Go to result page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
