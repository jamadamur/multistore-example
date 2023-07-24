import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectCounterValue = (componentId: string) =>
  createSelector(
    (state: RootState) => state.counter,
    (counter) => counter[componentId]?.value
  );
