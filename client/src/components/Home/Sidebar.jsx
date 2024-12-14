import React from 'react'
import { IoAdd } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-full p-2 flex flex-col gap-4 py-4">
      <button className="btn-primary w-full">
        <IoAdd className="text-xl" />
        Create Hub
      </button>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2 text-slate-600 text-sm">
          {" "}
          <span className="w-6 h-6 rounded-full bg-sky-800"></span> Cinema
          Central
        </li>
        <li className="flex items-center gap-2 text-slate-600 text-sm">
          {" "}
          <span className="w-6 h-6 rounded-full bg-sky-800"></span> Cinema
          Central
        </li>
        <li className="flex items-center gap-2 text-slate-600 text-sm">
          {" "}
          <span className="w-6 h-6 rounded-full bg-sky-800"></span> Cinema
          Central
        </li>
        <li className="flex items-center gap-2 text-slate-600 text-sm">
          {" "}
          <span className="w-6 h-6 rounded-full bg-sky-800"></span> Cinema
          Central
        </li>
        <li className="flex items-center gap-2 text-slate-600 text-sm">
          {" "}
          <span className="w-6 h-6 rounded-full bg-sky-800"></span> Cinema
          Central
        </li>
      </ul>
    </div>
  );
}

export default Sidebar