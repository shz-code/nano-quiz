import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuizList() {
  const [quizList, SetquizList] = useState([]);
  const [loading, Setloading] = useState(true);
  const [error, Seterror] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz");
      const quizQuery = query(quizRef, orderByKey());

      try {
        Seterror(false);
        Setloading(true);
        const snapshot = await get(quizQuery);
        Setloading(false);
        if (snapshot.exists()) {
          SetquizList((prev) => {
            return [...Object.values(snapshot.val())];
            // return [...prev, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        Seterror(true);
        Setloading(false);
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const values = {
    quizList,
    loading,
    error,
  };

  return values;
}
