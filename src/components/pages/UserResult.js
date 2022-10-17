import React from "react";
import { useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function UserResult() {
  const { id, uniID } = useParams();

  const { loading, error, answers } = useAnswers(uniID, id);

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
