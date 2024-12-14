import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { IoPodium } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-screen p-4 bg-white border-b">
      <div className="w-full text-slate-700 flex justify-between items-center">
        <div>
          <h1 className="font-curly text-2xl font-semibold text-sky-500">
            Querly
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 items-center">
            <li className="nav-icon">
              <IoHome />
            </li>
            <li className="nav-icon">
              <IoNewspaper />
            </li>
            <li className="nav-icon">
              <IoPodium />
            </li>
            <li className="nav-icon">
              <IoNotificationsSharp />
            </li>
            <li className="border rounded-lg bg-white p-2 flex items-center gap-2">
              <IoSearch />
              <input className="bg-transparent" placeholder="Search" />
            </li>
            <li className="w-8 h-8 rounded-full bg-slate-400"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar