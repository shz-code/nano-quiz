import React from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import Progress from "../Progress";

export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  return (
    <>
      {questions.length > 0 &&
        questions.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h4>Question can have multiple answers</h4>
            <Answer choices={item.choices} />
            <Progress />
            <Miniplayer />
          </div>
        ))}
      {!loading && questions.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </>
  );
}
