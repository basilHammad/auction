import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import commonReducer from "./slices/commonSlice";
import collegeReducer from "./slices/collegeSlice";
import productsReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    common: commonReducer,
    college: collegeReducer,
    products: productsReducer,
  },
});
