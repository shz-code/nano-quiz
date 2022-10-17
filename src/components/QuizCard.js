import { get, getDatabase, query, ref } from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function QuizCard({ item, score }) {
  const { sl, title, img, noq } = item;
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const preCheck = async () => {
    const db = getDatabase();
    const resultRef = ref(db, `results/${currentUser?.photoURL}/${sl}`);
    const reesultQuery = query(resultRef);
    try {
      const snapshot = await get(reesultQuery);
      if (snapshot.exists()) {
        navigate(`/result/${sl}`);
      } else {
        navigate(`/quiz/${sl}`);
      }
    } catch (err) {}
  };

  return (
    <div>
      <div onClick={preCheck}>
        <div className="quiz">
          <img src={img} alt="" />
          <p>{title}</p>
          <p className="quiz-desc">Quiz Description</p>
          <div className="qmeta">
            <p>{noq} Questions</p>
            {score >= 0 ? (
              <p>
                <span className="material-icons-outlined">done</span>
                Score : {score * 5} / {noq * 5}
              </p>
            ) : (
              <p>Total Score : {noq * 5}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
