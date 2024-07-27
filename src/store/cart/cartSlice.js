import { createSlice } from "@reduxjs/toolkit";

import { roundToTwoDecimals } from "../../helpers";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
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
      }

      state.push({
        ...payload,
        quantity: 1,
        total: roundToTwoDecimals(payload.price),
      });
    },
    removeProduct: (state, { payload }) => {
      return state.filter((product) => product.id !== payload);
    },
    incrementQuantity: (state, { payload }) => {
      const product = state.find((product) => product.id === payload);

      if (product) {
        product.quantity += 1;
        product.total = roundToTwoDecimals(product.price * product.quantity);
      }
    },
    decrementQuantity: (state, { payload }) => {
      const product = state.find((product) => product.id === payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.total = roundToTwoDecimals(product.price * product.quantity);
      }
    },
  },
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
