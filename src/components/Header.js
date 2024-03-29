import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import fetchUserToken from "../api/fetchUserToken";
import fetchLogout from "../api/fetchLogout";

export default function Header() {
  const navigate = useNavigate();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetchUserToken().then((data) => {
      if (data.token) {
        setIsUserLoggedIn(true);
      }
    });
  }, []);

  const handleLogout = async () => {
    fetchLogout().then((returnMessage) => {
      if (returnMessage.msg) {
        setIsUserLoggedIn(false);
        return navigate("/");
      }
    });
  };

  return (
    <AppBar sx={{ background: "#063970" }}>
      <Toolbar>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            paddingLeft: "2%",
            transition: "all 0.333333s ease-out",
            transform: "translate(0px, 0px)",
            "&:hover": {
              transform: "translate(0px, -4px)",
            },
          }}
        >
          <Link
            component={ReactRouterLink}
            to="/"
            underline="none"
            color="#fff"
          >
            StayFinder
          </Link>
        </Typography>

        {isMatch ? (
          <>
            <MenuIcon
              sx={{
                display: {
                  xs: "block",
                  lg: "none",
                },
                cursor: "pointer",
                color: "#fff",
                ml: "auto",
              }}
              onClick={() => setOpenMobileMenu(true)}
            />

            <Drawer
              anchor="left"
              open={openMobileMenu}
              onClose={() => setOpenMobileMenu(false)}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 250,
                  backgroundColor: "#2461a6",
                  height: "100%",
                  py: 3,
                  px: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                role="presentation"
                onClick={() => setOpenMobileMenu(false)}
                onKeyDown={() => setOpenMobileMenu(false)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  {isUserLoggedIn ? (
                    <>
                      <Link
                        component={ReactRouterLink}
                        to="/profile"
                        underline="none"
                        color="#fff"
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                        }}
                      >
                        PROFILE
                      </Link>
                      <Link
                        component={Button}
                        onClick={handleLogout}
                        underline="none"
                        color="#fff"
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                        }}
                      >
                        LOGOUT
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        component={ReactRouterLink}
                        to="/signin"
                        underline="none"
                        color="#fff"
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                        }}
                      >
                        LOGIN
                      </Link>
                      <Link
                        component={ReactRouterLink}
                        to="/signup"
                        underline="none"
                        color="#fff"
                        sx={{
                          fontWeight: "500",
                          fontSize: "20px",
                        }}
                      >
                        SIGN UP
                      </Link>
                    </>
                  )}
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "500",
                    cursor: "pointer",
                    position: "absolute",
                    bottom: "14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  &#169; StayFinder
                </Typography>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            {isUserLoggedIn ? (
              <>
                <Button
                  component={ReactRouterLink}
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  to="/profile"
                >
                  PROFILE
                </Button>

                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  onClick={handleLogout}
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={ReactRouterLink}
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  to="/signin"
                >
                  LOGIN
                </Button>

                <Button
                  component={ReactRouterLink}
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  to="/signup"
                >
                  SIGN UP
                </Button>
              </>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
