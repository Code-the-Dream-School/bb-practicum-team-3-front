import React from "react";
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemIcon,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Reservation from "../components/Reservation";
import PersonalDetails from "../components/PersonalDeatails";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import { useLocation } from "react-router-dom";
import People from "@mui/icons-material/People";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";

export default function UserProfilePage() {
  //const { pathname } = useLocation();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container>
      <Header />
      {isMatch ? (
        <>
          <Grid item xs={12}>
            <Box
              sx={{
                bgcolor: "grey.200",
                height: "15vh",
                mt: 10,
                alignItems: "center",
              }}
            >
              <List>
                <ListItem component={Link} to={`/profile/personal-details`}>
                  <ListItemText
                    primary="Personal Details"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body1",
                      fontSize: 20,
                    }}
                  />
                </ListItem>
                <ListItem component={Link} to={`/profile/reservation-details`}>
                  <ListItemText
                    primary="Reservation Details"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body1",
                      fontSize: 20,
                    }}
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ height: "100vh" }}>
              <Routes>
                <Route index element={<PersonalDetails />} />

                <Route
                  path={`/personal-details`}
                  element={<PersonalDetails />}
                />
                <Route
                  path={`/reservation-details`}
                  element={<Reservation />}
                />
              </Routes>
            </Box>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={2}>
            <Box sx={{ bgcolor: "grey.200", height: "100vh", mt: 7 }}>
              <List>
                <ListItem
                  component={Link}
                  to={`/profile/personal-details`}
                  sx={{ mt: 5 }}
                >
                  <ListItemIcon sx={{ fontSize: 20 }}>
                    <People />
                  </ListItemIcon>
                  <ListItemText
                    primary="Personal Details"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body1",
                      fontSize: 20,
                    }}
                  />
                </ListItem>
                <ListItem component={Link} to={`/profile/reservation-details`}>
                  <ListItemIcon sx={{ fontSize: 20 }}>
                    <BedroomParentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reservation Details"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body1",
                      fontSize: 20,
                    }}
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box sx={{ height: "100vh" }}>
              <Routes>
                <Route index element={<PersonalDetails />} />

                <Route
                  path={`/personal-details`}
                  element={<PersonalDetails />}
                />
                <Route
                  path={`/reservation-details`}
                  element={<Reservation />}
                />
              </Routes>
            </Box>
          </Grid>
        </>
      )}
      <Footer />
    </Grid>
  );
}
