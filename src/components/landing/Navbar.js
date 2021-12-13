import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full z-20">
        <div
          style={{ background: "#169387" }}
          className=" lg:px-20 md:px-10 py-3.5 items-center flex justify-between"
        >
          <h1 className="font-bold tracking-tight text-white text-3xl">mina</h1>
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

          <div className="lg:ml-10">
            <button
              style={{ color: "#169387" }}
              className="px-4 font-semibold py-2 bg-white rounded"
            >
              Sign up
            </button>
            <button className="border px-4 py-2 text-white font-semibold rounded ml-4">
              Log in
            </button>
          </div>
        </div>
        <div className="bg-white text-center h-7 border-gray-200 border-b w-full border">
          {/* <h1>Sub header</h1> */}
        </div>
      </div>
    </>
  );
}
