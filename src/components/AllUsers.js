import React from "react";
import { Link } from "react-router-dom";

export default function AllUsers({ data, info }) {
  const { name, totalCorrect, totalQuestionsAttempt, totalQuizAttempt, uniID } =
    data;
  return (
    <div>
      <div className="row_user">
        <div>
          <span className="title">Name:</span> {name}
        </div>
        <div>
          <span className="title">ID:</span> {uniID}
        </div>
        <div>
          <span className="title">Avarage Mark: </span>
          {parseInt((totalCorrect / totalQuestionsAttempt) * 100)}%
        </div>
        <div>
          <Link to={`user/${uniID}`}> Go to user details</Link>
        </div>
      </div>
      <div>
        {totalQuizAttempt === info ? (
          <div className="status">
            <span className="material-icons-outlined">done</span>
            <p> Participated in all quizzes</p>
          </div>
        ) : (
          <div className="status">
            <p>
              Participated in {totalQuizAttempt} out of {info} quizzes
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
