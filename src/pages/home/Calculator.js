import React, { useContext } from "react";
import { Typography, Box, Button } from "@mui/material";
import PaymentPlanCard from "../../components/PPCard";
import PrePaymentPlanCard from "../../components/PPPCard";
import GlobalContext from "../../context/GlobalContext";

const messages = {
  description: `This calculator determines your mortgage payment and provides you with
  a mortgage payment schedule. The calculator also shows how much money
  and how many years you can save by making prepayments.`,
  calculate: "Calculate",
};

const styles = {
  emptySpace: { height: "30px" },
  header: { display: "flex", justifyContent: "space-between", width: "100%" },
  border: {
    width: "48%",
    border: "2px solid #2571B4",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  cardHead: { width: "48%" },
  button: { backgroundColor: "#1B578A", textTransform: "Capitalize" },
};

const Calculator = () => {
  const { mortgageCalculation } = useContext(GlobalContext);

  return (
    <>
      <Box>
        <Typography>{messages.description}</Typography>
      </Box>
      <Box sx={styles.emptySpace}></Box>
      <Box sx={styles.header}>
        <Box sx={styles.border}>
          <PaymentPlanCard />
        </Box>
        <Box sx={styles.cardHead}>
          <PrePaymentPlanCard />
        </Box>
      </Box>
      <Box sx={styles.emptySpace}></Box>
      <Box>
        <Button
          data-testid="calculate"
          onClick={mortgageCalculation}
          variant="contained"
          sx={styles.button}
        >
          {messages.calculate}
        </Button>
      </Box>
    </>
  );
};

export default Calculator;
