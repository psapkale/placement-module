import React from "react";
import Calculator from "./components/Calculator";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="bg-gray-100 w-full flex  justify-center">
      <div className="flex flex-col gap-4 items-center sm:max-w-[728px]">
        <div>
          <Calculator />
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default App;
