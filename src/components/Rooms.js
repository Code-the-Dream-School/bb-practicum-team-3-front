import * as React from "react";
import { Box, Typography } from "@mui/material";
import RoomCard from "../components/RoomCard";
import ReservationSummary from "../components/ReservationSummary";

export default function Rooms({ rooms }) {
  const [totalRooms, setTotalRooms] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  return (
    <>
      <Typography variant="h6" component="h2" fontWeight="600" py={2}>
        Availability
      </Typography>
      <Box sx={{ display: "flex" }} mb={7}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 2 }}>
          {rooms.rooms.map((room) => (
            <RoomCard
              room={room}
              rooms={rooms}
              key={room.room_id}
              onRoomAdded={(count) => setTotalRooms(totalRooms + count)}
              onTotalPriceChanged={(amount) =>
                setTotalPrice(totalPrice + amount)
              }
            />
          ))}
        </Box>

        <Box sx={{ flex: 1 }}>
          <ReservationSummary
            checkinDate={rooms.checkinDate}
            checkoutDate={rooms.checkoutDate}
            daysOfStay={rooms.daysOfStay}
            totalRooms={totalRooms}
            totalPrice={totalPrice}
          />
        </Box>
      </Box>
    </>
  );
}
