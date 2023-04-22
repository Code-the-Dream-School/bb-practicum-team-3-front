import React, { useState } from "react";
import { Grid, TextField, Button, Paper, Box, Container } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [guestNumber, setGuestNumber] = useState(2);
  const [roomNumber, setRoomNumber] = useState(1);

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

    const formattedCheckinDate =
      checkinDate !== null ? checkinDate.format("YYYY-MM-DD") : null;
    const formattedCheckoutDate =
      checkoutDate !== null ? checkoutDate.format("YYYY-MM-DD") : null;

    const queryString = `?destination=${destination}&guestNumber=${guestNumber}&roomNumber=${roomNumber}&checkinDate=${formattedCheckinDate}&checkoutDate=${formattedCheckoutDate}`;
    navigate(`/searchresults${queryString}`);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "80px",
          marginBottom: "20px",
        }}
      >
        <Paper
          sx={{
            borderRadius: 5,
            p: 2,
            width: "100%",
            flexWrap: "wrap",
          }}
          elevation={12}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} columns={14}>
              <Grid item xs={14} md={4.5}>
                <TextField
                  id="name-input"
                  name="destination"
                  label="Destination"
                  type="text"
                  fullWidth
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid item xs={14} md={2.5}>
                  <DatePicker
                    label="Check-in date"
                    sx={{ width: "100%" }}
                    value={checkinDate}
                    onChange={handleCheckinChange}
                  />
                </Grid>

                <Grid item xs={14} md={2.5}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    label="Check-out date"
                    value={checkoutDate}
                    onChange={handleCheckoutChange}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid item xs={14} md={1.5}>
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

              <Grid item xs={14} md={1.5}>
                <TextField
                  id="roomNumber"
                  name="rooms"
                  label="Rooms"
                  type="number"
                  fullWidth
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BedroomParentIcon />
                      </InputAdornment>
                    ),
                    inputProps: { min: 1 },
                  }}
                />
              </Grid>

              <Grid item xs={14} md={1.5}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  sx={{ height: "55px", width: "100%" }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
