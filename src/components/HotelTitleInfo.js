import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

export default function HotelTitleInfo({
  name,
  review_score,
  review_score_word,
  address,
  city,
  zip,
  days_of_stay,
  price,
}) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const formattedPrice = parseInt(price.toFixed(0)).toLocaleString("en-US");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h5" component="h1" fontWeight="600">
          {name}
        </Typography>

        <Typography variant="body2" component="p" color="#212A2F">
          {address}, {city}, {zip}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {review_score && review_score_word && (
            <>
              {isMatch ? (
                <>
                  <Typography
                    variant="body2"
                    component="p"
                    mr={0.5}
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                  >
                    {review_score}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    ml={0.5}
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    {review_score_word}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography
                    variant="body1"
                    component="p"
                    mr={0.5}
                    px={0.3}
                    py={0.1}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: "secondary.main",
                      borderRadius: "5px",
                      width: "24px",
                      height: "23px",
                      textAlign: "center",
                    }}
                  >
                    {review_score}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    ml={0.5}
                    sx={{ fontWeight: "bold" }}
                  >
                    {review_score_word}
                  </Typography>
                </>
              )}
            </>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h5" component="h3" fontWeight="600" color="green">
          ${formattedPrice}
        </Typography>
        <Typography variant="body2" component="p" mt={0} color={"grey"}>
          for {days_of_stay} {days_of_stay === 1 ? "night" : "nights"}
        </Typography>

        <Link to="#rooms" smooth style={{ textDecoration: "none" }}>
          <Button variant="contained">Reserve</Button>
        </Link>
      </Box>
    </Box>
  );
}
