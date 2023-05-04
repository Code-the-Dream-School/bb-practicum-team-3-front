import * as React from "react";
import { useState, useEffect } from "react";
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
import fetchPersonalDetails from "../api/fetchPersonalDetails";

export default function PersonalDetails() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const fillData = async () => {
      const user = (await fetchPersonalDetails()).user;
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    };
    fillData();
  });

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
              <TableRow>
                <TableCell>First Name:</TableCell>
                <TableCell>{firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Last Name:</TableCell>
                <TableCell>{lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email:</TableCell>
                <TableCell>{email}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
}
