import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const [score, setScore] = useState(0);

  const { currentUser } = useAuth();
  const { uid } = currentUser;
  const { id } = useParams();
  const { loading, error, answers, result } = useAnswers(id, uid);
  const navigate = useNavigate();
  // const { state } = useLocation();

  const calculate = useCallback(() => {
    answers.forEach((question, index1) => {
      // let correntIndexes = [],
      //   checkedIndexes = [];
      question.choices.forEach((choice, index2) => {
        let flag = result[index1].choices[index2].checked;
        choice.checked = flag;
        if (choice.correct && flag) {
          setScore((prev) => prev + 1);
        }
      });
    });
  }, [answers, result]);

  if (error) navigate("/");

  useEffect(() => {
    if (!error) {
      calculate();
    }
  }, [calculate, error]);
  return (
    <>
      <Summary score={score} count={answers.length} />
      {loading && <p>Loading...</p>}
      {error && <p>There was an eror...</p>}
      {!loading && answers.length === 0 && <p>No Data</p>}
      {!loading && !error && answers.length > 0 && (
        <Analysis answers={answers} score={score} count={answers.length} />
      )}
    </>
  );
}
