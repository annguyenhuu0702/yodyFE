import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import productReducer from "./productSlide";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
