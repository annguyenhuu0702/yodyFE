import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = action.payload;
      const newCarts = [...state.carts];
      const index = newCarts.findIndex((item) => item.id === cartItem.id);
      if (index === -1) {
        newCarts.push(cartItem);
      } else {
        newCarts[index].quantity += cartItem.quantity;
      }
      state.carts = newCarts;
    },
    getCartByUser: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { addToCart, getCartByUser } = cartSlice.actions;
export default cartSlice.reducer;
