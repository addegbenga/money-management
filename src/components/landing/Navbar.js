import React, { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Dropdown isOpen={isOpen} closeModal={closeModal} />
      <div className="fixed w-full z-20">
        <div
          style={{ background: "#169387" }}
          className=" lg:px-20 px-5 md:px-10 py-3.5 items-center flex justify-between"
        >
          <h1 className="font-bold tracking-tight text-white text-3xl">
            <Link to="">mina</Link>
          </h1>
          <div className="text-white items-center hidden lg:flex justify-between ">
            <div>
              <a className="lg:mr-8" href="#div">
                Features
              </a>
              <a className="lg:mr-8" href="href">
                How it Works
              </a>
              <a className="lg:mr-4" href="#div">
                Contact us
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:ml-10">
            <button
              style={{ color: "#169387" }}
              className="px-4 font-semibold py-2 bg-white rounded"
            >
              <Link to="register"> Sign up</Link>
            </button>
            <button className="border px-4 py-2 text-white font-semibold rounded ml-4">
              <Link to="login"> Login</Link>
            </button>
          </div>
          <button onClick={openModal} className=" text-white lg:hidden">
            <AiOutlineAlignRight size={24} />
          </button>
        </div>
        <div className="bg-white hidden lg:block text-center h-7 border-gray-200 border-b w-full border">
          {/* <h1>Sub header</h1> */}
        </div>
      </div>
    </>
  );
}
