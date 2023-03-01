import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCard(state, actions) {
      state.items = actions.payload;
    },
    createCart(state, actions) {
      let theItems = state.items as any;
      theItems.push(actions.payload);
      state.items = theItems;
      state.totalQuantity += 1;
    },
    deleteCart(state, actions) {
      state.items = state.items.filter(
        (item: any) => item.id !== Number(actions.payload.id)
      );
      state.totalQuantity -= 1;
    },
    updateCart(state, actions) {
      let theItems = state.items as any;
      const finded = theItems.findIndex(
        (item: any) => item.id === Number(actions.payload.id)
      );
      if (finded !== -1) {
        theItems[finded] = actions.payload;
        state.items = theItems;
      }
    },
    calculateTotal(state) {
      state.totalQuantity = state.items.length;
    },
  },
});

export const cartAdd = cartSlice.actions.addToCard;
export const calculateTotal = cartSlice.actions.calculateTotal;
export const createCart = cartSlice.actions.createCart;
export const deleteCart = cartSlice.actions.deleteCart;
export const updateCart = cartSlice.actions.updateCart;
export default cartSlice;
