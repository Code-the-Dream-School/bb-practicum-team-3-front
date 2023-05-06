import React from "react";
import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
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
    <>
      <Header />
      <Container maxWidth="xl" sx={{ px: { xs: 0.5, sm: 2, md: 3 } }}>
        {isMatch ? (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <UserProfileNav isMatch={isMatch} />

            <Routes>
              <Route index element={<PersonalDetails />} />
              <Route path={`/personal`} element={<PersonalDetails />} />
              <Route path={`/reservations`} element={<Reservations />} />
            </Routes>
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            justifyContent="center"
          >
            <UserProfileNav isMatch={isMatch} />

            <Routes>
              <Route index element={<PersonalDetails />} />
              <Route path={`/personal`} element={<PersonalDetails />} />
              <Route path={`/reservations`} element={<Reservations />} />
            </Routes>
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
}
