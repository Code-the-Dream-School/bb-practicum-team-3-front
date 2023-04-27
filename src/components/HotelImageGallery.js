import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HotelImageGallery() {
  return (
    <ImageList
      sx={{ width: "100%", height: 504 }}
      variant="quilted"
      cols={4}
      rowHeight={250}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://www.kayak.com/rimg/himg/27/ff/9a/leonardo-1077052-EXTERIOR-WACKER_0168_O-963859.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.kayak.com/rimg/himg/55/6c/80/leonardo-2712417-CLUB-LIVING-ROOM_CQ_WACKER_0642_O-750096.jpg",
    title: "Burger",
  },
  {
    img: "https://www.kayak.com/rimg/himg/f6/96/d9/leonardo-1077052-LOBBY_CQ_WACKER_0441_O-803377.jpg",
    title: "Camera",
  },
  {
    img: "https://www.kayak.com/rimg/himg/7e/af/99/expediav2-33448-dde95f-895335.jpg",
    title: "Coffee",
  },
  {
    img: "https://www.kayak.com/rimg/himg/03/7c/40/leonardo-1077052-1012-DELUXE-STUDIO-CORP-APARTMENT_CQ_WACKER_0359_O-506050.jpg",
    title: "Hats",
  },
];
