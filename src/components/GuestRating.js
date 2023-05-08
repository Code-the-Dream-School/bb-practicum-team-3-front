import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

export default function GuestRating({
  reviewScore,
  cleanliness,
  comfort,
  staff,
  location,
}) {
  return (
    <>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
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
          {reviewScore}
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
          {cleanliness}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={cleanliness * 10}
        color="secondary"
        sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
      />

      <Box display="flex" justifyContent="space-between" pt="15px" pb="8px">
        <Typography variant="body2" fontWeight="600">
          COMFORT
        </Typography>
        <Typography variant="body1" fontWeight="600">
          {comfort}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={comfort * 10}
        color="secondary"
        sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
      />

      <Box display="flex" justifyContent="space-between" pt="15px" pb="8px">
        <Typography variant="body2" fontWeight="600">
          STAFF
        </Typography>
        <Typography variant="body1" fontWeight="600">
          {staff}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={staff * 10}
        color="secondary"
        sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
      />

      <Box display="flex" justifyContent="space-between" pt="15px" pb="8px">
        <Typography variant="body2" fontWeight="600">
          LOCATION
        </Typography>
        <Typography variant="body1" fontWeight="600">
          {location}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={location * 10}
        color="secondary"
        sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
      />
    </>
  );
}
