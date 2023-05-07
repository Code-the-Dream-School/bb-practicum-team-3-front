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
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            // alignContent: "space-between",
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
        <Typography variant="body1" component="p">
          {`${totalRooms} ${
            totalRooms === 1 ? "Room" : "Rooms"
          } - ${days_of_stay} ${days_of_stay === 1 ? "Night" : "Nights"}`}
        </Typography>

        <Typography variant="h6" component="p" fontWeight="600" color="green">
          ${formattedTotalPrice}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Button variant="contained">Reserve</Button>
      </Box>
    </Card>
  );
}
