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
    sortProduct: (state, action) => {
      const type = action.payload;
      const newProduct = [...state.products];
      switch (type) {
        case "Tên A-Z":
          newProduct.sort((a, b) => {
            const nameA = a.name;
            const nameB = b.name;
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          break;
        case "Tên Z-A":
          newProduct.sort((a, b) => {
            const nameA = a.name;
            const nameB = b.name;
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          });
          break;
        case "Giá giảm dần":
          newProduct.sort((a, b) => {
            return b.newPrice - a.newPrice;
          });
          break;
        case "Giá tăng dần":
          newProduct.sort((a, b) => {
            return a.newPrice - b.newPrice;
          });
          break;
        default:
          newProduct.sort((a, b) => {
            const nameA = parseInt(a.categoryId);
            const nameB = parseInt(b.categoryId);
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          break;
      }
      state.products = newProduct;
    },
  },
});

export const { getAllProduct, sortProduct } = productSlice.actions;
export default productSlice.reducer;
