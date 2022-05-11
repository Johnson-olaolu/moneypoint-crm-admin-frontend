import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authService } from "../services/auth.service";

const PublicRoutes = ({ location }: { location?: any }): JSX.Element => {
  const isAuthenticated = authService.isAuthenticated();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/ticket" />;
};

export default PublicRoutes;
