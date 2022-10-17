import React from "react";
import { useParams } from "react-router-dom";
import useUserResult from "../../hooks/useUserResult";
import ResultTable from "../ResultTable";

export default function UserResults() {
  const { uniID, name } = useParams();
  const { result, loading, error } = useUserResult(uniID);
  return (
    <div>
      {!loading && result.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && result.length > 0 && (
        <>
          <h1>
            All Quiz Info of <span className="Logged-in-user"> {name}</span>{" "}
          </h1>
          {result.map((item, index) => (
            <ResultTable item={item} key={item.sl} admin={true} uniID={uniID} />
          ))}
        </>
      )}
    </div>
  );
}
