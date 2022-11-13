import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Box, Typography } from "@mui/material";

const messages = {
  term: "Category",
  mortgageSummary: "Mortgage Summary",
  calculate: "Calculate ...",
};

const internalStyle = {
  margin: { margin: "60px 0" },
  heading: { fontSize: "25px", fontWeight: "bold", marginBottom: "15px" },
  description: { fontsize: "16px", color: "black" },
};

const MortgageSummary = () => {
  const { calculatedData, paymentPlan } = useContext(GlobalContext);

  return (
    <Box style={internalStyle.margin}>
      <Typography style={internalStyle.heading}>
        {messages.mortgageSummary}
      </Typography>
      <Box style={internalStyle.description}>
        Over the {paymentPlan.amortizationPeriodYear}-year amortization period,
        you will:
        <ul>
          <li>
            have made <b>{calculatedData.amortizationNoOfPayments}</b>{" "}
            {paymentPlan.paymentFrequency} of{" "}
            <b>${calculatedData.mortgagePayment}</b>.
          </li>
          <li>
            have paid <b>${calculatedData.amortizationPrincipalPayments}</b> in
            principal, <b>${calculatedData.amortizationInterestPayments}</b> in
            interest, for a total of{" "}
            <b>${calculatedData.amortizationTotalCost}</b>.
          </li>
        </ul>
      </Box>
      {/* Term Year */}
      <Box style={internalStyle.description}>
        Over the {paymentPlan.term}-year term, you will:
        <ul>
          <li>
            have made <b>{calculatedData.termNoOfPayments}</b>{" "}
            {paymentPlan.paymentFrequency} payments of{" "}
            <b>${calculatedData.mortgagePayment}</b>.
          </li>
          <li>
            have paid <b>${calculatedData.termPrincipalPayments}</b> in
            principal, <b>${calculatedData.termInterestPayments}</b> in
            interest, for a total of <b>${calculatedData.termTotalCost}</b>.
          </li>
        </ul>
      </Box>
      {/* Balance Sheet */}
      <Box style={internalStyle.description}>
        Over the {5}-year amortization period, you will:
        <ul>
          <li>
            have a balance of <b>${calculatedData.balanceSheet}</b>.
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default MortgageSummary;
