import React from "react";
import { Box } from "@mui/material";

function Tag({ tag }) {
  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: "7px",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {tag}
    </Box>
  );
}

export default Tag;
