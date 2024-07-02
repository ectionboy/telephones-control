import { configureStore } from "@reduxjs/toolkit";
import { phones } from "./reducer";

export const store = configureStore({
  reducer: {
    phones: phones  },
});