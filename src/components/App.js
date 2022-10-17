import "./assets/css/Apps.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";
import Admin from "./Admin";
import AdminRoute from "./AdminRoute";
import Layouts from "./Layouts";
import { Home, Login, Quiz, Result, Signup } from "./pages/";
import AllResults from "./pages/AllResults";
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
                <Route path="all_results" element={<AllResults />} />
                <Route path="/*" element={<AdminRoute />}>
                  <Route path="admin" element={<Admin />} />
                </Route>
              </Route>
            </Routes>
          </Layouts>
        </AuthProvider>
      </Router>
    </div>
  );
}
