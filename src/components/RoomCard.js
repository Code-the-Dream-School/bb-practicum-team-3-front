import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KingBedIcon from "@mui/icons-material/KingBed";
import PersonIcon from "@mui/icons-material/Person";

export default function RoomCard({
  id,
  room,
  daysOfStay,
  handleSelectedRooms,
}) {
  const [roomNumber, setRoomNumber] = useState(0);

  const formattedPrice = parseInt(room.price.toFixed(0)).toLocaleString(
    "en-US"
  );

  const handleChange = (event) => {
    const selectedRoomNumber = event.target.value;
    setRoomNumber(selectedRoomNumber);
    handleSelectedRooms(id, room.price, selectedRoomNumber);
  };

  return (
    <Card
      elevation={4}
      sx={{
        minHeight: { xs: 200, sm: 220, md: 220 },
        borderRadius: "8px",
        display: "flex",
        // flexWrap: "nowrap",
        // flexDirection: { xs: "column", sm: "row", md: "row" },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={4} md={4} sx={{ p: 2 }}>
          <Typography variant="h5" component="h3" sx={{ pb: 3 }}>
            {room.room_type}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
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
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: { xs: "row", sm: "column", md: "column" },
            flexWrap: "wrap",
          }}
        >
          {room.amenities.map((amenity, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
              <Typography variant="body2" component="p">
                {amenity}
              </Typography>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} sm={4} md={4} sx={{ p: 2 }}>
          <Typography
            variant="h6"
            component="p"
            fontWeight="600"
            color="green"
            display="inline"
          >
            ${formattedPrice}{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            display="inline"
          >
            for {daysOfStay} {daysOfStay === 1 ? "night" : "nights"}
          </Typography>

          <Box sx={{ maxWidth: 120, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Add room</InputLabel>
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
  );
}
