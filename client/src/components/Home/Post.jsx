import React from 'react'
import { IoChevronUpCircle } from "react-icons/io5";
import { IoChevronDownCircle } from "react-icons/io5";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoRepeat } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Post = () => {
  return (
    <div className="w-full bg-white rounded-md p-6 flex flex-col gap-4 border">
      <div className="flex gap-4 items-center">
        <div className="w-8 h-8 rounded-full bg-zinc-500"></div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-slate-700">
            Mubasshir Farooqui
            <span className="text-sm font-thin ml-4">36m</span>
          </p>
          <p className="text-xs text-gray-400">Works at BCCI</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className=" font-semibold">
          what is the difference between React and Angular
        </p>
        <p className="text-sm text-gray-700">
          I want to understand the key differences between React and Angular
          frameworks.
        </p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <button className="border px-4 py-1 rounded-md text-slate-600 bg-slate-200">
            <IoChevronUpCircleOutline />
          </button>
          <button className="border px-4 py-1 rounded-md text-slate-600 bg-slate-200">
            <IoChevronDownCircleOutline />
          </button>
        </div>
        <div className="flex gap-2">
          <p className="border px-4 py-1 rounded-md text-slate-600 bg-slate-200">
            <IoRepeat />
          </p>
          <p className="border px-4 py-1 rounded-md text-slate-600 bg-slate-200">
            <IoChatboxEllipsesOutline />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post