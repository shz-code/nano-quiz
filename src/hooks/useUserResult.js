import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useUserResult(uniID) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const resultRef = ref(db, `results/${uniID}`);
      const resultQuery = query(resultRef, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(resultQuery);
        setLoading(false);
        if (snapshot.exists) {
          setResult([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, [uniID]);
  return {
    result,
    loading,
    error,
  };
}
