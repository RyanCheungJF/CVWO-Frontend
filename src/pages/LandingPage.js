import React from "react";
import {
  Box,
  Button,
  Container,
} from "@mui/material";
import useNavigation from "../hooks/useNavigation";

const inputStyles = {
  margin: 30,
};

function LandingPage() {
  return (
    <Container>
      <Box sx={{ mt: 1 }}>
        <Button style={inputStyles} variant="contained" onClick={useNavigation('/login-page')}>
          Log In
        </Button>
        <Button style={inputStyles} variant="contained" onClick={useNavigation('/signup-page')}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default LandingPage;
