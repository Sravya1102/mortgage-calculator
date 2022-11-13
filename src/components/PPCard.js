import { Typography, Container, Box, Select, MenuItem } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const years = Array.from(Array(30).keys());
const months = Array.from(Array(12).keys());
const terms = Array.from(Array(10).keys());

const frequency = [
  "Accelerated Weekly",
  "Weekly",
  "Accelerated Bi-weekly",
  "Bi-weekly (every 2 weeks)",
  "Semi-monthly (24x per year)",
  "Monthly (12x per year)",
];

const messages = {
  title: "Payment Plan",
  mortAmount: "Mortgage Amount :",
  interestRate: "Interest Rate:",
  amortizationPeriod: "Amortization Period:",
  paymentFrequency: "Payment Frequency:",
  term: "Term:",
};

const styles = {
  container: { backgroundColor: "#2571B4", padding: "10px 0" },
  title: { color: "white", fontSize: "17px", fontWeight: "bold" },
  mortAmountBox: {
    width: "100%",
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  calcBody: {
    width: "15%",
    height: "35px",
    display: "flex",
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
  mortAboutText: { width: "50%", fontWeight: "bold", fontSize: "16px" },
  inputWidth: {
    width: "100%",
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  inputSelection: {
    width: "100%",
    height: "35px",
    outline: "none",
    border: "none",
    boxShadow: "none",
    ".MuiOutlinedInput-notchedOutline": { border: 0 },
  },
  inputArea: {
    backgroundColor: "white",
    border: "none",
    outline: "none",
    padding: "0 10px",
    boxSizing: "border-box",
    height: "35px",
    width: "70%",
  },
  smallInputSelectionBox: {
    width: "24%",
    margin: "1%",
    display: "flex",
    border: "2px solid #CCCCCC",
    borderRadius: "2px",
  },
  inputSelectionBox: {
    width: "15%",
    height: "35px",
    display: "flex",
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
  inputIcon: {
    width: "50%",
    display: "flex",
    border: "2px solid #CCCCCC",
    borderRadius: "2px",
  },
};

const icons = {
  dollar: <FeatherIcon icon="dollar-sign" color="black" height="15px" />,
  clock: <FeatherIcon icon="clock" color="black" height="15px" />,
  percent: <FeatherIcon icon="percent" color="black" height="15px" />,
  frequency: <FeatherIcon icon="activity" color="black" height="15px" />,
};

const PaymentPlanCard = () => {
  const { paymentPlan, paymentPlanInputEvent } = useContext(GlobalContext);

  return (
    <Box>
      <Container sx={styles.container}>
        <Box>
          <Typography sx={styles.title}>{messages.title}</Typography>
        </Box>
      </Container>
      <Container>
        <Box sx={styles.mortAmountBox}>
          <Typography sx={styles.mortAboutText}>
            {messages.mortAmount}
          </Typography>
          <Box style={styles.inputIcon}>
            <Box sx={styles.calcBody}>{icons.dollar}</Box>
            <input
              data-testid="mort-amount"
              id="mort-amount"
              placeholder={paymentPlan.mortgageAmount}
              onChange={paymentPlanInputEvent}
              name="mortgageAmount"
              style={{
                ...styles.inputArea,
                width: "85%",
              }}
              type="text"
            />
          </Box>
        </Box>
        <Box style={styles.inputWidth}>
          <Typography sx={styles.mortAboutText}>
            {messages.interestRate}
          </Typography>
          <Box style={{ ...styles.inputIcon, width: "25%" }}>
            <input
              data-testid="interest-rate"
              placeholder={paymentPlan.interestRate}
              onChange={paymentPlanInputEvent}
              name="interestRate"
              style={styles.inputArea}
              type="text"
            />
            <Box sx={{ ...styles.calcBody, width: "30%" }}>{icons.percent}</Box>
          </Box>
          <Box sx={{ width: "25%" }}></Box>
        </Box>
        <Box style={styles.inputWidth}>
          <Typography sx={styles.mortAboutText}>
            {messages.amortizationPeriod}
          </Typography>
          <>
            <Box sx={styles.smallInputSelectionBox}>
              <Select
                data-testid="amort-year"
                onChange={paymentPlanInputEvent}
                name="amortizationPeriodYear"
                displayEmpty
                defaultValue={paymentPlan.amortizationPeriodYear || ""}
                sx={styles.inputSelection}
              >
                {years.map((value) => (
                  <MenuItem key={value.toString()} value={value}>
                    {value} Years
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box sx={styles.smallInputSelectionBox}>
              <Select
                data-testid="amort-month"
                displayEmpty
                onChange={paymentPlanInputEvent}
                name="amortizationPeriodMonth"
                defaultValue={paymentPlan.amortizationPeriodMonth || ""}
                sx={styles.inputSelection}
              >
                <MenuItem key={"0"} value={0}>
                  <em></em>
                </MenuItem>
                {months.map((value) => (
                  <MenuItem key={value.toString()} value={value}>
                    {value} Months
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </>
        </Box>
        <Box style={styles.inputWidth}>
          <Typography sx={styles.mortAboutText}>
            {messages.paymentFrequency}
          </Typography>
          <Box style={styles.inputIcon}>
            <Box style={styles.inputSelectionBox}>{icons.frequency}</Box>
            <Select
              displayEmpty
              data-testid="payment-freq"
              onChange={paymentPlanInputEvent}
              name="paymentFrequency"
              defaultValue={paymentPlan.paymentFrequency || ""}
              sx={styles.inputSelection}
            >
              {frequency.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box style={styles.inputWidth}>
          <Typography sx={styles.mortAboutText}>{messages.term}</Typography>
          <Box style={styles.inputIcon}>
            <Box style={styles.inputSelectionBox}>{icons.clock}</Box>
            <Select
              displayEmpty
              data-testid="payment-term"
              onChange={paymentPlanInputEvent}
              name="term"
              defaultValue={paymentPlan.term || ""}
              sx={styles.inputSelection}
            >
              {terms.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Container>
      <Container sx={{ height: "20px" }}></Container>
    </Box>
  );
};

export default PaymentPlanCard;
