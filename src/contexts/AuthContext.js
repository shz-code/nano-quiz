import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [loading, Setloading] = useState(true);
  const [currentUser, SetcurrentUser] = useState("Shanto");

  useEffect(() => {
    const auth = getAuth();
    const authChange = onAuthStateChanged(auth, (user) => {
      SetcurrentUser(user);
      Setloading(false);
    });

    return authChange;
  }, []);

  const signup = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
    // SetcurrentUser({ ...auth.currentUser });
  };

  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
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
