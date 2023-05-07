import * as React from "react";
import { Box, Card, Typography, Button } from "@mui/material";

export default function ReservationSummary({
  checkin_date,
  checkout_date,
  days_of_stay,
  totalRooms,
  totalPrice,
}) {
  const formattedTotalPrice = parseInt(totalPrice.toFixed(0)).toLocaleString(
    "en-US"
  );

  return (
    <Card
      elevation={4}
      sx={{
        minHeight: 190,
        width: { xs: "100%", sm: "100%", md: "90%", lg: "70%" },
        mx: "auto",
        borderRadius: "8px",
        position: "sticky",
        top: "90px",
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
          Reservation Details
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // alignContent: "space-between",
            gap: 3,
            mt: 2,
          }}
        >
          <Typography variant="body1" component="p">
            {checkin_date}
          </Typography>
          <Typography variant="body1" component="p">
            &rarr;
          </Typography>
          <Typography variant="body1" component="p">
            {checkout_date}
          </Typography>
        </Box>

        <Typography variant="body1" component="p" fontWeight={600} mt={2}>
          {`${totalRooms} ${
            totalRooms === 1 ? "Room" : "Rooms"
          } - ${days_of_stay} ${days_of_stay === 1 ? "Night" : "Nights"}`}
        </Typography>

        <Typography
          variant="h6"
          component="p"
          fontWeight="600"
          color="green"
          my={2}
        >
          ${formattedTotalPrice}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" mx={2} mb={2}>
        <Button variant="contained">Reserve</Button>
      </Box>
    </Card>
  );
}
