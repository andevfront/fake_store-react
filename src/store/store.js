import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";
import { cartSlice } from "./cart";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
