import React from "react";
import { useState, useEffect } from "react";
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

export default function PersonalDetails() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchPersonalDetails().then((returnMessage) => {
      setUser(returnMessage.user);
      setIsFetching(false);
    });
  }, []);

  return (
    <Container maxWidth="md">
      {isFetching ? (
        <Loading />
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
