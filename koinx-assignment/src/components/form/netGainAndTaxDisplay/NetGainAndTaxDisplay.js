import React from "react";

const NetGainAndTaxDisplay = ({ netCapitalGain, tax }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
      <div className="p-4">
        <div className="p-4 w-full bg-[#EBF9F4] flex flex-col items-center justify-center rounded-md">
          <p className="text-xs text-gray-900">Net Capital gains tax amount</p>
          <span className="font-bold text-[#0FBA83] text-lg">
            $ {netCapitalGain ? netCapitalGain : " --"}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="p-4 w-full bg-[#EBF2FF] flex flex-col items-center justify-center rounded-md">
          <p className="text-xs text-gray-900">The tax you need to pay*</p>
          <span className="font-bold text-[#0141CF] text-lg">
            $ {tax ? tax : " --"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NetGainAndTaxDisplay;

// bg-[#EBF9F4] flex flex-col items-center justify-center gap-2

// bg-[#EBF2FF] flex flex-col items-center justify-center gap-2
