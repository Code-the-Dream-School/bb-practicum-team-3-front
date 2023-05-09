import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import RoomCard from "../components/RoomCard";
import ReservationSummary from "../components/ReservationSummary";
import RoomSearchForm from "../components/RoomSearchForm";

export default function Rooms({
  rooms,
  hotelId,
  totalRooms,
  totalPrice,
  guestNumber,
  handleSelectedRooms,
  handleReserve,
}) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Typography
        id="rooms"
        variant="h6"
        component="h2"
        fontWeight="600"
        py={2}
      >
        Availability
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMatch ? "1fr" : "repeat(3, 1fr)",
          gap: 1,
          mb: 7,
          gridTemplateRows: "auto",
          gridTemplateAreas: isMatch
            ? `"updateForm" 
               "roomCard"
               "summary"`
            : `"updateForm updateForm ."
              "roomCard roomCard summary"`,
        }}
      >
        <Box sx={{ gridArea: "updateForm" }}>
          <RoomSearchForm hotelId={hotelId} guests={guestNumber} />
        </Box>
        <Box sx={{ gridArea: "roomCard" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {rooms.rooms.map((room, index) => {
              return (
                <RoomCard
                  key={index}
                  id={index}
                  room={room}
                  daysOfStay={rooms.days_of_stay}
                  handleSelectedRooms={handleSelectedRooms}
                />
              );
            })}
          </Box>
        </Box>
        <Box sx={{ gridArea: "summary" }}>
          <ReservationSummary
            checkin_date={rooms.checkin_date}
            checkout_date={rooms.checkout_date}
            days_of_stay={rooms.days_of_stay}
            totalRooms={totalRooms}
            totalPrice={totalPrice}
            handleReserve={handleReserve}
          />
        </Box>
      </Box>
    </>
  );
}
