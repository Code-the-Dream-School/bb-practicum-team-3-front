import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function TopAmenities({ facilities }) {
  return (
    <>
      <Typography
        variant="h6"
        component="h2"
        fontWeight="600"
        sx={{ pb: { xs: 2, sm: 2, md: 6 }, pt: { xs: 3, sm: 4, md: 2 } }}
      >
        Top Amenities
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {facilities.slice(0, 6).map((facility, i) => {
          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #E7E7E7",
                py: 1,
                pl: 1,
                pr: 2,
                flexGrow: 1,
                maxWidth: "100%",
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ width: 25, color: "green", mr: 1.5 }}
              />
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
