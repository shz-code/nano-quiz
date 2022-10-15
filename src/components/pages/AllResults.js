import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ResultTable from "../ResultTable";

export default function AllResults() {
  const auth = useAuth();
  const { currentUser } = auth;
  const { photoURL } = currentUser;

  const [show, Setshow] = useState(false);
  const [answers, Setanswers] = useState([]);
  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const answersRef = ref(db, "results/" + photoURL);
      const ansewersQuery = query(answersRef, orderByKey());
      try {
        Setloading(true);
        Seterror(false);
        const snapshot = await get(ansewersQuery);
        Setloading(false);
        if (snapshot.exists) {
          Setanswers([...Object.values(snapshot.val())]);
          Setshow(true);
        } else {
        }
      } catch (err) {
        Seterror(true);
        Setshow(false);
      }
    };
    fetchData();
  }, [photoURL]);

  return (
    <div className="quizzes">
      {show ? (
        loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>There was an error! </div>
        ) : !loading && answers.length === 0 ? (
          <div>No Data Found! </div>
        ) : null
      ) : (
        <div>Do your first Quiz...</div>
      )}

      {answers.length > 0 &&
        answers.map((item) => <ResultTable item={item} key={item.sl} />)}
    </div>
  );
}
