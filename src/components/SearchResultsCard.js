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
      <Grid item xs={12} sm={6}>
        <Card
          elevation={4}
          sx={{
            minHeight: { xs: 200, sm: 230, md: 230 },
            borderRadius: "14px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardMedia
            sx={{
              minHeight: 140,
              width: { xs: "35%", sm: "30%", md: "30%", lg: "30%" },
              maxHeight: { xs: 260, sm: 230, md: 230 },
            }}
            component={"img"}
            src={hotel.img}
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
                      {hotel.rating}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      ml={0.5}
                      sx={{ fontWeight: "bold", color: "primary.main" }}
                    >
                      {hotel.ratingFeedback}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      mr={0.5}
                      px={0.8}
                      py={0.3}
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "secondary.main",
                        borderRadius: "5px",
                      }}
                    >
                      {hotel.rating}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      ml={0.5}
                      sx={{ fontWeight: "bold" }}
                    >
                      {hotel.ratingFeedback}
                    </Typography>
                  </>
                )}
                <Typography variant="body2" component="p" ml={1.5}>
                  ({hotel.reviews} reviews)
                </Typography>
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
                <Typography variant="body2" component="p">
                  {hotel.district} • {hotel.distanceFromCenter} miles from
                  center
                </Typography>
              </Box>
              {hotel.freeCancellation && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                  <Typography variant="body2">Free cancellation</Typography>
                </Box>
              )}
              {hotel.freeWifi && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                  <Typography variant="body2">Free Internet Access</Typography>
                </Box>
              )}
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
                  ${hotel.price}
                </Typography>
              </Box>
              <Button size="small" variant="contained" href="#">
                See Availability
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}
