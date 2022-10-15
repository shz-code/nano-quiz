import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { currentUser } = useAuth();
  const { photoURL } = currentUser;
  const { id } = useParams();
  const { loading, error, answers } = useAnswers(photoURL, id);
  const navigate = useNavigate();

  if (error) navigate("/");

  return (
    <>
      <Summary score={answers[0]} count={answers[1]?.length} />
      {loading && <p>Loading...</p>}
      {error && <p>There was an eror...</p>}
      {!loading && answers[1]?.length === 0 && <p>No Data</p>}
      {!loading && !error && answers[1]?.length > 0 && (
        <Analysis
          answers={answers[1]}
          score={answers[0]}
          count={answers[1]?.length}
        />
      )}
    </>
  );
}
