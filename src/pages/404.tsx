import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className=" min-h-screen flex justify-center items-center moneypoint-blue-gradient">
      <div className=" text-center ">
        <p className=" text-white font-bold text-8xl">404 - Not Found</p>
        <Link to="/" className=" text-white mt-5 flex items-center gap-x-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
