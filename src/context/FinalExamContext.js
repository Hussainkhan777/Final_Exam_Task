import React, { createContext, useContext, useState } from "react";
import { APIs } from "../const/APIs";
const MyExamContext = createContext();

export const MyExamInformationProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);

  // states
  return (
    <MyExamContext.Provider
      value={{
        Products,
        setProducts,
        Cart,
        setCart,
      }}
    >
      {children}
    </MyExamContext.Provider>
  );
};

export const useExamContext = () => {
  const context = useContext(MyExamContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
