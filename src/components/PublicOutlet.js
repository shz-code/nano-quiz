import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicOutlet() {
  const auth = useAuth();
  const { currentUser } = auth;
  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}
