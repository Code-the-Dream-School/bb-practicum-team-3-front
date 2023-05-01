import * as React from "react";
import {
  Container,
  Table,
  Typography,
  Box,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function createData(id, firstName, lastName, email) {
  return { id, firstName, lastName, email };
}

const rows = [
  createData(0, "First Name:", "Maryna"),
  createData(1, "Last Name:", "Radchenko"),
  createData(2, "Email:", "maryna.radchenko@gmail.com"),
];

export default function PersonalDetails() {
  return (
    <Container component="main">
      <Box
        sx={{
          flexWrap: "wrap",
          marginTop: "100px",
          marginBottom: "50px",
          display: "inline-block",
          align: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="primary"
          gutterBottom
          align="center"
        >
          Personal details
        </Typography>
        <AccountCircleIcon
          sx={{
            fontSize: 120,
            color: "grey",
            width: "100%",
            margin: "auto",
            pt: 2,
          }}
        />
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
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
}
