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
import { useNavigate } from "react-router-dom";
import fetchDeleteReservation from "../api/fetchDeleteReservation";
import fetchSingleReservation from "../api/fetchSingleReservation";
import { useState, useEffect } from "react";
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

function preventDefault(event) {
  event.preventDefault();
}

export default function ReservationDetails() {
  const [reservation, setReservation] = useState(null);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchSingleReservation().then((returnMessage) => {
      setReservation(returnMessage.data);
      setIsFetching(false);
    });
  }, []);

  const navigate = useNavigate();

  const onCancelReservationHandler = async () => {
    //await fetchDeleteReservation(reservationID);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Button
        color="primary"
        variant="outlined"
        href="#"
        onClick={() => navigate(-1)}
        sx={{ mt: 3 }}
      >
        Return to reservation overview
      </Button>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="primary"
          gutterBottom
          align="center"
        >
          Reservation details
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
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

          <Button
            color="primary"
            variant="contained"
            href="#"
            onClick={onCancelReservationHandler}
            sx={{ mt: 6 }}
          >
            Cancel reservation
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
