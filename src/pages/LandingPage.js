import { Button, Container, Grid } from "@mui/material";
import useNavigation from "../hooks/useNavigation";
import CreateIcon from "@mui/icons-material/Create";
import LoginIcon from "@mui/icons-material/Login";

const containerStyles = {
  border: "solid",
  minWidth: "100%",
  height: "100vh",
};

const gridStyles = {
  direction: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  height: "100%"
}

const inputStyles = {
  margin: 30,
};

function LandingPage() {
  return (
    <Container style={containerStyles}>
      <Grid
        container
        style={gridStyles}
      >
        <Button
          style={inputStyles}
          variant="contained"
          startIcon={<LoginIcon />}
          onClick={useNavigation("/login-page")}
        >
          Log In
        </Button>
        <Button
          style={inputStyles}
          variant="contained"
          startIcon={<CreateIcon />}
          onClick={useNavigation("/signup-page")}
        >
          Sign Up
        </Button>
      </Grid>
    </Container>
  );
}

export default LandingPage;
