import { createSlice } from "@reduxjs/toolkit";

const productList = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    addInitialProductList: (state, val) => {
      state = val.payload;
      return state;
    },
  },
});

export const productListAction = productList.actions;
export const productListReducer = productList.reducer;
