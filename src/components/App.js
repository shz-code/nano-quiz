import "./assets/css/Apps.css";

import React from "react";
import Layouts from "./Layouts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <Layouts>
        <Home />
        <Signup />
        <Login />
      </Layouts>
    </div>
  );
}
