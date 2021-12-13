import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Testimonials() {
  return (
    <div
      style={{ background: "rgba(22, 147, 135, 0.05)" }}
      className="lg:px-20 md:px-10 py-20"
    >
      <div className="mb-20">
        <h1 className="text-4xl mb-2 secondary-text font-semibold">
          Testimonials
        </h1>
        <p className="text-lg">
          Our Customers are always right, hear what they have to say.
        </p>
      </div>

      <div className="flex items-center relative justify-center">
        <button className="absolute left-0 hidden lg:flex h-20 w-20  items-center justify-center rounded-full border text-black">
          <AiOutlineArrowLeft size={20} />
        </button>
        <button className="absolute right-0 h-20 hidden lg:flex  justify-center items-center w-20 rounded-full border">
          <AiOutlineArrowRight size={20} />
        </button>
        <div className="max-w-md">
          <p className="text-xl mb-6">
            This app has helped me keep track of my finances. i can view and
            print my financial transactions record instantly on the go at no
            extra cost.
          </p>
          <span>
            -Tamara Kimani,
            <br /> Product Designer
          </span>
        </div>
        <figure>
          <img src="/assets/Rectangle 10.png" alt="testimonial" />
        </figure>
      </div>
    </div>
  );
}
