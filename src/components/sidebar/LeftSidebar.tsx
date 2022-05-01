import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ticketLinks } from "../../utils/siteLinks";

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
        {true && (
          <div className="tickets">
            <Link className=" text-white medium text-base" to="/ticket"> Tickets</Link>
            <ul className=" mt-4 ">
              {ticketLinks.map((l) => (
                <li className="">
                  <NavLink
                    to={l.path}
                    className={({ isActive }) => {
                      return `block rounded p-4 border-l-4 text-xs capitalize ${
                        isActive ? " text-moneypoint-yellow border-moneypoint-yellow bg-moneypoint-dark-blue" : " text-white border-transparent"
                      }`;
                    }}
                  >
                    {l.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default LeftSidebar;
