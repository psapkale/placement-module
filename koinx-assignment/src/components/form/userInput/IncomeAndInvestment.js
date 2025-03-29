import React, { useState } from "react";

const IncomeAndInvestment = ({
  expense,
  setExpense,
  investmentType,
  setInvestmentType,
}) => {
  // console.log(investmentType);
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <div className="sm:p-4">
        {" "}
        <label for="expense" class="block mb-2 text-xs  text-gray-900">
          Enter your Expenses
        </label>
        <input
          type="number"
          id="expense"
          className="bg-[#EFF2F5] border text-gray-900 text-sm rounded-md  block w-full p-2.5 outline-none font-bold cursor-pointer"
          placeholder="$5000"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          required
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xs  text-gray-900">Investment Type</h3>
        <div className="flex gap-2">
          <div
            onClick={() => setInvestmentType("St")}
            className="cursor-pointer"
          >
            <div
              className={`flex border ${
                investmentType === "Lt"
                  ? "border-1 border-[#3E424A]"
                  : "border-[#0052FE] border-2"
              } border-solid  rounded-md px-1.5 sm:px-4 py-3 items-center gap-2`}
            >
              <span
                className={`font-medium  text-xs sm:text-sm ${
                  investmentType === "St" ? "text-[#0052FE]" : "text-[#3E424A]"
                }
                `}
              >
                Short Term
              </span>
              {investmentType === "St" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#0052FE] font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <div className="w-4 h-4"></div>
              )}
            </div>
            <p className="text-xs text-[#3E424A] mt-2 font-medium">
              &lt; 12 months
            </p>
          </div>
          <div
            onClick={() => setInvestmentType("Lt")}
            className="cursor-pointer"
          >
            <div
              className={`flex border ${
                investmentType === "St"
                  ? "border-1 border-[#3E424A]"
                  : "border-[#0052FE] border-2"
              } border-solid  rounded-md px-1.5 sm:px-4 py-3 items-center  gap-2`}
            >
              <span
                className={`font-medium text-xs sm:text-sm ${
                  investmentType === "Lt" ? "text-[#0052FE]" : "text-[#3E424A]"
                }`}
              >
                Long Term
              </span>
              {investmentType === "Lt" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#0052FE] font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <div className="w-4 h-4"></div>
              )}
            </div>
            <p className="text-xs text-[#3E424A] mt-2 font-medium">
              &gt; 12 months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeAndInvestment;
