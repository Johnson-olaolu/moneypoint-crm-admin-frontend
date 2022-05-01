import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const [paths, setPaths] = useState<string[]>([]);
  useEffect(() => {
    const pathArray = location.pathname.split("/");
    pathArray.shift();
    setPaths(pathArray);
  }, [location]);

  const createPath = (index : number) => {
      const path = paths.slice(0, index + 1)
      return path.reduce((a, b) => a + "/" + b, "")
  }
  return (
    <div className=" mb-6">
      <ul className=" flex items-center">
        {paths.map((path, index) => (
          <li key={index} className=" flex items-center gap-1 ml-1 ">
            {index !== 0 && (
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8.81667L3.81667 5L0 1.175L1.175 0L6.175 5L1.175 10L0 8.81667Z" fill="#AAAAAA" />
              </svg>
            )}
            {index !== paths.length - 1? (
              <Link to={createPath(index)} className=" text-sm text-gray-400 capitalize">
              {path}
            </Link>
            ) : (
              <span  className=" text-sm text-gray-800 capitalize">
                {path}
              </span>
            )}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
