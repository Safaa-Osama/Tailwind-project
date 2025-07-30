import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  } , []);
  

  return (
    <>
      <nav className={` bg-[#2C3E50] text-white fixed top-0 start-0 end-0 z-1 ${!scroll ? 'p-8':'p-4'} transition-all duration-500`}>
        <div className="container mx-auto flex justify-between">
          <Link className="text-xl font-bold uppercase" to={"/"}>
            start Framework
          </Link>

          <div className="links text-white">
            <ul className="flex">
              <li className="me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-1 rounded-md bg-[#1ABC9C]"
                      : "px-3 py-1 rounded-md"
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-1 rounded-md bg-[#1ABC9C]"
                      : "px-3 py-1 rounded-md"
                  }
                  to={"/portofolio"}
                >
                  Portofolio
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-1 rounded-md bg-[#1ABC9C]"
                      : "px-3 py-1 rounded-md"
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
