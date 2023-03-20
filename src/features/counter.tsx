import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count", //this value need to be in store reducer
  initialState: { value: 0 },
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
  },
});

// to initate actions
export const { increase } = counterSlice.actions;
// store reducer
export default counterSlice.reducer;
