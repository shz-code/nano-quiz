import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(id, userID) {
  const [answers, Setanswers] = useState([]);
  const [result, Setresult] = useState([]);
  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + id + "/contents");
      const resultRef = ref(db, "results/" + userID + "/" + id);
      const ansewersQuery = query(answersRef, orderByKey());
      const resultQuery = query(resultRef, orderByKey());
      try {
        Setloading(true);
        Seterror(false);
        const snapshot1 = await get(ansewersQuery);
        const snapshot2 = await get(resultQuery);
        Setloading(false);
        if (snapshot1.exists) {
          Setanswers([...Object.values(snapshot1.val())]);
        }
        if (snapshot2.exists) {
          Setresult([...Object.values(snapshot2.val())]);
        }
      } catch (err) {
        Seterror(true);
        console.log(err);
      }
    };
    fetchData();
  }, [id, userID]);
  return { answers, loading, error, result };
}
