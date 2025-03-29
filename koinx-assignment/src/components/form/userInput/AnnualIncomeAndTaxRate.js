import React from "react";
import { getTaxRate } from "../../logics/getTaxRate";

const AnnualIncomeAndTaxRate = ({
  annualIncome,
  setAnnualIncome,
  taxRate,
  setTaxRate,
}) => {
  const handleIncomeChange = (e) => {
    const newAnnualIncome = e.target.value;
    setAnnualIncome(newAnnualIncome);

    const newTaxRate = getTaxRate({ annualIncome: newAnnualIncome });
    setTaxRate(newTaxRate);
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <div className="p-4">
        <label for="expense" class="block mb-2 text-xs  text-gray-900">
          Select Your Annual Income
        </label>
        <select
          id="income"
          value={annualIncome}
          onChange={handleIncomeChange}
          className="bg-[#EFF2F5] border  text-gray-900 text-sm rounded-md  block w-full p-2.5 font-semibold outline-none cursor-pointer"
        >
          <option value="0" selected>
            {" "}
            $0 - $18,200
          </option>
          <option value="18"> $18,201 - $45,000</option>
          <option value="45">$45,001 - $120,000</option>
          <option value="120">$120,001 - $180,000</option>
          <option value="180">$180,001+ </option>
        </select>
      </div>

      <div className="flex flex-row sm:flex-col  sm:justify-center text-gray-900   w-full p-4 outline-none mt-2">
        <p className="text-xs">Tax Rate :</p>
        <p className="text-xs ml-2 sm:ml-0">{taxRate}</p>
      </div>
    </div>
  );
};

export default AnnualIncomeAndTaxRate;
