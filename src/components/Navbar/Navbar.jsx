import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = ({from}) => {
  const links = (
    <>
      <li>
        <NavLink to={`/`}>
          Home
        </NavLink>
      </li>
      <li>
        <Link>Destination</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="flex flex-col w-full text-white">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            <img src="/logo.png" alt="" className="h-full w-full" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className={`${from==1?'form-control mx-3':'hidden'}`}>
            <SearchBox/>
          </div>
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#F9A51A] text-black hover:bg-white" href="/login">Login</a>
        </div>
      </div>
      <div className="form-control flex lg:hidden w-full">
        <SearchBox/>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  from: PropTypes.number,
};

export default Navbar;
