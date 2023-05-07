import React, { useState, useEffect } from "react";
import {
  Table,
  Typography,
  Box,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import fetchPersonalDetails from "../api/fetchPersonalDetails";
import Loading from "../components/Loading";
import Error from "./Error";

export default function PersonalDetails() {
  const [user, setUser] = useState(null);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetchPersonalDetails()
      .then((returnMessage) => {
        setUser(returnMessage.user);
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
            Personal Details
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
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>{user.firstName}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Last Name</TableCell>
                <TableCell>{user.lastName}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
    </Container>
  );
}
