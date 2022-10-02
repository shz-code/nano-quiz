import React from "react";
import useQuizList from "../hooks/useQuizList";
import "./assets/css/Videos.css";
import Quiz from "./Quiz";

export default function Quizzes() {
  const { loading, error, quizList } = useQuizList();
  return (
    <div className="videos">
      {quizList.length > 0 &&
        quizList.map((item) => <Quiz item={item} key={item.sl} />)}
      {!loading && quizList.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
