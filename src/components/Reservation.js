import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(id, checkin, nights, guests, hotel, city) {
  return { id, checkin, nights, guests, hotel, city };
}
const rows = [
  createData(0, "16 Mar, 2019", "12", "2", "La Quinta", "Orlando"),
  createData(1, "20 Mar, 2019", "1", "3", "La Quinta", "New York"),
  createData(2, "25 Mar, 2019", "3", "3", "La Quinta", "New York"),
];

export default function Reservation() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          flexWrap: "wrap",
          marginTop: "100px",
          marginBottom: "50px",
          display: "inline-block",
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
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Check-in</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Nights</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Guests</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Hotel</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.checkin}</TableCell>
                  <TableCell>{row.nights}</TableCell>
                  <TableCell>{row.guests}</TableCell>
                  <TableCell>{row.hotel}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>
                    <Link href="/reservation/:id">See details</Link>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
}
