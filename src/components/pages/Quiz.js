import { getDatabase, ref, set, update } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import useUserProfile from "../../hooks/useUserProfile";
import Answer from "../Answer";
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
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { profile } = useUserProfile(currentUser.uid);

  let totalCorrects = profile[1];
  let totalQuestionsAttempts = profile[2];
  let totalQuizzes = profile[3];

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

  const submit = async () => {
    let correctAns = 0;

    const db = getDatabase();
    const { photoURL, uid, displayName } = currentUser;
    const resultRef = ref(db, `results/${photoURL}`);
    const userProfileRef = ref(db, `userProfile/${uid}`);

    modQuestions.forEach((question, index1) => {
      let correctIndex = [],
        checkedIndex = [];
      question.choices.forEach((choice, index2) => {
        if (choice.correct) {
          correctIndex.push(index2);
        }
        if (choice.checked) {
          checkedIndex.push(index2);
        }
      });
      if (_.isEqual(checkedIndex, correctIndex)) {
        correctAns += 1;
      }
    });
    await update(resultRef, {
      [id]: {
        sl: id,
        correctAns: correctAns,
        modQuestions,
      },
    });
    totalQuizzes++;
    totalCorrects += correctAns;
    totalQuestionsAttempts += modQuestions.length;
    await set(userProfileRef, {
      name: displayName,
      totalQuizAttempt: totalQuizzes,
      totalCorrect: totalCorrects,
      totalQuestionsAttempt: totalQuestionsAttempts,
      uniID: photoURL,
    });

    navigate(`/result/${id}`);
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
            input={true}
          />
          <Progress
            handleCurrentQna={handleCurrentQna}
            currentQna={currentQna}
            length={questions.length}
            submit={submit}
          />
        </div>
      )}
    </>
  );
}
