import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCard(state, actions) {
      state.items= actions.payload;
    },
  },
});

export const cartAdd=cartSlice.actions.addToCard;
export default cartSlice;
