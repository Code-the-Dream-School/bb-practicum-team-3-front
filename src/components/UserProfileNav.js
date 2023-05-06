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
    <Box
      sx={{
        height: "100%",
        width: "100%",
        maxWidth: "300px",
        ...(isMatch && {
          maxWidth: "100vw",
        }),
        mt: "80px",
        border: "solid 1px #d8d8d8",
        borderRadius: "8px",
      }}
    >
      {isMatch ? (
        <List>
          <ListItem
            component={Link}
            to={`/profile/personal`}
            sx={{
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
          <Divider />
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
      ) : (
        <List>
          <ListItem
            component={Link}
            to={`/profile/personal`}
            sx={{
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
          <Divider />
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
      )}
    </Box>
  );
}
