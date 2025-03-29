import React, { useState, useEffect } from "react";
import SelectYearCountry from "./form/yearAndCountry/SelectYearCountry";
import IncomeAndInvestment from "./form/userInput/IncomeAndInvestment";
import AnnualIncomeAndTaxRate from "./form/userInput/AnnualIncomeAndTaxRate";
import Price from "./form/userInput/Price";
import GainsAndDiscount from "./form/gainAndDiscount/GainsAndDiscount";
import NetGainAndTaxDisplay from "./form/netGainAndTaxDisplay/NetGainAndTaxDisplay";
import { getCapitalGain } from "./logics/getCapitalGain";
import { getDiscount } from "./logics/getDiscount";
import { getNetCapitalGain } from "./logics/getNetCapitalGain";
import { getTaxToBePaid } from "./logics/getTaxToBePaid";
import CustomSelect from "./form/yearAndCountry/CustomSelect";

const Calculator = () => {
  const [costPrice, setCostPrice] = useState();
  const [sellPrice, setSellPrice] = useState();
  const [expense, setExpense] = useState();
  const [investmentType, setInvestmentType] = useState("Lt");
  const [annualIncome, setAnnualIncome] = useState(0);
  const [taxRate, setTaxRate] = useState("0%");
  const [capitalGain, setCapitalGain] = useState();
  const [discount, setDiscount] = useState();
  const [netCapitalGain, setNetCapitalGain] = useState();
  const [tax, setTax] = useState();

  useEffect(() => {
    if (
      costPrice !== undefined &&
      sellPrice !== undefined &&
      expense !== undefined
    ) {
      // Calculate capital gain
      const calculatedCapitalGain = getCapitalGain({
        costPrice,
        sellPrice,
        expense,
      });
      setCapitalGain(calculatedCapitalGain);

      // Calculate discount
      const calculatedDiscount = getDiscount({
        investmentType,
        capitalGain: calculatedCapitalGain,
      });
      setDiscount(calculatedDiscount);

      // Calculate net capital gain
      const calculatedNetCapitalGain = getNetCapitalGain({
        capitalGain: calculatedCapitalGain,
        discount: calculatedDiscount,
      });
      setNetCapitalGain(calculatedNetCapitalGain);

      // Calculate tax
      const calculatedTax = getTaxToBePaid({
        netCapitalGain: calculatedNetCapitalGain,
        annualIncome,
      });
      setTax(calculatedTax);
    }
  }, [costPrice, sellPrice, expense, investmentType, annualIncome]);

  return (
    <div className="bg-white rounded-lg  mt-5 flex flex-col items-center  text-[#0F1629] border p-16  container ">
      <h3 className="font-bold text-center text-xl sm:text-2xl w-full mb-2">
        Free Crypto Tax Calculator Australia
      </h3>
      <div className="flex flex-col justify-center items-center">
        <SelectYearCountry />
        {/* <CustomSelect /> */}
        <hr className="border-1 border-solid border-[#C9CFDD99] w-full mt-2 sm:mt-0" />
        <Price
          costPrice={costPrice}
          setCostPrice={setCostPrice}
          sellPrice={sellPrice}
          setSellPrice={setSellPrice}
        />
        <IncomeAndInvestment
          expense={expense}
          setExpense={setExpense}
          investmentType={investmentType}
          setInvestmentType={setInvestmentType}
        />
        <AnnualIncomeAndTaxRate
          annualIncome={annualIncome}
          setAnnualIncome={setAnnualIncome}
          taxRate={taxRate}
          setTaxRate={setTaxRate}
        />

        {investmentType === "Lt" && (
          <GainsAndDiscount capitalGain={capitalGain} discount={discount} />
        )}
        <NetGainAndTaxDisplay netCapitalGain={netCapitalGain} tax={tax} />
      </div>
    </div>
  );
};

export default Calculator;
