import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

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
import fetchUserToken from "../api/fetchUserToken";
import fetchCreateReservation from "../api/fetchCreateReservation";

export default function HotelDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const [hotelData, setHotelData] = useState(null);
  const [mapPreview, setMapPreview] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [guestRating, setGuestRating] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [rooms, setRooms] = useState(null);

  const [totalRooms, setTotalRooms] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [roomTotalPriceAndRoomNum, setRoomTotalPriceAndRoomNum] = useState([]);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hotelId = searchParams.get("hotelId");
    const guestNumber = searchParams.get("guestNumber");
    const checkinDate = searchParams.get("checkinDate");
    const checkoutDate = searchParams.get("checkoutDate");

    const searchData = {
      hotelId,
      guestNumber,
      checkinDate,
      checkoutDate,
    };

    fetchHotelDetails(searchData)
      .then((returnMessage) => {
        setHotelData(returnMessage.hotel_data);
        setPhotos(returnMessage.photos);
        setGuestRating(returnMessage.review_scores);
        setReviews(returnMessage.reviews);
        setMapPreview(returnMessage.map_preview);
        setIsFetching(false);
        setError(false);
      })
      .catch((error) => {
        setIsFetching(false);
      });

    fetchRooms(searchData).then((returnMessage) => {
      setRooms(returnMessage.data);
      setIsFetching(true);
    });

    fetchUserToken().then((data) => {
      if (data.token) {
        setIsUserLoggedIn(true);
      }
    });
  }, [location.search]);

  useEffect(() => {
    const totalRooms = roomTotalPriceAndRoomNum.reduce(
      (total, room) => total + room.num_of_rooms,
      0
    );
    setTotalRooms(totalRooms);

    const totalPrice = roomTotalPriceAndRoomNum.reduce(
      (total, room) => total + room.price * room.num_of_rooms,
      0
    );
    setTotalPrice(totalPrice);
  }, [roomTotalPriceAndRoomNum]);

  const handleSelectedRooms = (id, price, num_of_rooms) => {
    const roomIndex = roomTotalPriceAndRoomNum.findIndex(
      (room) => room.id === id
    );

    if (roomIndex !== -1) {
      const updatedRooms = roomTotalPriceAndRoomNum.map((room) =>
        room.id === id ? { ...room, num_of_rooms } : room
      );

      setRoomTotalPriceAndRoomNum(updatedRooms);
    } else {
      const room = { id, price, num_of_rooms };
      setRoomTotalPriceAndRoomNum([...roomTotalPriceAndRoomNum, room]);
    }
  };

  const handleReserve = async () => {
    const reservationDetails = {
      checkin: rooms.checkin_date,
      checkout: rooms.checkout_date,
      total_days: rooms.days_of_stay,
      total_guests: rooms.guestNumber,
      total_rooms: totalRooms,
      total_price: totalPrice.toFixed(2),
      address: hotelData.address + ", " + hotelData.city + ", " + hotelData.zip,
      date_received: new Date().toISOString().slice(0, 10),
    };

    if (isUserLoggedIn) {
      console.log(reservationDetails);
      await fetchCreateReservation(reservationDetails).then((returnMessage) => {
        if (returnMessage.data) {
          navigate(`/profile/reservations/${returnMessage.data._id}`);
        }
      });
    } else {
      // If user is not authenticated, redirect to signin page with redirect prop
      const currentUrlWithSearchParams = `${window.location.pathname}${window.location.search}`;
      navigate("/signin", {
        state: { redirectUrl: currentUrlWithSearchParams },
      });
    }
  };

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
              days_of_stay={rooms.days_of_stay}
              price={rooms.rooms[0].price}
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
              mt={2}
              mb={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={4}>
                <GuestRating
                  reviewScore={hotelData.review_score}
                  cleanliness={guestRating.cleanliness_score}
                  comfort={guestRating.comfort_score}
                  staff={guestRating.staff_score}
                  location={guestRating.location_score}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <TopAmenities facilities={hotelData.hotel_facilities} />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight="600"
                    sx={{
                      pb: { xs: 2, sm: 2, md: 6 },
                      pt: { xs: 2, sm: 4, md: 2 },
                    }}
                  >
                    Neighborhood
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    sx={{
                      width: "100%",
                      height: { sm: "100%", md: "193px" },
                      overflow: "hidden",
                      mt: { sm: 0.3, md: 0, lg: 0 },
                    }}
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

            <Rooms
              rooms={rooms}
              hotelId={hotelData.hotel_id}
              totalRooms={totalRooms}
              totalPrice={totalPrice}
              guestNumber={rooms.guestNumber}
              handleSelectedRooms={handleSelectedRooms}
              handleReserve={handleReserve}
            />

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
