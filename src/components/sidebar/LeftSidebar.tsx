import React from "react";
import { NavLink } from "react-router-dom";
import { siteLinks } from "../../utils/siteLInks";

const LeftSidebar = () => {
  return (
    <section className=" h-full">
      <nav
        style={{
          backgroundImage: `url(${require("../../assets/images/left-sidebar-bg.svg").default})`,
          backgroundColor: "rgba(3, 97, 240, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" h-full rounded-lg overflow-y-auto py-8 px-3"
      >
        <h2 className=" text-white medium text-base"> User Role</h2>
        <ul className=" mt-7 ">
          {siteLinks.map((l) => (
            <li className="">
              <NavLink
                to={l.path}
                className={({ isActive }) => {
                  return `block rounded p-4 border-l-4 text-xs capitalize ${isActive ? " text-moneypoint-yellow border-moneypoint-yellow bg-moneypoint-dark-blue" : " text-white border-transparent"}`;
                }}
              >{l.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default LeftSidebar;
