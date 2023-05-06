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
import Loading from "../components/Loading";

function createData(id, item, details) {
  return { id, item, details };
}

const rows = [
  createData(0, "Check-in:", "2023-09-30"),
  createData(1, "Check-out:", "2023-10-01"),
  createData(2, "Length of stay:", "3"),
  createData(3, "Total guests:", "2"),
  createData(4, "Total units:", "1"),
  createData(5, "Hotel:", "Hilton"),
  createData(6, "Location:", ""),
  createData(7, "Booking number:", "1234567"),
  createData(7, "Total price:", "567.90"),
];

export default function ReservationDetails() {
  const { reservationId } = useParams();

  const navigate = useNavigate();

  const [reservation, setReservation] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchSingleReservation(reservationId).then((returnMessage) => {
      setReservation(returnMessage.data);
      setIsFetching(false);
    });
  }, [reservationId]);

  const onCancelReservationHandler = async () => {
    //await fetchDeleteReservation(reservationID);
    return navigate("/profile/reservations");
  };

  return (
    <Container maxWidth="md" sx={{ marginLeft: "0px", marginRight: "0px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          marginTop: "80px",
          marginBottom: "50px",
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

        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.details}</TableCell>
              </TableRow>
            ))}
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
    </Container>
  );
}
