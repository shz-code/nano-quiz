import "./assets/css/Apps.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";
import Layouts from "./Layouts";
import { Home, Login, Quiz, Result, Signup } from "./pages/";

export default function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layouts>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/quiz" element={<Quiz />} />
              <Route exact path="/result" element={<Result />} />
            </Routes>
          </Layouts>
        </AuthProvider>
      </Router>
    </div>
  );
}
