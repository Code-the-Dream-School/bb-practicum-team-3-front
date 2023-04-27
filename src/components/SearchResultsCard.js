import * as React from "react";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Link as ReactRouterLink } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h7",
          },
          style: {
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "Roboto, Helvetica, Arial ,sans-serif",
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});

export default function SearchResultsCard({ hotel }) {
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={12} md={6}>
        <Card
          elevation={4}
          sx={{
            minHeight: { xs: 200, sm: 220, md: 256 },
            borderRadius: "14px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardMedia
            sx={{
              minHeight: 140,
              width: { xs: "35%", sm: "30%", md: "30%", lg: "30%" },
              maxHeight: { xs: 300, sm: 220, md: 300, lg: 256 },
            }}
            component={"img"}
            src={hotel.image_url}
            alt={hotel.name}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <CardContent sx={{ pb: 0 }}>
              <Typography
                gutterBottom
                variant="h7"
                component="h2"
                sx={{ fontSize: { sm: 15, xs: 15, md: 18, lg: 18 } }}
              >
                {hotel.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                {hotel.review_score &&
                  hotel.review_score_word &&
                  hotel.review_number && (
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
                            {hotel.review_score}
                          </Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            ml={0.5}
                            sx={{ fontWeight: "bold", color: "primary.main" }}
                          >
                            {hotel.review_score_word}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography
                            variant="subtitle2"
                            component="p"
                            mr={0.5}
                            px={0.3}
                            py={0.1}
                            sx={{
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "secondary.main",
                              borderRadius: "5px",
                              width: "20px",
                              height: "20px",
                              textAlign: "center",
                            }}
                          >
                            {hotel.review_score}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            component="p"
                            ml={0.5}
                            sx={{ fontWeight: "bold" }}
                          >
                            {hotel.review_score_word}
                          </Typography>
                        </>
                      )}
                      <Typography variant="body2" component="p" ml={1.5}>
                        {`(${hotel.review_number.toLocaleString(
                          "en-US"
                        )} reviews)`}
                      </Typography>
                    </>
                  )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #e1dede",
                  mb: 1,
                  pb: 1,
                }}
              >
                <LocationOnOutlinedIcon sx={{ width: 16, mr: 0.5 }} />
                {hotel.distance === "0" ? (
                  <Typography variant="body2" component="p">
                    {hotel.district} • in the center
                  </Typography>
                ) : (
                  <Typography variant="body2" component="p">
                    {hotel.district} • {hotel.distance} from center
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "50%", lg: "50%" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {hotel.is_free_cancellable === "Yes" ? (
                      <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                    ) : hotel.is_free_cancellable === "No" ? (
                      <CloseIcon sx={{ width: 16, color: "red", mr: 0.7 }} />
                    ) : (
                      <QuestionMarkIcon
                        sx={{ width: 18, color: "#A9A9A9", mr: 0.5 }}
                      />
                    )}
                    <Typography variant="body2">Free cancellation</Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {hotel.hotel_include_breakfast === "Yes" ? (
                      <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                    ) : hotel.hotel_include_breakfast === "No" ? (
                      <CloseIcon sx={{ width: 16, color: "red", mr: 0.7 }} />
                    ) : (
                      <QuestionMarkIcon
                        sx={{ width: 15, color: "#A9A9A9", mr: 0.8 }}
                      />
                    )}
                    <Typography variant="body2">Breakfast included</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "50%", lg: "50%" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {hotel.has_free_parking === "Yes" ? (
                      <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                    ) : hotel.has_free_parking === "No" ? (
                      <CloseIcon sx={{ width: 16, color: "red", mr: 0.7 }} />
                    ) : (
                      <QuestionMarkIcon
                        sx={{ width: 15, color: "#A9A9A9", mr: 0.8 }}
                      />
                    )}
                    <Typography variant="body2">Free parking</Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {hotel.has_swimming_pool === "Yes" ? (
                      <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                    ) : hotel.has_swimming_pool === "No" ? (
                      <CloseIcon sx={{ width: 16, color: "red", mr: 0.7 }} />
                    ) : (
                      <QuestionMarkIcon
                        sx={{ width: 15, color: "#A9A9A9", mr: 0.8 }}
                      />
                    )}
                    <Typography variant="body2">Swimming pool</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
              <Box>
                <Typography
                  variant="h6"
                  component="h3"
                  mt={0}
                  fontWeight="600"
                  color="green"
                >
                  {`$${hotel.price.toLocaleString("en-US")}`}
                </Typography>
              </Box>

              <Button
                component={ReactRouterLink}
                size="small"
                variant="contained"
                to="/hoteldetail"
              >
                See Availability
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}
