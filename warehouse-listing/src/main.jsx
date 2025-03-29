import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "./redux/warehouseSlice";
import App from "./App";

const store = configureStore({
   reducer: {
      warehouses: warehouseReducer,
   },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>
);
