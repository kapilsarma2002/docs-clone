import { TfiStar } from "react-icons/tfi";
import { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import React from "react";

const Titlebar = () => {
  const [title, setTitle] = useState("Untitled document");
  const dropdowns = [
    "File",
    "Edit",
    "View",
    "Insert",
    "Format",
    "Tools",
    "Extensions",
    "Help",
  ];

  return (
    <div
      className={`fixed m-0 flex w-screen flex-row bg-white p-0 text-center align-middle font-sans text-3xl`}
    >
      {/* icon */}
      <div className="w-16">
        <svg
          className="m-2 pl-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 54"
          width="48px"
          height="48px"
        >
          <path
            fill="#2196f3"
            d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"
          />
          <path fill="#bbdefb" d="M40 13L30 13 30 3z" />
          <path fill="#1565c0" d="M30 13L40 23 40 13z" />
          <path
            fill="#e3f2fd"
            d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"
          />
        </svg>
      </div>

      {/* options */}
      <div className="flex flex-auto flex-col">
        {/* textbox */}
        <div className="flex flex-row pt-2">
          <input
            className="h-6 w-40 rounded border-solid border-black p-2 text-lg transition duration-500 hover:border hover:duration-1000"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
          <TfiStar className="ml-1 mt-1" size="20px" />
        </div>

        {/* dropdowns */}
        <div className="h-1 text-sm">
          <div className="-ml-1 flex h-8 items-center space-x-1 text-sm text-gray-900">
            {dropdowns.map((dropdown) => (
              <div
                key={dropdown}
                className="ease hover:bg-gray-250 cursor-pointer rounded-lg px-2 transition duration-200"
              >
                {dropdown}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex h-14 flex-row-reverse align-middle">
        <div>
          <img
            className="mx-6 mt-3 h-10 w-10 rounded-full"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OesLvyzDO6AvU_hYUAT4IAHaHa%26pid%3DApi&f=1&ipt=73533af277a17e2632a62cc434b880aa7b581d787735214338dc2e5924437f39&ipo=images"
            alt="profile"
          />
        </div>
        <button className="mt-2 flex flex-row rounded-full bg-blue-200 pt-1 align-middle text-lg">
          <AiOutlineLock size="25px" className="ml-3 mt-2 pl-1" />
          <div className="m-2 pr-3">Share</div>
        </button>
      </div>
    </div>
  );
};

export default Titlebar;
