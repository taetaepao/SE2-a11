import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../interfaces/interface";

export interface BookState {
  bookItems: BookingItem[];
}

const initialState: BookState = {
  bookItems: [],
};

export const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
        const booking = action.payload;
        const existsIndex = state.bookItems.findIndex(
            (b) => b.venue === booking.venue && b.bookDate === booking.bookDate
        );
        if (existsIndex !== -1) {
            state.bookItems[existsIndex] = booking;
        } else {
            state.bookItems.push(booking);
        }
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
        const booking = action.payload;
        state.bookItems = state.bookItems.filter(
            (b) =>
            !(
                b.nameLastname === booking.nameLastname &&
                b.tel === booking.tel &&
                b.venue === booking.venue &&
                b.bookDate === booking.bookDate
            )
        );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
