import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Simple setup",
    desc: " You can create an account and set up instantly in 3 easy steps.",
    img: "/assets/Vector.png",
  },
  {
    title: "Secure",
    desc: " Our Trust & Safety team work around the clock to protect you against fraud.",
    img: "/assets/Vector (1).png",
  },
  {
    title: "Track your Spending",
    desc: " Stay on top of your finances by seeing where your money comes and goes.",
    img: "/assets/Vector (2).png",
  },
];

const data2 = [
  {
    title: "High Visibility For all Your  Funds in One Place",
    desc: " See where all your money goes by easily adding your cash, credit cards, investments, and bills.",
    img: "/assets/Finance-cuate 1.svg",
  },
  {
    title: "Set Goals, Save Time",
    desc: " Improve your spending habits with custom goals that keep you going. Save for a home, crush debt, and prepare for the future.",
    img: "/assets/Wallet-cuate 1.svg",
  },
];
export default function Features() {
  return (
    <div className="py-20 bg-gray-100 bg-opacity-30 px-5  md:px-10 lg:px-20 ">
      <div>
        <h1 className="text-4xl primary-text text-center md:text-left font-semibold mb-2">
          Features
        </h1>
        <p className="md:text-xl text-base text-center md:text-left font-semibold">
          Here are some of the interesting features
        </p>
        <div className="mt-14 flex flex-col md:flex-row md:gap-5 lg:gap-20">
          {data.map((item, index) => (
            <div key={index} className="flex mb-8 md:mb-0 lg:items-center">
              <figure>
                <img src={item.img} alt="icon" />
              </figure>
              <div className="ml-2.5">
                <h1 className="text-xl font-semibold text-black text-opacity-80">
                  {item.title}
                </h1>
                <p className="md:text-sm lg:text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:gap-10  items-center  ">
          {data2.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? " flex-row-reverse" : ""
              } flex flex-col md:flex-row gap-20 mb-14 md:md-0 items-center`}
            >
              <div className="lg:max-w-md flex md:block flex-col items-center ">
                <h1 className="lg:text-4xl text-2xl text-center md:text-left px-8 md:px-0 md:text-2xl  secondary-text mb-3 tracking-tight font-semibold">
                  {item.title}
                </h1>
                <p className="lg:text-lg text-center md:text-left md:text-sm">
                  {item.desc}
                </p>
                <button className="text-white secondary-bg px-12 mt-6 py-3 rounded md:py-2 lg:py-3">
                  {" "}
                  <Link to="register">Get Started</Link>
                </button>
              </div>
              <figure>
                <img className="w-11/12" src={item.img} alt="svg" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
