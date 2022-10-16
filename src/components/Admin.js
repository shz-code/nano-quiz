import React from "react";
import useAllResults from "../hooks/useAllRecords";
import AllUsers from "./AllUsers";

export default function Admin() {
  const { records, loading, error, info } = useAllResults();

  const prePopulate = () => {
    let userUniIDs = [],
      userRecords = [];
    records.forEach((record) => {
      if (!userUniIDs.includes(record.uniID)) {
        userUniIDs.push(record.uniID);
        userRecords.push({
          name: record.displayName,
          uniID: record.uniID,
        });
      }
    });
    return userRecords;
  };

  const userData = prePopulate();

  return (
    <div>
      {!loading && records.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && userData.length > 0 && (
        <>
          <h1>List of all users</h1>
          {userData.map((data, index) => (
            <AllUsers key={index} data={data} totalQ={info[0]} />
          ))}
        </>
      )}
    </div>
  );
}
