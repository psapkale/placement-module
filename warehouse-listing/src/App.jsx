import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<WarehouseList />} />
               <Route path="/warehouse/:id" element={<WarehouseDetails />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
