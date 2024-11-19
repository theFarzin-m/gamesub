import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // action payload most be a object with id, title, image, price of game
    add(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    // action payload is an id
    remove(state, action) {
      state.cart = state.cart.filter((s) => s.id !== action.payload);
    },
    removeAll(state) {
      state.cart = [];
    },
    increase(state, action) {
      const index = state.cart.findIndex((s) => s.id === action.payload.id);
      state.cart[index].quantity += 1;
      state.isLoading = false;
    },
    decrease(state, action) {
      const index = state.cart.findIndex((s) => s.id === action.payload.id);

      state.cart[index].quantity -= 1;
      state.isLoading = false;
    },
    startUpdating(state) {
      state.isLoading = true;
    },
  },
});

export default cartSlice.reducer;
export const { add, remove, removeAll, increase, decrease, startUpdating } =
  cartSlice.actions;
