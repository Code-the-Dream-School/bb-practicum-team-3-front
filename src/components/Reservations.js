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

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchReservationDetails().then((returnMessage) => {
      setReservations(returnMessage.data);
      setIsFetching(false);
    });
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginLeft: "0px", marginRight: "0px" }}>
      {isFetching ? (
        <Loading />
      ) : reservations.length === 0 ? (
        <Typography> You do not have a reservation</Typography>
      ) : (
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
          >
            Reservations
          </Typography>

          {reservations.map((reservation) => {
            return (
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Check in:</TableCell>
                    <TableCell>{reservation.checkin}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nights:</TableCell>
                    <TableCell>{reservation.total_days}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Guests:</TableCell>
                    <TableCell>{reservation.total_guests}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Location:</TableCell>
                    <TableCell>{reservation.address}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Link
                        component={ReactRouterLink}
                        to={`/reservations/${reservation._id}`}
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
