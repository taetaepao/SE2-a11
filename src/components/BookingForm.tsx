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
  Paper,
  Divider,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { useState } from "react";

export default function BookingForm({ profile }: { profile: any }) {
  const [venue, setVenue] = useState("");

  return (
    <Paper
      elevation={3}
      className="w-full max-w-2xl p-8 rounded-2xl bg-white border border-gray-100 shadow-md"
    >
      <Typography
        variant="h4"
        className="font-bold text-gray-800 mb-6 text-center"
      >
        Venue Booking
      </Typography>

      <Divider className="mb-6" />

      <form className="flex flex-col gap-6">
        <TextField
          name="Name-Lastname"
          label="Name - Lastname"
          variant="outlined"
          fullWidth
          defaultValue={profile?.name || ""}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          name="Contact-Number"
          label="Contact Number"
          variant="outlined"
          fullWidth
          defaultValue={profile?.tel || ""}
          InputLabelProps={{ shrink: true }}
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            label="Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <DateReserve />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className="rounded-lg"
        >
          Book Venue
        </Button>
      </form>
    </Paper>
  );
}
