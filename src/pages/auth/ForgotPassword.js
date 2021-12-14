import React from "react";

export default function ForgotPassword() {
  return (
    <div className=" py-32 flex  justify-center  md:px-10 lg:px-20">
      <div className="  bg-white w-full md:py-8 md:rounded  md:shadow-lg lg:w-1/2 ">
        <h1 className="secondary-text text-center mb-3 text-2xl font-semibold">
          Create your new password
        </h1>
        <p className="text-center text-black text-opacity-70 text-sm px-20">
          {" "}
          Make sure your new password must be different from your previous used
          password
        </p>
        <div className="mt-10">
          <form className="border-t border-opacity-50 px-5 py-10 grid gap-4 ">
            <input
              className="border  border-gray-400 md:border rounded p-3"
              type="password"
              placeholder="Password"
            />
            <input
              className="border  border-gray-400 md:border rounded p-3"
              type="password"
              placeholder="Password"
            />

            <button className="secondary-bg text-white py-3 rounded mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
