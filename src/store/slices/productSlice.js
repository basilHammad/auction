import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
};

export const ProductSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts, getProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
