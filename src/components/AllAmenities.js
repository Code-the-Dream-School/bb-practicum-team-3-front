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
          display: "flex",
          flexWrap: "wrap",
          minHeight: "400px",
          justifyContent: "space-between",
          mb: 7,
        }}
      >
        {facilities.map((facility, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              minWidth: "150px",
              flexBasis: "calc(25% - 16px)",
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
