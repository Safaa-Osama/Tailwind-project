import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
const scrollFunction = ()=> setScrolled(scrollY>50)
window.addEventListener('scroll', scrollFunction)``
  }, [])
  

  return (
    <>
      <nav className=" bg-[#2C3E50] text-white p-8 fixed top-0 start-0 end-0 z-1">
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
