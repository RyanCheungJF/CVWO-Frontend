import React from "react";
import { AppBar, Button, Container, Grid, Toolbar } from "@mui/material";
import useNavigation from "../hooks/useNavigation";

const linkStyles = {
  margin: 30,
};

function Header() {
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
