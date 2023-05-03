import React from "react";
import { Stack, Typography } from "@mui/material";
import Warning from "../assets/warning.svg";

export default function Error() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      spacing={1}
      sx={{ width: "100%", mt: "40px" }}
    >
      <img
        src={Warning}
        alt={"warning exclamation mark"}
        loading="lazy"
        style={{ width: "80px", height: "80px", marginBottom: "8px" }}
      />
      <Typography variant="h4" color="black">
        {"Oh No!"}
      </Typography>
      <Typography variant="h5" color="error">
        {"Something went wrong. Please try again later."}
      </Typography>
    </Stack>
  );
}
