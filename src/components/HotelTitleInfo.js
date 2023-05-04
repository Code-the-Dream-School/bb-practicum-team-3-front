import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function HotelTitleInfo({ hotelData }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h5" component="h1" fontWeight="600">
          {hotelData.name}
        </Typography>

        <Typography variant="body2" component="p" color="#212A2F">
          {hotelData.address}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {hotelData.review_score &&
            hotelData.review_score_word &&
            hotelData.review_number && (
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
                      {hotelData.review_score}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      ml={0.5}
                      sx={{ fontWeight: "bold", color: "primary.main" }}
                    >
                      {hotelData.review_score_word}
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
                      {hotelData.review_score}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      ml={0.5}
                      sx={{ fontWeight: "bold" }}
                    >
                      {hotelData.review_score_word}
                    </Typography>
                  </>
                )}
                <Typography variant="body2" component="p" ml={1.5}>
                  {`(${hotelData.review_number.toLocaleString(
                    "en-US"
                  )} reviews)`}
                </Typography>
              </>
            )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h5" component="h3" fontWeight="600" color="green">
          {`$${hotelData.price.toLocaleString("en-US")}`}
        </Typography>
        <Typography variant="body2" component="p" mt={0} color={"grey"}>
          for {hotelData.nights} {hotelData.nights === 1 ? "night" : "nights"}
        </Typography>
        <Button
          //   component={ReactRouterLink}
          variant="contained"
          //   to="/hoteldetail"
        >
          Reserve
        </Button>
      </Box>
    </Box>
  );
}
