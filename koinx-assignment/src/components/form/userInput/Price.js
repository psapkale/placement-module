import React from "react";

const Price = ({ costPrice, setCostPrice, sellPrice, setSellPrice }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <div className="py-2  sm:p-4">
        {" "}
        <label for="cost_price" class="block mb-2 text-xs  text-gray-900">
          Enter purchase price of Crypto
        </label>
        <input
          type="number"
          id="cost_price"
          className="bg-[#EFF2F5] border text-gray-900 text-sm rounded-md  block w-full p-2.5 outline-none font-bold cursor-pointer"
          placeholder="$5000"
          value={costPrice}
          onChange={(e) => setCostPrice(e.target.value)}
          required
        />
      </div>
      <div className="py-2  sm:p-4">
        <label for="sale_price" class="block mb-2 text-xs  text-gray-900">
          Enter sale price of Crypto
        </label>
        <input
          type="number"
          id="sale_price"
          className="bg-[#EFF2F5] border text-gray-900 text-sm rounded-md  block w-full p-2.5 outline-none font-bold cursor-pointer"
          placeholder="$5000"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default Price;
