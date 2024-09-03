"use client";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-14 ">
      <div className="w-[90%] mx-auto flex justify-between items-center h-full">
        <h4>LOGO</h4>
        <ul className="flex items-center gap-4 ">
          <li><Link href={"/"}>home</Link></li>
          <li><Link href={"/new-user"}>create user</Link></li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          <button className="bg-blue-50 px-4 py-1 border-2 border-white rounded-lg hover:border-2 hover:border-blue-50 hover:bg-white transition duration-0">
            Login
          </button>
          <button className="bg-blue-50 px-4 py-1 border-2 border-white rounded-lg hover:border-2 hover:border-blue-50 hover:bg-white transition duration-0 ">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
