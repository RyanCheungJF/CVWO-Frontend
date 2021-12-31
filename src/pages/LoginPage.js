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

function LoginPage() {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    });

    try {
      await res.json();
      setRedirect(true);
    } catch {
      console.log("err!");
    }
  };

  const navigate = useNavigate();
  if (redirect) {
    setRedirect(false);
    navigate("/all-page");
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                variant="outlined"
                onClick={useNavigation("/signup-page")}
              >
                Register here!
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
