import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../assets/NotFoundImage.jpg";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Box
        component="img"
        src={NotFoundImage}
        alt={"Checking the map to plan the trip"}
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "90%",
        }}
      >
        <Typography sx={{ fontSize: "4rem" }}>404</Typography>
        <Typography sx={{ fontSize: "1.5rem" }}>
          Oops! Seems that this destination is not on my map.
        </Typography>
        <Button
          sx={{ marginTop: "24px" }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
}
