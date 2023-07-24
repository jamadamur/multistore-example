import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterSliceReducer } from "../TestComponent/store/slice";

const rootReducer = combineReducers({
  counter: counterSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = setupStore();

export const { dispatch } = store;
