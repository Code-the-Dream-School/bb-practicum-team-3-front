import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Reservations from "../components/Reservations";
import PersonalDetails from "../components/PersonalDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfileNav from "../components/UserProfileNav";

export default function UserProfilePage() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box display="flex" flexDirection="row" flexWrap="nowrap" width="100vw">
      <Header />
      {isMatch ? (
        <Box display="flex" flexDirection="column" align="center">
          <UserProfileNav isMatch={isMatch} />

          <Box
            sx={{
              height: "100vh",
              width: "100wh",
              ml: "50px",
              mr: "50px",
              align: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Routes>
              {/* <Route index element={<PersonalDetails />} /> */}
              <Route index path={`/personal`} element={<PersonalDetails />} />
              <Route path={`/reservations`} element={<Reservations />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
          >
            <UserProfileNav isMatch={isMatch} />

            <Box
              sx={{
                height: "100vh",
                width: "calc(100vw - 300px)",

                ml: "auto",
                mr: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Routes>
                <Route index element={<PersonalDetails />} />
                <Route path={`/personal`} element={<PersonalDetails />} />
                <Route path={`/reservations`} element={<Reservations />} />
              </Routes>
            </Box>
          </Box>
        </>
      )}
      <Footer />
    </Box>
  );
}
