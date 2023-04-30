import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Rating,
  Card,
  CardHeader,
  Avatar,
  Button,
  Modal,
} from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

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
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Reviews() {
  const [open, setOpen] = React.useState(false);
  const [selectedReview, setSelectedReview] = React.useState(null);

  const handleOpen = (review) => {
    setSelectedReview(review);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h6" component="h2" fontWeight="600" py={2}>
        Reviews
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mb={7}
      >
        {reviews.map((review) => (
          <Grid item xs={12} sm={12} md={4}>
            <Card key={review.id} sx={{ height: 260 }}>
              <CardHeader
                avatar={<Avatar alt={review.name} src={review.avatar} />}
                titleTypographyProps={{ fontWeight: 600, fontSize: ".9rem" }}
                title={review.name}
                subheader={review.countrycode}
              />

              <Box sx={{ px: "16px" }}>
                <Rating
                  name="read-only"
                  value={review.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />

                <Typography variant="body1" sx={{ pb: 1 }}>
                  {review.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    maxHeight: "6em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {review.comment}
                </Typography>

                <Button
                  onClick={() => handleOpen(review)}
                  size="small"
                  sx={{ mt: 1 }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {selectedReview && (
            <Box display="flex">
              <Box flex="1">
                <CardHeader
                  sx={{ p: 0 }}
                  avatar={
                    <Avatar
                      alt={selectedReview.name}
                      src={selectedReview.avatar}
                    />
                  }
                  titleTypographyProps={{ fontWeight: 600, fontSize: "1rem" }}
                  title={selectedReview.name}
                  subheader={selectedReview.countrycode}
                />
              </Box>

              <Box flex="3">
                <Box display="flex">
                  <Rating
                    name="read-only"
                    value={selectedReview.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="body2" component="p" color="#6e6e6e">
                    Reviewed on {selectedReview.date}
                  </Typography>
                </Box>

                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontWeight="600"
                  sx={{ pb: 2 }}
                >
                  {selectedReview.title}
                </Typography>

                {selectedReview.comment && (
                  <Box display="flex">
                    <MoodIcon sx={{ width: 20, color: "green", mr: 0.5 }} />
                    <Typography
                      variant="body2"
                      component="p"
                      id="modal-modal-description"
                      sx={{ pb: 2 }}
                    >
                      {selectedReview.comment}
                    </Typography>
                  </Box>
                )}

                {selectedReview.cons && (
                  <Box display="flex">
                    <SentimentVeryDissatisfiedIcon
                      sx={{ width: 20, mr: 0.5 }}
                    />
                    <Typography variant="body2" component="p">
                      {selectedReview.cons}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}
