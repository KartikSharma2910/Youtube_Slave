import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: 0,
  reducers: {
    increase: (state) => {
      state = state + 1;
    },
    decrease: (state) => {
      state = state - 1;
    },
  },
});

export const { increase, decrease } = CounterSlice.actions;

export default CounterSlice.reducer;
