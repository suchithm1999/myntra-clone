import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "./ProductListStore";
import { BagReducers } from "./BagStore";

const store = configureStore({
  reducer: {
    productList: productListReducer,
    Bag: BagReducers,
  },
});

export default store;
