import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useUserProfile(uid) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const profileRed = ref(db, `userProfile/${uid}`);
      const profileQuery = query(profileRed, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(profileQuery);
        setLoading(false);
        if (snapshot.exists) {
          setProfile([...Object.values(snapshot.val())]);
        }
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, [uid]);
  return {
    profile,
    loading,
    error,
  };
}
