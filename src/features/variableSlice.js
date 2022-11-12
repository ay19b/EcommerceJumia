import { variablesState } from "../Library/variableState";
import { createSlice } from "@reduxjs/toolkit";

// Create variables slice
export const variablesSlice = createSlice({
  name: "variables",
  initialState: variablesState,
  reducers: {
    // Actions
    // Add Item to totalItems
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    // Set Total Amount
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
  
});

export const selectTotalItems = (state) => state.variables.totalItems;

export const selectTotalAmount = (state) => state.variables.totalAmount;

export const { setTotalItems, setTotalAmount } = variablesSlice.actions;

export default variablesSlice.reducer;