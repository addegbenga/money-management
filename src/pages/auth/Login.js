import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" py-32 flex  justify-center  md:px-10 lg:px-20">
      <div className=" bg-white w-full md:py-8 md:rounded  md:shadow-lg lg:w-1/2 ">
        <h1 className="secondary-text text-center text-2xl font-semibold">
          Sign in
        </h1>
        <div className="mt-10">
          <form className="border-t border-opacity-50 px-5 py-10 grid gap-4 ">
            <input
              className="border  border-gray-400 md:border rounded p-3"
              type="text"
              placeholder="Email address"
            />
            <input
              className="border border-gray-400 md:border rounded p-3"
              type="password"
              placeholder="Password"
            />
            <span className="primary-text text-center">
              <Link to="../reset-password"> Forgot your password?</Link>
            </span>

            <button className="secondary-bg text-white py-3 rounded mt-4">
              Login your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
