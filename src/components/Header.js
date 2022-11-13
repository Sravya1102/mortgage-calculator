import { Box, Typography } from "@mui/material";
import React from "react";

const messages = {
  mortCalculator: "Mortgage Calculator"
}

const styles = {
  title: { color: "black", fontSize: "40px", fontWeight: "bold" }
}

const Header = () => {
  return (
    <Box>
      <Typography
        sx={styles.title}
      >
        {messages.mortCalculator}
      </Typography>
      <hr />
    </Box>
  );
};
export default Header;
