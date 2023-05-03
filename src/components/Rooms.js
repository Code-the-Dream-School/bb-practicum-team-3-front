import * as React from "react";
import { Box, Typography } from "@mui/material";
import RoomCard from "../components/RoomCard";
import ReservationSummary from "../components/ReservationSummary";

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
  const [totalRooms, setTotalRooms] = React.useState(0);

  return (
    <>
      <Typography variant="h6" component="h2" fontWeight="600" py={2}>
        Availability
      </Typography>
      <Box sx={{ display: "flex" }} mb={7}>
        {/* RoomCard */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 2 }}>
          {rooms.map((room) => (
            <RoomCard
              room={room}
              key={room.room_id}
              onRoomAdded={(count) => setTotalRooms(totalRooms + count)}
            />
          ))}
        </Box>

        {/* Reservation Summary Box*/}
        <Box sx={{ flex: 1 }}>
          <ReservationSummary totalRooms={totalRooms} />
        </Box>
      </Box>
    </>
  );
}
