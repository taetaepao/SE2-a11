"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { Box, Button, Typography, Paper } from "@mui/material";

export default function BookingList() {
  const bookings = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch();

  if (bookings.length === 0) {
    return (
      <Typography variant="h6" textAlign="center" sx={{ mt: 4 }}>
        No Venue Booking
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      {bookings.map((b, idx) => (
        <Paper key={idx} sx={{ p: 2, mb: 2 }}>
          <Typography><b>Name:</b> {b.nameLastname}</Typography>
          <Typography><b>Contact:</b> {b.tel}</Typography>
          <Typography><b>Venue:</b> {b.venue}</Typography>
          <Typography><b>Date:</b> {b.bookDate}</Typography>
          <Button
            variant="outlined"
            color="error"
            sx={{ mt: 1 }}
            onClick={() => dispatch(removeBooking(b))}
          >
            ยกเลิกการจอง
          </Button>
        </Paper>
      ))}
    </Box>
  );
}
