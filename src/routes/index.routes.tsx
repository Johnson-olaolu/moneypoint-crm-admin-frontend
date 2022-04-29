import React from "react";
import { Navigate, Route, Routes } from "react-router";
import AppLayout from "../components/layout/AppLayout";
import NotFound from "../pages/404";
import AuthRoutes from "../pages/auth";
import ProfileRoutes from "../pages/profile";
import TicketRoutes from "../pages/tickets";
import PrivateRoutes from "./Private.routes";
import PublicRoutes from "./Public.routes";

const IndexRoutes = () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="" element={<PublicRoutes />}>
          <Route path="/" element={<Navigate to="auth/login" />} />
          <Route path="auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/404" />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<AppLayout />}>
            <Route path="ticket/*" element={<TicketRoutes />} />
            <Route path="profile/*" element={<ProfileRoutes />} />
          </Route>
        </Route>
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default IndexRoutes;
