import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import fetchHotels from "../api/fetchHotels";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import SearchResultsCard from "../components/SearchResultsCard";
import Loading from "../components/Loading";

export default function SearchResultsPage() {
  const location = useLocation();
  const [hotelData, setHotelData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const destination = searchParams.get("destination");
    const guestNumber = searchParams.get("guestNumber");
    const roomNumber = searchParams.get("roomNumber");
    const checkinDate = searchParams.get("checkinDate");
    const checkoutDate = searchParams.get("checkoutDate");

    const searchData = {
      destination,
      guestNumber,
      roomNumber,
      checkinDate,
      checkoutDate,
    };

    fetchHotels(searchData).then((returnMessage) => {
      setHotelData(returnMessage.data);
      setIsFetching(true);
    });
  }, [location.search]);

  return (
    <Box>
      <Header />
      <SearchForm />

      <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 2, md: 3 } }}>
        {isFetching ? (
          <>
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
              sx={{ mb: 2, fontSize: { xs: "1.6rem" } }}
            >
              {hotelData.destinationName
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}
              : {hotelData.count} hotels
            </Typography>

            <Grid
              container
              rowSpacing={{ xs: 2, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              mb={"80px"}
            >
              {hotelData.results.map((hotel) => {
                return <SearchResultsCard hotel={hotel} key={hotel.id} />;
              })}
            </Grid>
          </>
        ) : (
          <Loading />
        )}
      </Container>
      <Footer />
    </Box>
  );
}
