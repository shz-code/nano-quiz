import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAllRecords() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [records, setRecords] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const resultsRef = ref(db, "userRecords/");
      const appInfoRef = ref(db, "appInfo/");
      const resultQuery = query(resultsRef, orderByKey());
      const appInfoQuery = query(appInfoRef, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapshot1 = await get(resultQuery);
        const snapshot2 = await get(appInfoQuery);
        setLoading(false);
        if (snapshot1.exists) {
          setRecords([...Object.values(snapshot1.val())]);
        }
        if (snapshot2.exists) {
          setInfo([...Object.values(snapshot2.val())]);
        }
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return {
    records,
    info,
    loading,
    error,
  };
}
