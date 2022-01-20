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

function LoginPage({ setTasks, setUserid }) {
  const [redirect, setRedirect] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState({
    state: false,
    text: "Sign In",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("email") === "" || data.get("password") === "") {
      setLoginError(true);
      setErrorMessage("Fields cannot be blank.");
      return;
    }

    setLoading({ state: true, text: "Loading..." });
    const res = await fetch(`${process.env.REACT_APP_API_KEY}api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    });

    try {
      const userBody = await res.json();
      if (userBody.message === "Success") {
        setUserid(userBody.userid);
        const res = await fetch(
          `${process.env.REACT_APP_API_KEY}api/task/${userBody.userid}`,
          {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );
        const content = await res.json();
        const arr = [];
        for (let i = 0; i < content.length; i++) {
          const task = {
            name: content[i].name,
            desc: content[i].desc,
            completed: content[i].status,
            tags: content[i].tag,
            id: content[i].id,
          };
          arr.push(task);
        }
        setTasks(arr);
        setRedirect(true);
      } else {
        throw "Email and Password do not match!";
      }
    } catch (err) {
      setLoginError(true);
      setErrorMessage(err);
    } finally {
      setLoading({ state: false, text: "Sign in" });
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
            error={loginError}
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
            error={loginError}
            helperText={loginError ? errorMessage : ""}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading.state}
          >
            {loading.text}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                variant="outlined"
                onClick={useNavigation("/signup-page")}
                disabled={loading.state}
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
