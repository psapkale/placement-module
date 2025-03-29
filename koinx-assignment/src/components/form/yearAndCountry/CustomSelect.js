import React, { useState } from "react";

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState("australia");
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setOptionsVisible(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-[#EFF2F5]  text-gray-900 text-xs  w-full  cursor-pointer px-2 py-2.5 sm:px-4 sm:py-2.5 outline-none flex items-center gap-8"
        onClick={() => setOptionsVisible(!isOptionsVisible)}
      >
        <div className="flex  items-center gap-2">
          <span className="w-5 h-5 rounded-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxs3WLrGe4MCAoDp47qur0a0fj5gIpQArRpXB8PoO64FDtVietfk1pdo-LjslWJ0bxSUo&usqp=CAU"
              alt="Australian Flag"
              className="object-cover"
            />
          </span>
          <span>Australia</span>
        </div>
        <div className="w-1/2 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 font-bold"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        {isOptionsVisible && (
          <div className="options border mt-14  py-0.5 ox-0.5 absolute left-0 w-full z-10 bg-[#0052FE] text-white rounded-full text-xs">
            <span
              onClick={() => handleOptionSelect("Australia")}
              className="option  cursor-pointer flex items-center justify-center"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxs3WLrGe4MCAoDp47qur0a0fj5gIpQArRpXB8PoO64FDtVietfk1pdo-LjslWJ0bxSUo&usqp=CAU"
                alt="Australian Flag"
                className="h-4 w-4 rounded-full"
              />
              <p className="ml-3">Australia</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
