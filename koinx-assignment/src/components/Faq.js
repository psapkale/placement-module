import React from "react";
import faqData from "../faq/faqData";

const Faq = () => {
  //   console.log(faqData);
  return (
    <div className="bg-white rounded-lg  mt-5  text-[#0F1629] flex flex-col  p-16 ">
      <h3 className="font-bold text-xl w-full mb-2 sm:text-left">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col justify-center items-center my-4">
        {faqData.map((curr, ind) => {
          return (
            <div className="mb-8" key={curr.id}>
              <div className="flex items-start gap-2 font-bold text-gray-900 text-lg">
                <span>{ind + 1}.</span>
                <p>{curr.heading}</p>
              </div>
              <div className="text-gray-900 mt-2">
                <p>{curr.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
