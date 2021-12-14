import React from "react";
import { BsBell } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="primary-bg lg:px-20 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mina</h1>
        <div className="grid w-1/2">
          <input className="w-full px-3 rounded-full py-1.5" type="search" placeholder="Search" />
        </div>
        <div className="flex gap-5 items-center">
          <BsBell />
          <figure className="h-10 w-10 bg-blue-300 rounded-full">
              {/* <img src="" alt="icon"/> */}
          </figure>
        </div>
      </div>
    </div>
  );
}
