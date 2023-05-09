import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import fetchSignin from "../api/fetchSignin";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  createTheme,
  ThemeProvider,
  Container,
  Typography,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  Link,
  Alert,
} from "@mui/material";

const theme = createTheme();

export default function SignIn() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const submissionData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    fetchSignin(submissionData).then((returnMessage) => {
      if (returnMessage.user) {
        if (location.state && location.state.redirectUrl) {
          // navigate back to the original URL with search params
          navigate(location.state.redirectUrl, { replace: true });
        } else {
          navigate("/");
        }
      } else {
        setErrorMessage(returnMessage.msg);
        setIsError(true);
      }
    });
  };

  const handleSignupClick = (event) => {
    event.preventDefault(); // prevent the default behavior of the link
    navigate("/signup", {
      state: { redirectUrl: location.state.redirectUrl },
      replace: true,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {isError ? (
              <Alert sx={{ marginBottom: "8px" }} severity="error">
                {errorMessage}
              </Alert>
            ) : null}
            <Grid container>
              <Grid item xs>
                <Link component={ReactRouterLink} to="/forgotpassword">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={ReactRouterLink} onClick={handleSignupClick}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
