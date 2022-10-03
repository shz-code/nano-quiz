import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuizList(page) {
  const [quizList, SetquizList] = useState([]);
  const [loading, Setloading] = useState(true);
  const [hasMore, SethasMore] = useState(true);
  const [error, Seterror] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz");
      const quizQuery = query(
        quizRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        Seterror(false);
        Setloading(true);
        const snapshot = await get(quizQuery);
        Setloading(false);
        if (snapshot.exists()) {
          if (page === 0) {
            SetquizList((prev) => {
              return [...Object.values(snapshot.val())];
            });
          } else {
            SetquizList((prev) => {
              return [...prev, ...Object.values(snapshot.val())];
            });
          }
        } else {
          SethasMore(false);
        }
      } catch (err) {
        Seterror(true);
        Setloading(false);
        console.log(err);
      }
    }
    fetchData();
  }, [page]);

  const values = {
    quizList,
    loading,
    error,
    hasMore,
  };

  return values;
}
