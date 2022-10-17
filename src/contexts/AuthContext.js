import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [loading, Setloading] = useState(true);
  const [currentUser, SetcurrentUser] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const authChange = onAuthStateChanged(auth, (user) => {
      SetcurrentUser(user);
      Setloading(false);
    });

    return authChange;
  }, []);

  const SetProfile = async (user, username, universityID) => {
    const db = getDatabase();
    const profileRef = ref(db, "userProfile/");
    try {
      await update(profileRef, {
        [user.uid]: {
          name: username,
          totalCorrect: 0,
          totalQuestionsAttempt: 0,
          totalQuizAttempt: 0,
          uniID: universityID,
        },
      });
    } catch (err) {
      console.log("There was an error");
    }
  };

  const signup = async (email, password, username, universityID) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: universityID,
    });
    SetcurrentUser({ ...auth.currentUser });
    SetProfile(auth.currentUser, username, universityID);
  };

  const login = async (email, password) => {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const values = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {" "}
      {!loading && children}{" "}
    </AuthContext.Provider>
  );
}
