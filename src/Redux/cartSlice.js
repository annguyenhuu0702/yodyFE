import { createSlice } from "@reduxjs/toolkit";

const checkCart = JSON.parse(localStorage.getItem("mickey:carts"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartsLocal: checkCart ? checkCart : [],
    carts: [],
    message: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = action.payload;
      const newCarts = [...state.carts];
      const index = newCarts.findIndex(
        (item) => item.id + "" === cartItem.id + ""
      );
      if (index === -1) {
        newCarts.push(cartItem);
      } else {
        newCarts[index].quantity = cartItem.quantity;
      }
      state.carts = newCarts;
    },

    addToCartLocalStorage: (state, action) => {
      const cartItem = action.payload;
      const newCarts = [...state.cartsLocal];
      const index = newCarts.findIndex(
        (item) =>
          item.color === cartItem.color && item.sizeId === cartItem.sizeId
      );
      if (index === -1) {
        newCarts.push(cartItem);
      } else {
        newCarts[index].quantity += cartItem.quantity;
      }
      state.cartsLocal = newCarts;
      localStorage.setItem("mickey:carts", JSON.stringify(state.cartsLocal));
    },

    showMessage: (state, action) => {
      state.message = action.payload;
    },

    getCartByUser: (state, action) => {
      state.carts = action.payload;
    },

    updateCart: (state, action) => {
      const cartItem = action.payload;
      const index = state.carts.findIndex(
        (item) =>
          item.sizeId === cartItem.sizeId && item.userId === cartItem.userId
      );
      if (index !== -1) {
        if (cartItem.quantity === 0) {
          state.carts.splice(index, 1);
        } else {
          state.carts[index].quantity = cartItem.quantity;
        }
      }
    },

    updateCartLocalStorage: (state, action) => {
      const cartItem = action.payload;
      const index = state.cartsLocal.findIndex(
        (item) =>
          item.color === cartItem.color && item.sizeId === cartItem.sizeId
      );
      if (index !== -1) {
        if (cartItem.newQuantity === 0) {
          state.cartsLocal.splice(index, 1);
        } else {
          if (cartItem.newQuantity > cartItem.amount) {
            state.message = "Số lượng tồn không đủ!";
          } else {
            state.cartsLocal[index].quantity = cartItem.newQuantity;
          }
        }
      }
      localStorage.setItem("mickey:carts", JSON.stringify(state.cartsLocal));
    },

    deleteCart: (state, action) => {
      const id = action.payload;
      state.carts = state.carts.filter((item) => item.id !== id);
    },

    deleteCartLocalStore: (state, action) => {
      const cartItem = action.payload;
      state.cartsLocal = state.cartsLocal.filter(
        (item) =>
          item.id + "" !== cartItem.id + "" &&
          item.color !== cartItem.color &&
          item.sizeId !== cartItem.sizeId
      );
      localStorage.setItem("mickey:carts", JSON.stringify(state.cartsLocal));
    },
  },
});

export const {
  addToCart,
  showMessage,
  getCartByUser,
  updateCart,
  deleteCart,
  addToCartLocalStorage,
  updateCartLocalStorage,
  deleteCartLocalStore,
} = cartSlice.actions;
export default cartSlice.reducer;
