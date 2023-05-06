import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import People from "@mui/icons-material/People";
import { Link } from "react-router-dom";

export default function UserProfileNav({ isMatch }) {
  return (
    <>
      {isMatch ? (
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
              to={`/profile/personal`}
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
              to={`/profile/reservations`}
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
      ) : (
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
              to={`/profile/personal`}
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
              to={`/profile/reservations`}
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
      )}
    </>
  );
}
