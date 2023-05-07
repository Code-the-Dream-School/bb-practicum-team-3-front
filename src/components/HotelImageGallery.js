import * as React from "react";
import {
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

function srcset(image, size, rows, cols) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HotelImageGallery({ photos }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const restOfPhotos = photos.slice(1, 5);

  return (
    <>
      {isMatch ? (
        <Box>
          <img
            src={photos[0].url_max}
            alt="main photo"
            loading="lazy"
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: "400px",
            }}
          />
        </Box>
      ) : (
        <ImageList
          sx={{ width: "100%", height: 504 }}
          variant="quilted"
          cols={4}
          rowHeight={250}
        >
          <ImageListItem key={photos[0].photo_id} cols={2} rows={2}>
            <img
              {...srcset(photos[0].url_max, 121, 2, 2)}
              alt={"main photo"}
              loading="lazy"
            />
          </ImageListItem>
          {restOfPhotos.map((photo) => (
            <ImageListItem
              key={photo.photo_id}
              // cols={1}
              // rows={1}
            >
              <img
                {...srcset(photo.url_max, 121, 1, 1)}
                alt={photo.photo_id}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  );
}
