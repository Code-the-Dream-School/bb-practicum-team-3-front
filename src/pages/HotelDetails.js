import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import HotelTitleInfo from "../components/HotelTitleInfo";
import HotelImageGallery from "../components/HotelImageGallery";
import GuestRating from "../components/GuestRating";
import TopAmenities from "../components/TopAmenities";
import Rooms from "../components/Rooms";
import ReviewsCarousel from "../components/ReviewsCarousel";
import AllAmenities from "../components/AllAmenities";
import Loading from "../components/Loading";
import Error from "../components/Error";
import fetchHotelDetails from "../api/fetchHotelDetails";
import fetchRooms from "../api/fetchRooms";
import { useLocation } from "react-router-dom";

export default function HotelDetails() {
  const location = useLocation();

  const [hotelData, setHotelData] = useState(null);
  const [mapPreview, setMapPreview] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hotelId = searchParams.get("hotelId");
    // const guestNumber = searchParams.get("guestNumber");
    // const roomNumber = searchParams.get("roomNumber");
    // const checkinDate = searchParams.get("checkinDate");
    // const checkoutDate = searchParams.get("checkoutDate");

    const searchData = {
      hotelId,
      //   guestNumber,
      //   roomNumber,
      //   checkinDate,
      //   checkoutDate,
    };

    fetchHotelDetails(searchData)
      .then((returnMessage) => {
        setHotelData(returnMessage.hotel_data);
        setPhotos(returnMessage.photos);
        setReviews(returnMessage.reviews);
        setMapPreview(returnMessage.map_preview);
        setIsFetching(false);
        setError(false);
      })
      .catch((error) => {
        setIsFetching(false);
      });

    fetchRooms().then((returnMessage) => {
      setRooms(returnMessage.data);
      setIsFetching(true);
    });
  }, []);

  return (
    <>
      <Header />
      <SearchForm />
      <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 2, md: 3 } }}>
        {isFetching ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <>
            <HotelTitleInfo
              name={hotelData.name}
              review_score={hotelData.review_score}
              review_score_word={hotelData.review_score_word}
              address={hotelData.address}
              city={hotelData.city}
              zip={hotelData.zip}
            />

            <HotelImageGallery photos={photos} />

            <Box>
              <Typography variant="h6" component="h2" fontWeight="600" py={2}>
                Overview
              </Typography>
              <Typography variant="body2" component="p">
                {hotelData.description_translations[0].description}
              </Typography>
            </Box>

            <Grid
              container
              rowSpacing={1}
              my={2}
              columnSpacing={{ xs: 1, sm: 2, md: 5 }}
            >
              <Grid item xs={4}>
                <GuestRating hotelData={hotelData} />
              </Grid>
              <Grid item xs={4}>
                <TopAmenities facilities={hotelData.hotel_facilities} />
              </Grid>
              <Grid item xs={4}>
                <Box mb={7}>
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight="600"
                    pb={2}
                  >
                    Neighborhood
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    mt={5}
                    sx={{ width: "100%", height: "220px", overflow: "hidden" }}
                  >
                    <img
                      src={mapPreview.map_preview_url}
                      alt={hotelData.name}
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Rooms rooms={rooms} />

            <ReviewsCarousel reviews={reviews.result} />

            <AllAmenities
              facilities={hotelData.hotel_facilities}
              name={hotelData.name}
            />
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}