import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import useNavigation from "../hooks/useNavigation";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [redirect, setRedirect] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("email") === "" || data.get("password") === "") {
      setSignupError(true);
      setErrorMessage("Fields cannot be blank.");
      return;
    }

    await fetch(`${process.env.REACT_APP_API_KEY}api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    });
    setRedirect(true);
  };

  const navigate = useNavigate();
  if (redirect) {
    setRedirect(false);
    navigate("/login-page");
  }

  return (
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
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={signupError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={signupError}
                helperText={signupError ? errorMessage : ""}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Button variant="outlined" onClick={useNavigation("/login-page")}>
                Have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignupPage;
