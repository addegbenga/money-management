import React from "react";

const data = [
  {
    img: "/assets/Vector (3).png",
    title: "Create",
    desc: "Create an account to plan for whatever matters to you.",
  },
  {
    img: "/assets/Group 1.png",
    desc: "Receive donations to your  cause and get acess to start  studying immediately ",
    title: "Manage",
  },
  {
    img: "/assets/Vector (4).png",
    desc: "Link your accounts to Mina.  No limit to the accounts you  can link.",
    title: "Setup",
  },
];

export default function HowItWorks() {
  return (
    <div className="secondary-bg py-20 md:px-10 lg:px-20">
      <div>
        <h1 className="text-4xl mb-2 font-bold text-white">How it works</h1>
        <p className="text-lg text-white">
          Create your account in 3 easy steps
        </p>

        <div className="flex lg:gap-10 mb-20">
          {data.map((item, index) => (
            <div key={index} className="mt-10 ">
              <figure className="border-2 rounded-full inline-block h-16 flex items-center justify-center w-16">
                <img className="w-8" src={item.img} alt="icon" />
              </figure>
              <div className="mt-3">
                <h1 className="text-lg mb-2 font-semibold text-white">
                  {item.title}
                </h1>
                <p className="lg:text-base md:text-xs pr-20 text-white">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <button className="text-black bg-white px-14 lg:py-4 md:py-3 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
