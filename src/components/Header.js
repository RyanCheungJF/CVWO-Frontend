import React from "react";
import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";
import useNavigation from "../hooks/useNavigation";
import { useNavigate } from "react-router-dom";

const linkStyles = {
  margin: 20,
};

function Header() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    navigate("/login-page");
  };

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Grid container justifyContent="center">
            <Grid item>
              <Button
                style={linkStyles}
                variant="text"
                onClick={useNavigation("/all-page")}
              >
                All Tasks
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={linkStyles}
                variant="text"
                onClick={useNavigation("/incomplete-page")}
              >
                Incomplete Tasks
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={linkStyles}
                variant="text"
                onClick={useNavigation("/completed-page")}
              >
                Completed Tasks
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={linkStyles}
                variant="text"
                onClick={useNavigation("/create-page")}
              >
                Create Task
              </Button>
            </Grid>
          </Grid>
          <Button variant="contained" color="inherit" onClick={handleLogout}>
            LogOut
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
