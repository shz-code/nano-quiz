import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAppInfo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const appInfoRef = ref(db, "appInfo/");
      const appInfoQuery = query(appInfoRef, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(appInfoQuery);
        setLoading(false);
        if (snapshot.exists) {
          setInfo([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return {
    info,
    loading,
    error,
  };
}
