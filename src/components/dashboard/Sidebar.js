import React from "react";
import { Link } from "react-router-dom";
const sidelinks = [
  {
    title: "Overview",
    icon: "/assets/icons/Group 55.svg",
  },
  {
    title: "Income",
    icon: "/assets/icons/Group.svg",
  },
  {
    title: "Accounts",
    icon: "/assets/icons/Vector (1).svg",
  },
  {
    title: "Bills",
    icon: "/assets/icons/Vector (2).svg",
  },
  {
    title: "Savings",
    icon: "/assets/icons/Vector (3).svg",
  },
  {
    title: "Transactions",
    icon: "/assets/icons/Vector.svg",
  },
  {
    title: "Settings",
    icon: "/assets/icons/Vector.svg",
  },
  {
    title: "Log out",
    icon: "/assets/icons/Vector.svg",
  },
];
export default function Sidebar() {
  return <div className="min-h-screen w-1/3 bg-white border-r">
    <div className="ml-10 mt-6">
      {sidelinks.map((item,index)=>(
        <div key={index} className="flex mb-3 items-center gap-3">
          <img src={item.icon} alt="icon"/>
          <Link to="">{item.title}</Link>
        </div>
      ))}
    </div>
  </div>;
}
