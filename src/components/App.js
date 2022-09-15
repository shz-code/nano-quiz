import "./assets/css/Apps.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <Router>
        <Layouts>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </Layouts>
      </Router>
    </div>
  );
}
