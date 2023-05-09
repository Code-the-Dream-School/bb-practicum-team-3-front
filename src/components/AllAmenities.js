import React from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function AllAmenities({ facilities, name }) {
  return (
    <>
      <Typography variant="h6" component="h2" fontWeight="600" pb={2}>
        Amenities of {name}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "16px",
          mb: 12,
        }}
      >
        {facilities.map((facility, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <CheckIcon sx={{ width: 20, color: "green", mr: 1 }} />
            <Typography variant="body2" component="h2">
              {facility}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
