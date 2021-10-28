import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center">
        <div className="
        w-2/3 font-lato flex flex-row justify-between 
        items-center list-none p-3 text-lgs 
        text-gray-400 font-bold">
          {/* <ul > */}
          <li>
            <Link to="/" className="hover:text-yellow-200 transition duration-300">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-yellow-200 transition duration-300">
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="font-specialElite text-3xl text-black">
              Nanas Kitchen
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-200 transition duration-300">
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-200 transition duration-300">
              <span>Contact Us</span>
            </Link>
          </li>
          {/* </ul> */}
        </div>
      </nav>
    </>
  );
}
