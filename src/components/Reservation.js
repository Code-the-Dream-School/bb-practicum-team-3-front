import * as React from "react";
import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import fetchReservationDetails from "../api/fetchReservationDetails";
import Loading from "../components/Loading";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Reservation() {
  const [reservations, setReservations] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchReservationDetails().then((returnMessage) => {
      setReservations(returnMessage.data);
      setIsFetching(false);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        marginTop: "100px",
        marginBottom: "50px",
      }}
    >
      {isFetching ? (
        <Loading />
      ) : reservations.length === 0 ? (
        <Typography> You do not have a reservation</Typography>
      ) : (
        <>
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
                          to={`/reservation/${reservation._id}`}
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
        </>
      )}
    </Box>
  );
}
