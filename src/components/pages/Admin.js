import React from "react";
import useAppInfo from "../../hooks/useAppInfo";
import useUserProfiles from "../../hooks/useUserProfiles";
import AllUsers from "../AllUsers";
import "../assets/css/Admin.css";

export default function Admin() {
  const { profiles, loading, error } = useUserProfiles();
  const { info } = useAppInfo();

  return (
    <div>
      {!loading && profiles.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && profiles.length > 0 && (
        <>
          <h1>List of all users</h1>
          <div className="all_users">
            {profiles.map(
              (data, index) =>
                data.uniID !== "21203010" && (
                  <AllUsers key={index} data={data} info={info[0]} />
                )
            )}
          </div>
        </>
      )}
    </div>
  );
}
