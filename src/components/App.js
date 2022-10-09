import "./assets/css/Apps.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";
import Layouts from "./Layouts";
import { Home, Login, Quiz, Result, Signup } from "./pages/";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";

export default function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layouts>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<PublicOutlet />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="/*" element={<PrivateOutlet />}>
                <Route path="quiz/:id" element={<Quiz />} />
                <Route path="result/:id" element={<Result />} />
              </Route>
            </Routes>
          </Layouts>
        </AuthProvider>
      </Router>
    </div>
  );
}
