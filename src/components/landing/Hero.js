import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="pt-20  px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row  justify-between items-center">
        <div className="mt-14 lg:block  flex flex-col items-center">
          <h1 className=" xl:text-[4.1rem] text-4xl text-center lg:text-left md:text-4xl xl:leading-[3.5rem] secondary-text  tracking-tighter font-black">
            Money management <br />
            for smart people.
          </h1>
          <p className=" text-black text-opacity-80 max-w-md md:max-w-md text-sm lg:max-w-xl xl:max-w-xl text-center lg:text-left my-5 md:text-base xl:text-xl lg:text-lg mb-8 text-opacity-80">
            High visibility for all your funds, in one place. Set goals, Save
            time, Save for rent, fees or leisure.
            <br /> Leverages mono connect, so you can be certain that your data
            is secure..
          </p>
          <div className="flex  gap-5">
            <button className="text-white px-4 flex items-center md:px-10 font-semibold secondary-bg rounded py-4">
              {" "}
              <Link to="register">Get started with mina</Link>
              <BsArrowRightShort color="white" size={24} />
            </button>
            <button className="text-black hidden md:flex flex px-2 items-center text-opacity-80  md:px-4 font-semibold bg-gray-200 rounded py-4">
              {" "}
              <Link to="register">Contact us</Link>
              <BsArrowRightShort className="text-black" size={24} />
            </button>
          </div>
        </div>

        <div className="relative md:left-14 ">
          <figure>
            <img
              className="md:w-11/12 "
              //   style={{ width: "600px", height: "600px" }}
              src="/assets/Setup-amico 1.svg"
              alt="hero-svg"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
