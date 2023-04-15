import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  LinearProgress,
  Stack,
} from "@mui/material";
import SearchResultsCard from "../components/SearchResultsCard";
import fetchHotels from "../api/fetchHotels";
import { useLocation } from "react-router-dom";

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
      console.log("fetchHotelData", returnMessage.data);
    });
  }, [location.search]);

  return (
    <Container sx={{ px: { xs: 0.5, sm: 2, md: 3 } }}>
      {isFetching ? (
        <>
          <Typography
            variant="h5"
            component="h1"
            sx={{ mb: 2, fontSize: { xs: "1.2rem" } }}
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
          >
            {hotelData.results.map((hotel) => {
              return <SearchResultsCard hotel={hotel} key={hotel.id} />;
            })}
          </Grid>
        </>
      ) : (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <LinearProgress />
          <LinearProgress />
          <LinearProgress />
          <LinearProgress />
        </Stack>
      )}
    </Container>
  );
}
