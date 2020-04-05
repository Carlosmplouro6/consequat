import React, { createContext, useReducer } from "react";

const initialState = {
  category: "",
};

export const FoodContext = createContext(initialState);

export const FoodProvider = ({ children }) => {
  return (
    <FoodContext.Provider
      value={{
        category: initialState.category,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
