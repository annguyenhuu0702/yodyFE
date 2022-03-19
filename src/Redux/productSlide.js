import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    getAllProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
