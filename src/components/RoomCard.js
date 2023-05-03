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
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KingBedIcon from "@mui/icons-material/KingBed";
import PersonIcon from "@mui/icons-material/Person";

export default function RoomCard({ room, onRoomAdded }) {
  const [roomNumber, setRoomNumber] = React.useState(0);

  const handleChange = (event) => {
    setRoomNumber(event.target.value);
    onRoomAdded(event.target.value);
  };

  return (
    <Card
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
          {room.amenities.map((amenity, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
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
