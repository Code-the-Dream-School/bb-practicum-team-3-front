import React from "react";
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

  hotel_facilities_filtered: [
    "24-hour front desk",
    "Sauna",
    "Fitness centre",
    "Airport shuttle",
    "Heating",
    "Non-smoking rooms",
    "Express check-in/check-out",
    "Spa and wellness centre",
    "Cycling",
    "Sauna",
    "Luggage storage",
    "Indoor pool",
  ],
  hotel_facilities: [
    "Parking",
    "24-hour front desk",
    "Sauna",
    "Fitness centre",
    "Non-smoking rooms",
    "Airport shuttle",
    "Internet services",
    "Express check-in/check-out",
    "Spa and wellness centre",
    "Hot tub/Jacuzzi",
    "Cycling",
    "Heating",
    "Fax/photocopying",
    "Luggage storage",
    "WiFi",
    "Allergy-free room",
    "Indoor pool",
    "Free WiFi",
    "Non-smoking throughout",
    "Indoor pool (all year)",
    "Private check-in/check-out",
    "Daily housekeeping",
    "WiFi available in all areas",
    "Parking garage",
    "Heated pool",
    "Shallow end",
    "Fruits",
    "Airport pick up",
    "Airport drop off",
    "Steam room",
    "Fitness",
    "Yoga classes",
    "Fitness classes",
    "Fitness/spa locker rooms",
    "Swimming pool",
    "Pub crawls",
    "Aerobics",
    "Swimming Pool",
  ],
};

const reviews = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://picsum.photos/id/1/200/200",
    rating: 4,
    title: "Beautiful property",
    countrycode: "United States",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium arcu sit amet nibh lacinia, vel eleifend nulla bibendum. Nullam sodales hendrerit mauris, vitae consequat mi euismod vel.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt enim tincidunt enim tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "Nothing to complain, everything great",
    date: "2020-04-27",
  },
  {
    id: 3,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "",
    date: "2023-04-27",
  },
  {
    id: 4,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 5,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 3.5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 6,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },

  {
    id: 7,
    name: "John Doe",
    avatar: "https://picsum.photos/id/1/200/200",
    rating: 4,
    title: "Beautiful property",
    countrycode: "United States",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium arcu sit amet nibh lacinia, vel eleifend nulla bibendum. Nullam sodales hendrerit mauris, vitae consequat mi euismod vel.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 8,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt enim tincidunt enim tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "Nothing to complain, everything great",
    date: "2020-04-27",
  },
  {
    id: 9,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "",
    date: "2023-04-27",
  },
  {
    id: 10,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 11,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 3.5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 12,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 13,
    name: "John Doe",
    avatar: "https://picsum.photos/id/1/200/200",
    rating: 4,
    title: "Beautiful property",
    countrycode: "United States",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium arcu sit amet nibh lacinia, vel eleifend nulla bibendum. Nullam sodales hendrerit mauris, vitae consequat mi euismod vel.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 14,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt enim tincidunt enim tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "Nothing to complain, everything great",
    date: "2020-04-27",
  },
  {
    id: 15,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "",
    date: "2023-04-27",
  },
  {
    id: 16,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 17,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 3.5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 18,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },

  {
    id: 19,
    name: "John Doe",
    avatar: "https://picsum.photos/id/1/200/200",
    rating: 4,
    title: "Beautiful property",
    countrycode: "United States",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium arcu sit amet nibh lacinia, vel eleifend nulla bibendum. Nullam sodales hendrerit mauris, vitae consequat mi euismod vel.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 20,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt enim tincidunt enim tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "Nothing to complain, everything great",
    date: "2020-04-27",
  },
  {
    id: 21,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "",
    date: "2023-04-27",
  },
  {
    id: 22,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 23,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 3.5,
    title: "Wonderful weekend!",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 24,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
  {
    id: 25,
    name: "Jane Smith",
    avatar: "https://picsum.photos/id/2/200/200",
    rating: 5,
    title: "Exceptional",
    countrycode: "United States",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam consequat magna eu lectus mattis, vel euismod nibh dignissim. Pellentesque consectetur enim ut ligula ultrices, vel scelerisque enim tincidunt.",
    cons: "small rooms.",
    date: "2023-04-27",
  },
];

export default function HotelDetails() {
  return (
    <>
      <Header />
      <SearchForm />
      <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 2, md: 3 } }}>
        <HotelTitleInfo hotelData={hotelData} />
        <HotelImageGallery />

        {/* Overview */}
        <Box>
          <Typography variant="h6" component="h2" fontWeight="600" py={2}>
            Overview
          </Typography>
          <Typography variant="body2" component="p">
            {hotelData.overview}
          </Typography>
        </Box>

        {/* Highlights */}
        <Grid
          container
          rowSpacing={1}
          my={2}
          columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        >
          {/* Guest Rating */}
          <Grid item xs={4}>
            <GuestRating hotelData={hotelData} />
          </Grid>

          {/* Top Amentities */}
          <Grid item xs={8}>
            <TopAmenities hotelData={hotelData} />
          </Grid>
        </Grid>

        <Rooms />
        <ReviewsCarousel reviews={reviews} />
        <AllAmenities hotelData={hotelData} />

        {/* Hotel on the map */}
        <Box mb={7}>
          <Typography variant="h6" component="h2" fontWeight="600" pb={2}>
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
