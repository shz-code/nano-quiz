import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute() {
  const auth = useAuth();
  const { currentUser } = auth;
  return currentUser.photoURL === "21203010" ? <Outlet /> : <Navigate to="/" />;
}
