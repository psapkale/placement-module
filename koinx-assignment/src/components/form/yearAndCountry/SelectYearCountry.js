import React from "react";
import CustomSelect from "./CustomSelect";

const SelectYearCountry = () => {
  return (
    <div className="flex  py-2 items-center gap-2 sm:gap-4 sm:p-4 ">
      <div className="flex sm:flex-row flex-col gap-2">
        <p className="text-[#0F1629] text-xs  flex items-center justify-center">
          Financial Year
        </p>
        <div>
          <div className="bg-[#EFF2F5] rounded-md">
            <select
              id="countries"
              class="bg-[#EFF2F5]  text-gray-900 text-xs  block w-full  px-4 py-2.5 sm:px-8 sm:py-2.5 cursor-pointer outline-none"
            >
              <option selected>FY 2023-24</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 ">
        <p className="text-[#0F1629] text-xs  flex items-center justify-center">
          Country
        </p>
        <div>
          <div className="bg-[#EFF2F5] rounded-md ">
            {/* <select
              id="countries"
              class="bg-[#EFF2F5]  text-gray-900 text-xs  block w-full px-4 py-2.5 sm:px-8 sm:py-2.5 cursor-pointer outline-none"
            >
              <option selected>
                <div>
                  <span>
                    <img src="" alt="" className="w-4 h-4 rounded-full" />
                  </span>
                  <span>Australia</span>
                </div>
              </option>
            </select> */}
            <CustomSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectYearCountry;
