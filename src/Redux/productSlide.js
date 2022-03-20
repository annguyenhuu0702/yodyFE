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
    sortProductByName: (state) => {
      const newProduct = [...state.products];
      newProduct.sort((a, b) => {
        const nameA = a.categoryId.toUpperCase(); // ignore upper and lowercase
        const nameB = b.categoryId.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      state.products = newProduct;
    },
  },
});

export const { getAllProduct, sortProductByName } = productSlice.actions;
export default productSlice.reducer;
