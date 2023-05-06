import * as React from "react";
import { useState, useEffect } from "react";
import {
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
import Loading from "./Loading";

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
    <Box
      sx={{
        flexWrap: "wrap",
        marginTop: "100px",
        marginBottom: "50px",
        display: "inline-block",
        align: "center",
      }}
    >
      {isFetching ? (
        <Loading />
      ) : (
        <>
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
                  <TableCell>{user.firstName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Last Name:</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email:</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </>
      )}
    </Box>
  );
}
