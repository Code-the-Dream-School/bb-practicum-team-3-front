import * as React from "react";
import { Box, Card, Typography, Button } from "@mui/material";

export default function ReservationSummary({ totalRooms, totalPrice }) {
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
        <Typography variant="body1" component="p">
          {totalRooms === 1
            ? `${totalRooms} Room - 6 Nights`
            : `${totalRooms} Rooms - 6 Nights`}
        </Typography>
        <Typography variant="h6" component="p" fontWeight="600" color="green">
          ${totalPrice}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Button variant="contained">Reserve</Button>
      </Box>
    </Card>
  );
}
