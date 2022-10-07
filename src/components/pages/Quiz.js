import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import Progress from "../Progress";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "mod":
      action.value.forEach((item) => {
        item.choices.forEach((choice) => {
          choice.checked = false;
        });
      });
      return action.value;
    case "check":
      const newState = _.cloneDeep(state);
      newState[action.currentQna].choices[action.index].checked = action.value;
      return newState;
    default:
      return state;
  }
};

export default function Quiz() {
  const [currentQna, SetcurrentQna] = useState(0);
  const [modQuestions, dispatch] = useReducer(reducer, initialState);

  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);

  useEffect(() => {
    dispatch({ type: "mod", value: questions });
  }, [questions]);

  const handleCurrentQna = (action) => {
    if (action === "prev") {
      if (currentQna - 1 >= 0) {
        SetcurrentQna((prev) => prev - 1);
      }
    } else if (action === "next") {
      if (currentQna + 1 < questions.length) {
        SetcurrentQna((prev) => prev + 1);
      }
    }
  };

  const handleCheckBox = (e, index) => {
    dispatch({
      type: "check",
      currentQna: currentQna,
      value: e.target.checked,
      index: index,
    });
  };

  return (
    <>
      {!loading && questions.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && modQuestions && modQuestions.length > 0 && (
        <div>
          <h1>{questions[currentQna].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            choices={modQuestions[currentQna].choices}
            handleCheckBox={handleCheckBox}
          />
          <Progress
            handleCurrentQna={handleCurrentQna}
            currentQna={currentQna}
            length={questions.length}
          />
          <Miniplayer />
        </div>
      )}
    </>
  );
}
