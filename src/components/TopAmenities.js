import React from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function TopAmenities({ hotelData }) {
  return (
    <>
      <Typography variant="h6" component="h2" fontWeight="600" pt={2} pb={6}>
        Top Amenities
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {hotelData.hotel_facilities_filtered.slice(0, 8).map((facility, i) => {
          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #E7E7E7",
                py: 2.5,
                pl: 2,
                pr: 3,
                flexGrow: 1,
                maxWidth: "100%",
              }}
            >
              <CheckIcon sx={{ width: 25, color: "green", mr: 1.5 }} />
              <Typography variant="body1" component="h2">
                {facility}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
