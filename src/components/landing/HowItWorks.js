import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    img: "/assets/Vector (3).png",
    title: "Create",
    desc: "Create an account to plan for whatever matters to you.",
  },
  {
    img: "/assets/Vector (4).png",
    desc: "Link your accounts to Mina.  No limit to the accounts you  can link.",
    title: "Setup",
  },
  {
    img: "/assets/Group 1.png",
    desc: "Receive donations to your  cause and get acess to start  studying immediately ",
    title: "Manage",
  },
];

export default function HowItWorks() {
  return (
    <div className="secondary-bg px-5 py-20 md:px-10 lg:px-20">
      <div className="flex md:block items-center flex-col">
        <h1 className="text-4xl  xl:text-5xl mb-2 font-bold text-center md:text-left text-white">
          How it works
        </h1>
        <p className="text-lg text-black text-opacity-80 text-center text-white font-medium md:text-left text-white">
          Create your account in 3 easy steps
        </p>

        <div className="flex flex-col md:flex-row  lg:gap-10 mb-20">
          {data.map((item, index) => (
            <div key={index} className="mt-10 flex md:block items-center ">
              <figure className="border-2 rounded-full inline-block p-4 md:p-0 md:h-16 flex items-center justify-center md:w-16">
                <img className="w-8" src={item.img} alt="icon" />
              </figure>
              <div className="mt-3 ml-4">
                <h1 className="text-lg xl:text-2xl md:mb-2 font-semibold text-white">
                  {item.title}
                </h1>
                <p className="lg:text-base  text-black text-opacity-80 md:text-xs pr-20 text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <button className="text-black bg-white px-14 py-3 lg:py-4 md:py-3 rounded">
            <Link to="register">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
