import React from "react";
import { Grid, Container, Typography, Link, Box } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { popularDestinationImages } from "../assets/popularDestinationImages";

export default function PopularDestinationGrid() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        component="h1"
        fontWeight="bold"
        sx={{ mb: 2, fontSize: { xs: "1.6rem" } }}
      >
        Popular Destinations
      </Typography>
      <Grid container spacing={2} mb="80px">
        {popularDestinationImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link
              component={ReactRouterLink}
              to={`/searchresults?destination=${image.title}&guestNumber=1&roomNumber=2&checkinDate=null&checkoutDate=null`}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  border: "2px solid white",
                  "&:hover": {
                    border: "2px solid #FFD700",
                    borderRadius: "16px",
                  },
                }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "0px 16px 0px 16px",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      padding: "8px",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      margin: "0px",
                    }}
                  >
                    {image.title}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
