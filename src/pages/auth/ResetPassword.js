import React from "react";

export default function ResetPassword() {
  return (
    <div className=" py-32 flex  justify-center  md:px-10 lg:px-20">
      <div className="  bg-white md:py-8 md:rounded  md:shadow-lg lg:w-1/2 ">
        <h1 className="secondary-text text-center mb-3 text-2xl font-semibold">
          Forgot your password?
        </h1>
        <p className="text-center text-black text-opacity-70 text-sm px-20">
          Enter your email and we will send you a link to reset your password
        </p>
        <div className="mt-10 ">
          <form className="border border-opacity-50 px-5 py-10 grid gap-4 ">
            <input
              className="border-2 md:border rounded p-3"
              type="password"
              placeholder="Email address"
            />

            <button className="secondary-bg text-white py-3 rounded mt-4">
              Request new password
            </button>
          </form>
          <div className="flex justify-center mt-7 secondary-text">
            <button>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
