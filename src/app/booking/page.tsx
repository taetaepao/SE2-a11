"use client";

import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingPage() {
  const dispatch = useDispatch();

  // ฟอร์มจอง
  const [form, setForm] = useState({
    nameLastname: "",
    tel: "",
    venue: "Bloom",
    bookDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: any) => {
    setForm({ ...form, venue: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nameLastname || !form.tel || !form.bookDate) {
      alert("⚠️ กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }
    dispatch(addBooking(form));
    alert("✅ เพิ่มการจองเรียบร้อยแล้ว!");
    setForm({
      nameLastname: "",
      tel: "",
      venue: "Bloom",
      bookDate: "",
    });
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 600,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        จองสถานที่จัดเลี้ยง
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name-Lastname"
          name="nameLastname"
          value={form.nameLastname}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contact-Number"
          name="tel"
          value={form.tel}
          onChange={handleChange}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            value={form.venue}
            label="Venue"
            onChange={handleSelectChange}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          margin="normal"
          label="Booking Date"
          type="date"
          name="bookDate"
          InputLabelProps={{ shrink: true }}
          value={form.bookDate}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          name="Book Venue"
          sx={{ mt: 2 }}
        >
          จองสถานที่จัดเลี้ยง
        </Button>
      </form>
    </Box>
  );
}
