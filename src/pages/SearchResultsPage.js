import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import SearchResultsCard from "../components/SearchResultsCard";

const hotelsList = [
  {
    name: "Royalton New York",
    id: 1,
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/205408681.jpg?k=bfdeb2f418112b7ad30a539e03193030612743db57d5c17b86fc60741ff08aa8&o=&hp=1",
    district: "Manhattan",
    rating: 8.3,
    ratingFeedback: "Very Good",
    reviews: 675,
    distanceFromCenter: 2.3,
    price: 270,
    freeCancellation: true,
    freeWifi: true,
  },
  {
    name: "The Standard, High Line New York",
    id: 2,
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59767031.jpg?k=c0df0ea4ecbfc5130eaec6877e11343636677e01d3dc922725bbf1838fa61a47&o=&hp=1",
    district: "Greenwich Village, New York",
    rating: 8.7,
    ratingFeedback: "Excellent",
    reviews: 820,
    distanceFromCenter: 2.3,
    price: 347,
    freeCancellation: true,
    freeWifi: false,
  },
  {
    name: "Royalton New York",
    id: 3,
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/205408681.jpg?k=bfdeb2f418112b7ad30a539e03193030612743db57d5c17b86fc60741ff08aa8&o=&hp=1",
    district: "Manhattan",
    rating: 8.3,
    ratingFeedback: "Very Good",
    reviews: 675,
    distanceFromCenter: 2.3,
    price: 270,
    freeCancellation: true,
    freeWifi: true,
  },
  {
    name: "The Standard, High Line New York",
    id: 4,
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59767031.jpg?k=c0df0ea4ecbfc5130eaec6877e11343636677e01d3dc922725bbf1838fa61a47&o=&hp=1",
    district: "Greenwich Village, New York",
    rating: 8.7,
    ratingFeedback: "Excellent",
    reviews: 675,
    distanceFromCenter: 2.3,
    price: 347,
    freeCancellation: true,
    freeWifi: true,
  },
  {
    name: "The Standard, High Line New York",
    id: 5,
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59767031.jpg?k=c0df0ea4ecbfc5130eaec6877e11343636677e01d3dc922725bbf1838fa61a47&o=&hp=1",
    district: "Greenwich Village, New York",
    rating: 8.7,
    ratingFeedback: "Excellent",
    reviews: 675,
    distanceFromCenter: 2.3,
    price: 347,
    freeCancellation: true,
    freeWifi: true,
  },
  {
    name: "Royalton New York",
    id: 1,
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/205408681.jpg?k=bfdeb2f418112b7ad30a539e03193030612743db57d5c17b86fc60741ff08aa8&o=&hp=1",
    district: "Manhattan",
    rating: 8.7,
    ratingFeedback: "Excellent",
    reviews: 675,
    distanceFromCenter: 2.3,
    price: 270,
    freeCancellation: true,
    freeWifi: true,
  },
];

const searchCity = "New York";
const hotelsFound = hotelsList.length;

export default function SearchResultsPage() {
  return (
    <Container sx={{ px: { xs: 0.5, sm: 2, md: 3 } }}>
      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: 2, fontSize: { xs: "1.2rem" } }}
      >
        {searchCity}: {hotelsFound} hotels
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {hotelsList.map((hotel) => {
          return <SearchResultsCard hotel={hotel} key={hotel.id} />;
        })}
      </Grid>
    </Container>
  );
}
