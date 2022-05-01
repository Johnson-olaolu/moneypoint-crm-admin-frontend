import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import ViewSingleTicket from "./ViewSingleTicket";
const  ViewAllTickets  = lazy(() => import("./ViewAllTickets")) ;


const TicketRoutes = () => {
  return (
    <>
      <Routes>
          <Route index element = {<ViewAllTickets/>}/>
          <Route path = "/ongoing/:ticketId" element = {<ViewSingleTicket/>} />
          <Route path = "/*" element ={<Navigate to="/404"/>}/>
      </Routes>
    </>
  );
};

export default TicketRoutes;