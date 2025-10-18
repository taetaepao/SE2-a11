import { configureStore } from "@reduxjs/toolkit";
import bookReducer, { bookSlice } from "./features/bookSlice"; // ✅ import slice ด้วย

export const store = configureStore({
  reducer: {
    bookSlice: bookSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
