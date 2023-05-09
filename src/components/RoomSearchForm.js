import React, { useState } from "react";
import { Grid, TextField, Button, Paper, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

export default function RoomSearchForm({ hotelId, guests }) {
  const navigate = useNavigate();

  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [guestNumber, setGuestNumber] = useState(guests);

  const handleCheckinChange = (date) => {
    setCheckinDate(date);

    if (!checkoutDate) {
      setCheckoutDate(date.add(1, "day"));
    } else if (checkoutDate && date.isAfter(checkoutDate)) {
      setCheckoutDate(date.add(1, "day"));
    }
  };

  const handleCheckoutChange = (date) => {
    setCheckoutDate(date);
    if (!checkinDate) {
      setCheckinDate(date.subtract(1, "day"));
    } else if (checkinDate && date.isBefore(checkinDate)) {
      setCheckinDate(date.subtract(1, "day"));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedCheckinDate = checkinDate.format("YYYY-MM-DD");
    const formattedCheckoutDate = checkoutDate.format("YYYY-MM-DD");

    const queryString = `?hotelId=${hotelId}&guestNumber=${guestNumber}&checkinDate=${formattedCheckinDate}&checkoutDate=${formattedCheckoutDate}`;
    navigate(`/hoteldetails${queryString}`);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <Paper
          sx={{
            borderRadius: 2,
            p: 2,
            width: "100%",
            flexWrap: "wrap",
          }}
          elevation={6}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} columns={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid item xs={12} md={3}>
                  <DatePicker
                    label="Check-in date"
                    sx={{ width: "100%" }}
                    value={checkinDate}
                    onChange={handleCheckinChange}
                    slotProps={{
                      textField: {
                        required: true,
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={3}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    label="Check-out date"
                    value={checkoutDate}
                    onChange={handleCheckoutChange}
                    slotProps={{
                      textField: {
                        required: true,
                      },
                    }}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid item xs={12} md={3}>
                <TextField
                  id="guestNumber"
                  name="guests"
                  label="Guests"
                  type="number"
                  fullWidth
                  value={guestNumber}
                  onChange={(e) => setGuestNumber(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                    inputProps: { min: 1 },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  sx={{ height: "55px", width: "100%" }}
                >
                  Update Rooms
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </>
  );
}
