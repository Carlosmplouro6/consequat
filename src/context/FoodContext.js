import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [category, setCategory] = useState("None");
  const [recepie, setRecepie] = useState("None");

  return (
    <FoodContext.Provider value={[category, setCategory, recepie, setRecepie]}>
      {children}
    </FoodContext.Provider>
  );
};
