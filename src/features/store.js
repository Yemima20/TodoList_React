import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./createSlice";

export const store = configureStore({
  reducer: reducer,
});
