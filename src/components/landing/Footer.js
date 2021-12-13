import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="lg:px-20 md:px-10 py-10" style={{ background: "#0c7268" }}>
      <div className="pt-8 flex justify-between">
        <div className=" w-1/2 pb-10 ">
          <h1 className="lg:text-4xl text-white tracking-tight">Suscribe</h1>
          <div className="flex mt-5">
            <input
              className="grid rounded-l-full pl-4 w-full p-3"
              type="name"
              placeholder="Enter your email"
            />
            <button
              style={{ background: "#61ffef", color: "#169287" }}
              className=" bg-blue-100 px-7 font-semibold rounded-r-full"
            >
              Send
            </button>
          </div>
        </div>
        <div className=" lg:w-1/5 flex  lg:justify-between ">
          <div className="flex flex-col md:mr-3 lg:mr-0 text-white ">
            <a className="mb-4" href="#div">
              Company
            </a>
            <a href="#div">About us</a>
          </div>
          <div className="flex flex-col text-white">
            <a className="mb-4" href="#div">
              Contact us
            </a>
            <a href="#div">Faqs</a>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-24">
        <p className="text-white">&copy;Mina</p>
        <div className="text-white">
          <a className="mr-8" href="#div">
            Terms
          </a>
          <a className="mr-8" href="#div">
            Privacy
          </a>
          <a className="" href="#div">
            Legal
          </a>
        </div>
        <div style={{ color: "#169387" }} className="flex">
          <div className="h-6 flex items-center justify-center mr-4 rounded-full w-6 bg-white ">
            <AiOutlineTwitter className="" />
          </div>
          <div className="h-6 flex items-center justify-center mr-4 rounded-full w-6 bg-white ">
            <FaTelegramPlane />
          </div>
          <div className="h-6 flex items-center justify-center mr-4 rounded-full w-6 bg-white ">
            <FaFacebookF />
          </div>
          <div className="h-6 flex items-center justify-center mr-4 rounded-full w-6 bg-white ">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
}
