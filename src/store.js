import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"
import collapseSlice from "./features/collapse/collapseSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    collapse: collapseSlice
  },
});

export default store