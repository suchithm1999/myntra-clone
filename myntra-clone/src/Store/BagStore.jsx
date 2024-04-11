import { createSlice } from "@reduxjs/toolkit";

const Bag = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    addToBag: (state, payload) => {
      if (!state.includes(payload.payload.id)) {
        state.push(payload.payload.id);
      }
      return state;
    },
    removeFromBag: (state, payload) => {
      state = state.filter((id) => id !== payload.payload.id);
      return state;
    },
    removeAllItemsFromBag: (state) => {
      state = [];
      return state;
    },
  },
});

export const BagActions = Bag.actions;
export const BagReducers = Bag.reducer;
