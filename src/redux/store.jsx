import { configureStore } from "@reduxjs/toolkit";
import parasReducer from "./paras";
export const store = configureStore({
  reducer:{
    paras: parasReducer,
  },
})
