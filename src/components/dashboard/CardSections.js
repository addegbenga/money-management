import React from "react";

export default function CardSections() {
  return (
    <div className="w-1/3 border-l">
      <div className="mt-6">
        <div  className="px-4">
          <h1 className="text-xl mb-3">Your Account</h1>
          <div className="bg-black h-32 bg-opacity-80 flex rounded items-center justify-center">
            <p className="text-xs text-white">You havent linked your account</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div  className="px-4">
          <h1 className="text-xl mb-3">Recent Activities</h1>
          <div className="bg-gray-200 shadow-lg rounded h-64 bg-opacity-30 border flex rounded  p-4">
            <p className="text-xs text-black text-opacity-80">You have no recent activities</p>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6">
        <div  className="px-4">
          <h1 className="text-xl mb-3">Recent Activities</h1>
          <div className="bg-[#169387] shadow-lg rounded h-64 bg-opacity-10 border flex rounded  p-4">
            <p className="text-xs text-black text-opacity-80">You have no recent activities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
