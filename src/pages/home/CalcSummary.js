import React, { useContext } from "react";
import { Grid, Box } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import GlobalContext from "../../context/GlobalContext";
import style from "./style.module.css";

const internalStyle = {
  heading: { borderTop: "1px solid #DDDDDD" },
  margin: { margin: "60px 0" },
  btnMargin: {margin: "20px 0"}
};

const CalculationSummary = () => {
  const { calculatedData } = useContext(GlobalContext);

  const helpCircle = (
    <FeatherIcon
      icon="help-circle"
      height="13px"
      fill="white"
    />
  );

  return (
    <Box sx={internalStyle.margin}>
      <Grid container sx={{ fontWeight: "bold" }}>
        <Grid item xs={5} className={style.border_class} sx={internalStyle.heading}>
          <Box>Category</Box>
        </Grid>
        <Grid item xs={3} className={style.border_class} sx={internalStyle.heading}>
          <Box>Term</Box>
        </Grid>
        <Grid item xs={4} className={style.border_class} sx={internalStyle.heading}>
          <Box>Amortization Period</Box>
        </Grid>
      </Grid>
      <Grid container className={style.alternate_color}>
        <Grid item xs={5} className={style.border_class}>
          <Box>
            {helpCircle}
            Number of Payments
          </Box>
        </Grid>
        <Grid item xs={3} className={style.border_class}>
          <Box>{calculatedData.termNoOfPayments}</Box>
        </Grid>
        <Grid item xs={4} className={style.border_class}>
          <Box>{calculatedData.amortizationNoOfPayments}</Box>
        </Grid>
      </Grid>
      <Grid container className={style.alternate_color}>
        <Grid item xs={5} className={style.border_class}>
          <Box>
            {helpCircle}
            Mortgage Payment
          </Box>
        </Grid>
        <Grid item xs={3} className={style.border_class}>
          <Box>{calculatedData.mortgagePayment}</Box>
        </Grid>
        <Grid item xs={4} className={style.border_class}>
          <Box>{calculatedData.mortgagePayment}</Box>
        </Grid>
      </Grid>
      {/* Prepayment */}
      <Grid container className={style.alternate_color}>
        <Grid item xs={5} className={style.border_class}>
          <Box>
            {helpCircle}
            Prepayment
          </Box>
        </Grid>
        <Grid item xs={3} className={style.border_class}>
          <Box>{calculatedData.prePayment}</Box>
        </Grid>
        <Grid item xs={4} className={style.border_class}>
          <Box>{calculatedData.prePayment}</Box>
        </Grid>
      </Grid>
      <Grid container className={style.alternate_color}>
        <Grid item xs={5} className={style.border_class}>
          <Box>
            {helpCircle}
            Principal Payments
          </Box>
        </Grid>
        <Grid item xs={3} className={style.border_class}>
          <Box>{calculatedData.termPrincipalPayments}</Box>
        </Grid>
        <Grid item xs={4} className={style.border_class}>
          <Box>{calculatedData.amortizationPrincipalPayments}</Box>
        </Grid>
      </Grid>
      <Grid container className={style.alternate_color}>
        <Grid item xs={5} className={style.border_class}>
          <Box>
            {helpCircle}
            Interest Payments
          </Box>
        </Grid>
        <Grid item xs={3} className={style.border_class}>
          <Box>{calculatedData.termInterestPayments}</Box>
        </Grid>
        <Grid item xs={4} className={style.border_class}>
          <Box>{calculatedData.amortizationInterestPayments}</Box>
        </Grid>
      </Grid>
      <Grid container className={style.alternate_color}>
        <Grid item xs={5} className={style.border_class}>
          <Box>
            {helpCircle}
            Total Cost
          </Box>
        </Grid>
        <Grid item xs={3} className={style.border_class}>
          <Box data-testid="term-total">{calculatedData.termTotalCost}</Box>
        </Grid>
        <Grid item xs={4} className={style.border_class}>
          <Box data-testid="amort-total">{calculatedData.amortizationTotalCost}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CalculationSummary;
