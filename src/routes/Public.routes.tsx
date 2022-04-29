import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({location} : {location? : any}) : JSX.Element => {
  const isAuthenticated = false;
  return isAuthenticated ?  <Navigate to="/homepage" state={ { from : location }} /> : <Outlet /> ;
};

export default PublicRoutes;