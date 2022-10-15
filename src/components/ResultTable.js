import React from "react";
import { Link } from "react-router-dom";

export default function ResultTable({ item }) {
  const { sl, correctAns, modQuestions } = item;
  console.log(item);
  return (
    <div>
      <h1>All Quiz Records</h1>
      <div className="result_table">
        <div className="row">
          <div>Quiz Number: {sl}</div>
          <div>
            You Got {correctAns * 5} out of {modQuestions.length * 5}{" "}
          </div>
          <div>
            <Link to={`/result/${sl}`}>Go to result page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
