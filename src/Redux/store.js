import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import productReducer from "./productSlide";
import buyertypeReducer from "./buyerTypeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    buyertype: buyertypeReducer,
  },
});
