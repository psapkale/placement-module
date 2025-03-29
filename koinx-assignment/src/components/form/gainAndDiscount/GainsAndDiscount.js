import React from "react";

const GainsAndDiscount = ({ capitalGain, discount }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <div className="p-4">
        {" "}
        <p className="block mb-2 text-xs  text-gray-900">
          Capital gains amount
        </p>
        <div className="bg-[#EFF2F5] border text-gray-900 text-sm rounded-md  block w-full p-2.5 outline-none font-bold">
          ${capitalGain ? capitalGain : " --"}
        </div>
      </div>
      <div className="p-4">
        {" "}
        <p className="block mb-2 text-xs  text-gray-900">
          Discount for long term gains
        </p>
        <div className="bg-[#EFF2F5] border text-gray-900 text-sm rounded-md  block w-full p-2.5 outline-none font-bold">
          ${discount ? discount : " --"}
        </div>
      </div>
    </div>
  );
};

export default GainsAndDiscount;
