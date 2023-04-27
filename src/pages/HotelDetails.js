import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import HotelImageGallery from "../components/HotelImageGallery";
import Rooms from "../components/Rooms";
import Reviews from "../components/Reviews";
import {
  Container,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  LinearProgress,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const hotelData = {
  name: "Club Quarters Hotel Wacker at Michigan, Chicago",
  address: "75 East Wacker Drive, Chicago, IL 60601",
  review_score: "8.2",
  review_score_word: "Very good",
  review_number: 3216,
  overview:
    "With a stay at Club Quarters Hotel Wacker at Michigan, Chicago, you'll be centrally located in Chicago, steps from Chicago Riverwalk and 4 minutes by foot from Chicago Theatre. Featured amenities include a business center, express check-in, and express check-out. With a stay at Club Quarters Hotel Wacker at Michigan, Chicago, you'll be centrally located in Chicago, steps from Chicago Riverwalk and 4 minutes by foot from Chicago Theatre. Featured amenities include a business center, express check-in, and express check-out. With a stay at Club Quarters Hotel Wacker at Michigan, Chicago, you'll be centrally located in Chicago, steps from Chicago Riverwalk and 4 minutes by foot from Chicago Theatre. Featured amenities include a business center, express check-in, and express check-out. ",
  cleanliness_score: 8.5,
  staff_score: 8.1,
  location_score: 9.1,
  price: 1580,

  nights: 6,
};

export default function HotelDetails() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <SearchForm />
      <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 2, md: 3 } }}>
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
                          {hotelData.review_score}
                        </Typography>
                        <Typography
                          variant="subtitle2"
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
            <Typography
              variant="h5"
              component="h3"
              fontWeight="600"
              color="green"
            >
              {`$${hotelData.price.toLocaleString("en-US")}`}
            </Typography>
            <Typography variant="body2" component="p" mt={0} color={"grey"}>
              for {hotelData.nights}{" "}
              {hotelData.nights === 1 ? "night" : "nights"}
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

        <HotelImageGallery />

        <Typography variant="h6" component="h2" fontWeight="600">
          Overview
        </Typography>
        <Typography variant="body2" component="p">
          {hotelData.overview}
        </Typography>

        {/* Highlights */}
        <Grid
          container
          rowSpacing={1}
          my={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {/* Guest Rating */}
          <Grid item xs={4}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              mb="7px"
            >
              <Typography
                variant="h6"
                component="p"
                mr={0.8}
                px={0.7}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "secondary.main",
                  borderRadius: "5px",
                  width: "30px",
                  height: "30px",
                  textAlign: "center",
                }}
              >
                {hotelData.review_score}
              </Typography>
              <Typography variant="h6" component="h2" fontWeight="600">
                Guest Rating
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              pt="15px"
              pb="8px"
            >
              <Typography variant="body2" fontWeight="600">
                CLEANLINESS
              </Typography>
              <Typography variant="body1" fontWeight="600">
                {hotelData.cleanliness_score}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={hotelData.cleanliness_score * 10}
              color="secondary"
              sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              pt="15px"
              pb="8px"
            >
              <Typography variant="body2" fontWeight="600">
                STAFF
              </Typography>
              <Typography variant="body1" fontWeight="600">
                {hotelData.staff_score}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={hotelData.staff_score * 10}
              color="secondary"
              sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              pt="15px"
              pb="8px"
            >
              <Typography variant="body2" fontWeight="600">
                LOCATION
              </Typography>
              <Typography variant="body1" fontWeight="600">
                {hotelData.location_score}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={hotelData.location_score * 10}
              color="secondary"
              sx={{ height: "6px", borderRadius: "20px", bgcolor: "grey.300" }}
            />
          </Grid>

          {/* Top Amentities */}
          <Grid item xs={8}>
            <Typography variant="h6" component="h2" fontWeight="600">
              Top Amenities
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box
                sx={{
                  width: { xs: "100%", sm: "50%", md: "50%", lg: "50%" },
                }}
              >
                <CheckIcon sx={{ width: 18, color: "green", mr: 0.5 }} />
                <Typography variant="body2">Free cancellation</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "50%", md: "50%", lg: "50%" },
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>

        <Rooms />
        <Reviews />

        <Box>
          <Typography variant="h6" component="h2" fontWeight="600">
            Neighborhood
          </Typography>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2412259260723!2d-87.63034111310172!3d41.88766899067396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2caf03ab0b37%3A0xe2b4503278b3c840!2sClub%20Quarters%20Hotel%20Wacker%20at%20Michigan%2C%20Chicago!5e0!3m2!1sen!2sus!4v1682404134667!5m2!1sen!2sus"
              title="Hotel on the map"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
