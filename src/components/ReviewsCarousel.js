import React from "react";
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
    <Slider {...settings}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </Slider>
  );
}
