import React from "react";
import { Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";

export default function ReviewsCarousel({ reviews }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Grid container mb={7}>
      <Typography variant="h6" component="h2" fontWeight="600" pb={2}>
        Reviews
      </Typography>
      <Grid item xs={12} md={12} lg={12}>
        <Slider {...settings}>
          {reviews.map((review) => (
            <Review key={review.review_id} review={review} />
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
}
