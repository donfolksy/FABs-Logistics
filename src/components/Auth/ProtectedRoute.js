import React from "react";
import { Navigate } from "react-router";

const userRoute = () => {
  const userData = localStorage.getItem("userEmail");

  if (userData) {
    return <children />;
  }
  return null;
};

export function ProtectedRoute({ children, to }) {
  let isAuth = userRoute();
  return isAuth ? children : <Navigate to={to} />;
}
