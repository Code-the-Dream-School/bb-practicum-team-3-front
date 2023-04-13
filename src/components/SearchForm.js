import React, { useState } from 'react';
import { Grid, TextField, Button, Paper, Box, Container } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import fetchHotels from '../api/fetchHotels';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState('');
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [guestNumber, setGuestNumber] = useState(2);
  const [roomNumber, setRoomNumber] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    //console.log(destination);
    //console.log(checkinDate);
    // console.log(checkoutDate);
    //console.log(guestNumber);

    const searchData = {
      destination,
      guestNumber,
      roomNumber,
      checkinDate:
        checkinDate !== null ? checkinDate.format('YYYY-MM-DD') : null,
      checkoutDate:
        checkoutDate !== null ? checkoutDate.format('YYYY-MM-DD') : null,
    };

    const formattedCheckinDate =
      checkinDate !== null ? checkinDate.format('YYYY-MM-DD') : null;
    const formattedCheckOutDate =
      checkoutDate !== null ? checkoutDate.format('YYYY-MM-DD') : null;

    console.log('checkinDate', formattedCheckinDate);

    const queryString = `?destination=${destination}&guestNumber=${guestNumber}&roomNumber=${roomNumber}&checkinDate=${formattedCheckinDate}&checkoutDate=${formattedCheckOutDate}`;

    console.log(searchData);
    fetchHotels(searchData).then((returnMessage) => {
      console.log('fetchHotelData', returnMessage);
      //navigate(`/searchresults${queryString}`);
    });
    // setDestination('');
    //setCheckinDate(null);
    //setCheckoutDate(null);
    //setGuestNumber(2);
    //setRoomNumber(1);
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '100px',
          marginBottom: '50px',
        }}
      >
        <Paper
          sx={{
            borderRadius: 5,
            p: 3,
            width: '100%',
            flexWrap: 'wrap',
          }}
          elevation={12}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  id="name-input"
                  name="destination"
                  label="Destination"
                  type="text"
                  fullWidth
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

              <Grid item xs={12} md={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Check-in date"
                    sx={{ width: '100%' }}
                    value={checkinDate}
                    onChange={(newValue) => setCheckinDate(newValue)}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} md={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: '100%' }}
                    label="Check-out date"
                    value={checkoutDate}
                    onChange={(newValue) => setCheckoutDate(newValue)}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} md={1}>
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
                    inputProps: { min: 0 },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={1}>
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
                    inputProps: { min: 0 },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  sx={{ height: '55px', width: '100%' }}
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