import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const collapseSlice = createSlice({
  name: "collaps",
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
      document.getElementById("collapse-main")?.classList.add("open");
    },
    close(state) {
      state.isOpen = false;
      document.getElementById("collapse-main")?.classList.remove("open");
    },
  },
});

export default collapseSlice.reducer;
export const { open, close } = collapseSlice.actions;
