import { createSlice } from "@reduxjs/toolkit";

type MultipleComponentsStoreType = {
  [componentId: string]: {
    value: number;
  };
};

const initialState: MultipleComponentsStoreType = {
  first: {
    value: 0,
  },
  second: {
    value: 0,
  },
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementValue: (state, { payload }) => {
      state[payload.componentId].value = Math.random();
    },
  },
});

export const { incrementValue } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
