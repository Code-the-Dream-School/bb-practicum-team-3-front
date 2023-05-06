import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemIcon,
  Divider,
} from "@mui/material";
import People from "@mui/icons-material/People";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import { Link, Route, Routes } from "react-router-dom";
import Reservation from "../components/Reservation";
import PersonalDetails from "../components/PersonalDeatails";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UserProfilePage() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box display="flex" flexDirection="row" flexWrap="nowrap" width="100vw">
      <Header />
      {isMatch ? (
        <Box display="flex" flexDirection="column" align="center">
          <Box
            display="flex"
            flexDirection="column"
            width="100vw"
            //maxwidth="600px"
            sx={{
              bgcolor: "#F7E2AE",
              height: "15vh",
              mt: 6,
            }}
          >
            <List>
              <ListItem
                component={Link}
                to={`/profile/personal-details`}
                sx={{ paddingBottom: 1, paddingTop: 1 }}
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
              <Divider />
              <ListItem
                component={Link}
                to={`/profile/reservation-details`}
                sx={{ paddingBottom: 3, paddingTop: 1 }}
              >
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
              <Route
                index
                path={`/personal-details`}
                element={<PersonalDetails />}
              />
              <Route path={`/reservation-details`} element={<Reservation />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
          >
            <Box
              sx={{
                bgcolor: "#F7E2AE",
                height: "100vh",
                mt: 7,
                width: "100%",
                minWidth: "200px",
                maxWidth: "300px",
                mr: "16px",
              }}
            >
              <List>
                <ListItem
                  component={Link}
                  to={`/profile/personal-details`}
                  sx={{
                    mt: 5,
                    "&:hover": {
                      bgcolor: "#F7CD8F",
                    },
                  }}
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
                <ListItem
                  component={Link}
                  to={`/profile/reservation-details`}
                  sx={{
                    "&:hover": {
                      bgcolor: "#F7CD8F",
                    },
                  }}
                >
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
          </Box>
        </>
      )}
      <Footer />
    </Box>
  );
}
