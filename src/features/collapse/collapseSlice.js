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
      console.log("open");
      document.getElementById("collapse-main")?.classList.add("open");
    },
    close(state) {
      state.isOpen = false;
      console.log("close");
      document.getElementById("collapse-main")?.classList.remove("open");
    },
  },
});

export default collapseSlice.reducer;
export const { open, close } = collapseSlice.actions;
