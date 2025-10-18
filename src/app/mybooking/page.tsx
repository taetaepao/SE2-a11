"use client";

import BookingList from "@/components/BookingList";
import { Box, Typography } from "@mui/material";

export default function MyBookingPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        รายการจองสถานที่จัดเลี้ยงของคุณ
      </Typography>
      <BookingList />
    </Box>
  );
}
