import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import fetchReservationDetails from "../api/fetchReservationDetails";
import Loading from "./Loading";
import Error from "./Error";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetchReservationDetails()
      .then((returnMessage) => {
        setReservations(returnMessage.data);
        setIsFetching(false);
        setError(false);
      })
      .catch((error) => {
        setIsFetching(false);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginLeft: "0px", marginRight: "0px" }}>
      {isFetching ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : reservations.length === 0 ? (
        <Typography variant="h5" color="black">
          It appears that you haven't made any reservations yet.
        </Typography>
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
          >
            Reservations
          </Typography>

          {reservations.map((reservation) => {
            return (
              <Table key={reservation.id} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell width="40%"></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Check in</TableCell>
                    <TableCell>{reservation.checkin}</TableCell>
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
                    <TableCell>Location</TableCell>
                    <TableCell>{reservation.address}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Link
                        component={ReactRouterLink}
                        to={`/profile/reservations/${reservation._id}`}
                      >
                        See details
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            );
          })}
        </Box>
      )}
    </Container>
  );
}
