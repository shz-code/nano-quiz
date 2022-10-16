import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(questionID) {
  const [questions, Setquestions] = useState([]);
  const [loading, Setloading] = useState(true);
  const [error, Seterror] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const db = getDatabase();
      const questionRef = ref(db, "questions/" + questionID + "/contents");
      const questionQuery = query(questionRef, orderByKey());
      try {
        Seterror(false);
        Setloading(true);
        const snapshot = await get(questionQuery);
        Setloading(false);
        if (snapshot.exists()) {
          Setquestions([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        Seterror(true);
        Setloading(false);
      }
    };
    fetchQuestions();
  }, [questionID]);
  return { loading, error, questions };
}
