import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useUserProfiles() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const profileRed = ref(db, `userProfile/`);
      const profileQuery = query(profileRed, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(profileQuery);
        setLoading(false);
        if (snapshot.exists) {
          setProfiles([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return {
    profiles,
    loading,
    error,
  };
}
