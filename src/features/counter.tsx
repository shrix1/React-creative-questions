import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  //this value need to be in store reducer
  name: "count",
  initialState: { value: { num: 0, name: "" } },
  reducers: {
    increase: (state, action) => {
      state.value.num += action.payload;
    },
    changeInfo: (state, action) => {
      state.value.name = action.payload;
    },
  },
});

// to initate actions
export const { increase, changeInfo } = counterSlice.actions;
// store reducer
export default counterSlice.reducer;
