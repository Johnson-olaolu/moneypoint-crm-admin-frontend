import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () : JSX.Element => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;