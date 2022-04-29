import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
const  ViewAllTickets  = lazy(() => import("./ViewAllTickets")) ;


const TicketRoutes = () => {
  return (
    <>
      <Routes>
          <Route index element = {<ViewAllTickets/>}/>
          <Route path = "/*" element ={<Navigate to="/404"/>}/>
      </Routes>
    </>
  );
};

export default TicketRoutes;