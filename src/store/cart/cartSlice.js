import { createSlice } from "@reduxjs/toolkit";

import { roundToTwoDecimals, saveToLocalStorage } from "../../helpers";

export const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    addProduct: (state, { payload }) => {
      const existingProduct = state.find((product) => product.id === payload.id);

      if (existingProduct) {
        existingProduct.quantity =
          (existingProduct.quantity || 0) + (payload.quantity || 1);
        existingProduct.total = roundToTwoDecimals(
          existingProduct.price * existingProduct.quantity
        );
        return;
      } else {
        state.push({
          ...payload,
          quantity: 1,
          total: roundToTwoDecimals(payload.price),
        });
      }

      saveToLocalStorage(state);
    },
    removeProduct: (state, { payload }) => {
      const newState = state.filter((product) => product.id !== payload);

      saveToLocalStorage(newState);

      return newState;
    },
    incrementQuantity: (state, { payload }) => {
      const product = state.find((product) => product.id === payload);

      if (product) {
        product.quantity += 1;
        product.total = roundToTwoDecimals(product.price * product.quantity);
      }

      saveToLocalStorage(state);
    },
    decrementQuantity: (state, { payload }) => {
      const product = state.find((product) => product.id === payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.total = roundToTwoDecimals(product.price * product.quantity);
      }

      saveToLocalStorage(state);
    },
  },
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
