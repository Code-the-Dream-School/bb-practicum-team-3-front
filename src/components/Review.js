import React, { useState } from "react";
import {
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
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  m: "auto",
};

export default function Review({ review }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const handleModalOpen = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <Card key={review.id} sx={{ height: 260, m: 1 }}>
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
            onClick={() => handleModalOpen(review)}
            size="small"
            sx={{ mt: 1 }}
          >
            Read More
          </Button>
        </Box>
      </Card>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
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
