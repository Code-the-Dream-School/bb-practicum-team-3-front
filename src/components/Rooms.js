import * as React from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KingBedIcon from "@mui/icons-material/KingBed";
import PersonIcon from "@mui/icons-material/Person";

const rooms = [
  {
    roomType: "Standard Room",
    room_id: 1,
    bedType: "1 king bed",
    sleeps: "2",
    price: 1500,
    amenities: [
      "Free WiFi",
      "Free cancellation",
      "Air conditioning",
      "Flat-screen TV",
      "Hair dryer",
    ],
  },
  {
    roomType: "Premium Room - City View",
    room_id: 2,
    bedType: "1 king bed",
    sleeps: "2",
    price: 2000,
    amenities: [
      "Free WiFi",
      "Free cancellation",
      "Air conditioning",
      "Flat-screen TV",
      "Hair dryer",
    ],
  },
  {
    roomType: "Superior Room",
    room_id: 3,
    bedType: "1 king bed",
    sleeps: "2",
    price: 2500,
    amenities: [
      "Free WiFi",
      "Free cancellation",
      "Air conditioning",
      "Flat-screen TV",
      "Hair dryer",
    ],
  },
];

export default function Rooms() {
  const [roomNumber, setRoomNumber] = React.useState("");

  const handleChange = (event) => {
    setRoomNumber(event.target.value);
  };

  return (
    <>
      <Typography variant="h6" component="h2" fontWeight="600" py={2}>
        Availability
      </Typography>
      <Box sx={{ display: "flex" }} mb={7}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 2 }}>
          {rooms.map((room) => (
            <Card
              key={room.room_id}
              elevation={4}
              sx={{
                minHeight: { xs: 200, sm: 220, md: 220 },
                borderRadius: "14px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={4} sx={{ p: 2 }}>
                  <Typography variant="h5" component="h3" sx={{ pb: 3 }}>
                    {room.roomType}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <KingBedIcon sx={{ mr: 0.5 }} />
                    <Typography
                      variant="subtitle1"
                      component="p"
                      color="text.secondary"
                    >
                      {room.bedType}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PersonIcon />
                    <Typography
                      variant="subtitle1"
                      component="p"
                      color="text.secondary"
                      sx={{ pl: 0.5 }}
                    >
                      Sleeps up to {room.sleeps}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ p: 2 }}>
                  {room.amenities.map((amenity) => (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                      <Typography variant="subtitle1" component="p">
                        {amenity}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} md={4} sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    component="p"
                    fontWeight="600"
                    color="green"
                    display="inline"
                  >
                    ${room.price}{" "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="text.secondary"
                    display="inline"
                  >
                    for 6 nights
                  </Typography>

                  <Box sx={{ maxWidth: 120, mt: 2 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Add room
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={roomNumber}
                        label="Add room"
                        onChange={handleChange}
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Box>

        {/* Booking Summary Box*/}
        <Box sx={{ flex: 1 }}>
          <Card
            elevation={4}
            sx={{
              //   minHeight: { xs: 200, sm: 220, md: 220 },
              height: 190,
              width: "60%",
              mx: "auto",
              borderRadius: "14px",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="#DFE4E8"
              sx={{ height: 50 }}
            >
              <Typography variant="h6" component="p" fontWeight="600">
                Your reservation details
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body1" component="p">
                1 Room - 6 Nights
              </Typography>
              <Typography
                variant="h6"
                component="p"
                fontWeight="600"
                color="green"
              >
                ${rooms[0].price}{" "}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Button variant="contained">Reserve</Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
}
