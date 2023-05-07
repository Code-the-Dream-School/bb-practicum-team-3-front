import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RoomCard from "../components/RoomCard";
import ReservationSummary from "../components/ReservationSummary";

export default function Rooms({ rooms }) {
  const [totalRooms, setTotalRooms] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [roomTotalPriceAndRoomNum, setRoomTotalPriceAndRoomNum] = useState([]);

  useEffect(() => {
    const totalRooms = roomTotalPriceAndRoomNum.reduce(
      (total, room) => total + room.num_of_rooms,
      0
    );
    setTotalRooms(totalRooms);

    const totalPrice = roomTotalPriceAndRoomNum.reduce(
      (total, room) => total + room.price * room.num_of_rooms,
      0
    );
    setTotalPrice(totalPrice);
  }, [roomTotalPriceAndRoomNum]);

  const handleSelectedRooms = (id, price, num_of_rooms) => {
    const roomIndex = roomTotalPriceAndRoomNum.findIndex(
      (room) => room.id === id
    );

    if (roomIndex !== -1) {
      const updatedRooms = roomTotalPriceAndRoomNum.map((room) =>
        room.id === id ? { ...room, num_of_rooms } : room
      );

      setRoomTotalPriceAndRoomNum(updatedRooms);
    } else {
      const room = { id, price, num_of_rooms };
      setRoomTotalPriceAndRoomNum([...roomTotalPriceAndRoomNum, room]);
    }
  };

  return (
    <>
      <Typography variant="h6" component="h2" fontWeight="600" py={2}>
        Availability
      </Typography>
      <Box sx={{ display: "flex" }} mb={7}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 2 }}>
          {rooms.rooms.map((room, index) => {
            return (
              <RoomCard
                key={index}
                id={index}
                room={room}
                daysOfStay={rooms.daysOfStay}
                handleSelectedRooms={handleSelectedRooms}
              />
            );
          })}
        </Box>

        <Box sx={{ flex: 1 }}>
          <ReservationSummary
            checkin_date={rooms.checkin_date}
            checkout_date={rooms.checkout_date}
            days_of_stay={rooms.days_of_stay}
            totalRooms={totalRooms}
            totalPrice={totalPrice}
          />
        </Box>
      </Box>
    </>
  );
}
