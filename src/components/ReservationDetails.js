import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useParams,
  useNavigate,
  Link as ReactRouterLink,
} from "react-router-dom";
import fetchDeleteReservation from "../api/fetchDeleteReservation";
import fetchSingleReservation from "../api/fetchSingleReservation";
import Loading from "./Loading";
import Error from "./Error";

export default function ReservationDetails() {
  const { reservationId } = useParams();

  const navigate = useNavigate();

  const [reservation, setReservation] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetchSingleReservation(reservationId)
      .then((returnMessage) => {
        setReservation(returnMessage.data);
        setIsFetching(false);
        setError(false);
      })
      .catch((error) => {
        setIsFetching(false);
      });
  }, [reservationId]);

  const onCancelReservationHandler = async () => {
    //await fetchDeleteReservation(reservationID);
    return navigate("/profile/reservations");
  };

  return (
    <Container maxWidth="md" sx={{ marginLeft: "0px", marginRight: "0px" }}>
      {isFetching ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            color="black"
            gutterBottom
            align="center"
            marginBottom="0px"
          >
            Reservation Details
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Check in</TableCell>
                <TableCell>{reservation.checkin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Check out</TableCell>
                <TableCell>{reservation.checkout}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nights</TableCell>
                <TableCell>{reservation.total_days}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Guests</TableCell>
                <TableCell>{reservation.total_guests}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rooms</TableCell>
                <TableCell>{reservation.total_rooms}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>{reservation.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Price</TableCell>
                <TableCell> {`$${reservation.total_price}`} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Booking number</TableCell>
                <TableCell>{reservation._id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Received</TableCell>
                <TableCell>{reservation.date_received}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            sx={{ marginTop: "16px", marginBottom: "50px" }}
          >
            <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={onCancelReservationHandler}
              sx={{ marginRight: "10px" }}
            >
              Cancel reservation
            </Button>

            <Button
              component={ReactRouterLink}
              color="primary"
              size="small"
              variant="text"
              to="/profile/reservations"
            >
              Return to reservation overview
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
}
