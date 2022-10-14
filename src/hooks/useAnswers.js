import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(id, uniID) {
  const [answers, Setanswers] = useState([]);
  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const answersRef = ref(db, "results/" + uniID + "/" + id);
      const ansewersQuery = query(answersRef, orderByKey());
      try {
        Setloading(true);
        Seterror(false);
        const snapshot = await get(ansewersQuery);
        Setloading(false);
        if (snapshot.exists) {
          Setanswers([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        Seterror(true);
        console.log(err);
      }
    };
    fetchData();
  }, [id, uniID]);
  return { answers, loading, error };
}
