import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

export default function GuestRating({ hotelData }) {
  return (
    <>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        mb="7px"
      >
        <Typography
          variant="h6"
          component="p"
          mr={0.8}
          px={0.7}
          sx={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "secondary.main",
            borderRadius: "5px",
            width: "30px",
            height: "30px",
            textAlign: "center",
          }}
        >
          {hotelData.review_score}
        </Typography>
        <Typography variant="h6" component="h2" fontWeight="600" py={2}>
          Guest Rating
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" pt="15px" pb="8px">
        <Typography variant="body2" fontWeight="600">
          CLEANLINESS
        </Typography>
        <Typography variant="body1" fontWeight="600">
          {hotelData.cleanliness_score}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={hotelData.cleanliness_score * 10}
        color="secondary"
        sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
      />

      <Box display="flex" justifyContent="space-between" pt="15px" pb="8px">
        <Typography variant="body2" fontWeight="600">
          STAFF
        </Typography>
        <Typography variant="body1" fontWeight="600">
          {hotelData.staff_score}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={hotelData.staff_score * 10}
        color="secondary"
        sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
      />

      <Box display="flex" justifyContent="space-between" pt="15px" pb="8px">
        <Typography variant="body2" fontWeight="600">
          LOCATION
        </Typography>
        <Typography variant="body1" fontWeight="600">
          {hotelData.location_score}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={hotelData.location_score * 10}
        color="secondary"
        sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
      />
    </>
  );
}
