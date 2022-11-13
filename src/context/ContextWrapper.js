import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
  const [paymentPlan, setPaymentPlan] = useState({
    mortgageAmount: Number(100000).toFixed(2),
    interestRate: Number(5).toFixed(2),
    amortizationPeriodYear: 25,
    amortizationPeriodMonth: 0,
    paymentFrequency: "Monthly (12x per year)",
    term: 5,
  });

  const paymentPlanInputEvent = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    setPaymentPlan((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const [prePaymentPlan, setPrePaymentPlan] = useState({
    prePaymentAmount: 0,
    prePaymentFrequency: "One time",
    startWithPayment: 1,
  });

  const prePaymentPlanInputEvent = (event) => {
    event.preventDefault();
    const { value, name } = event.target;

    setPrePaymentPlan((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  function calculateMonthlyInterest() {
    return Number(paymentPlan.interestRate / 100 / 12).toFixed(5);
  }
  function calculateMonthlyInterestPower() {
    return Number(
      Math.pow(
        1 + Number(calculateMonthlyInterest()),
        paymentPlan.amortizationPeriodYear * 12 +
          paymentPlan.amortizationPeriodMonth
      )
    ).toFixed(5);
  }
  function calculateTotalMonthly() {
    return (
      paymentPlan.mortgageAmount *
      ((Number(calculateMonthlyInterest()).toFixed(5) *
        Number(calculateMonthlyInterestPower())) /
        (Number(calculateMonthlyInterestPower()).toFixed(5) - 1))
    );
  }
  function calculateAmortizationTotalCost() {
    return Number(
      (paymentPlan.amortizationPeriodYear * 12 +
        paymentPlan.amortizationPeriodMonth) *
        Number(calculateTotalMonthly()).toFixed(2)
    ).toFixed(2);
  }
  function calculateTermTotalCost() {
    return Number(
      paymentPlan.term * 12 * Number(calculateTotalMonthly()).toFixed(2)
    ).toFixed(2);
  }

  function calculateAmortizationInterestPayments() {
    return (
      Number(calculateAmortizationTotalCost()) -
      Number(paymentPlan.mortgageAmount).toFixed(2)
    );
  }

  function calculateTermInterestPayments() {
    const percentage =
      (Number(calculateAmortizationInterestPayments()).toFixed(2) /
        Number(paymentPlan.mortgageAmount).toFixed(2)) *
      100;

    return Number(
      (Number(calculateTermTotalCost()) * percentage) / 100
    ).toFixed(2);
  }
  function calculateTermPrincipalPayments() {
    return Number(
      calculateTermTotalCost() - calculateTermInterestPayments()
    ).toFixed(2);
  }
  function calculateBalanceSheet() {
    return Number(
      Number(paymentPlan.mortgageAmount) - calculateTermPrincipalPayments()
    ).toFixed(2);
  }

  const [calculatedData, setCalculatedData] = useState({
    mortgagePayment: Number(calculateTotalMonthly()).toFixed(2),
    prePayment: 0,

    termNoOfPayments: paymentPlan.term * 12,
    termInterestPayments: Number(calculateTermInterestPayments()).toFixed(2),
    termPrincipalPayments: Number(calculateTermPrincipalPayments()),
    termTotalCost: Number(calculateTermTotalCost()).toFixed(2),

    amortizationNoOfPayments:
      paymentPlan.amortizationPeriodYear * 12 +
      paymentPlan.amortizationPeriodMonth,
    amortizationPrincipalPayments: Number(paymentPlan.mortgageAmount).toFixed(
      2
    ),
    amortizationInterestPayments: Number(
      calculateAmortizationInterestPayments()
    ).toFixed(2),
    amortizationTotalCost: Number(calculateAmortizationTotalCost()).toFixed(2),

    balanceSheet: calculateBalanceSheet(),
  });

  const mortgageCalculation = () => {
    setCalculatedData({
      mortgagePayment: Number(calculateTotalMonthly()).toFixed(2),
      prePayment: 0,

      termNoOfPayments: paymentPlan.term * 12,
      termInterestPayments: Number(calculateTermInterestPayments()).toFixed(2),
      termPrincipalPayments: Number(calculateTermPrincipalPayments()),
      termTotalCost: Number(calculateTermTotalCost()).toFixed(2),

      amortizationNoOfPayments:
        paymentPlan.amortizationPeriodYear * 12 +
        paymentPlan.amortizationPeriodMonth,
      amortizationPrincipalPayments: Number(paymentPlan.mortgageAmount).toFixed(
        2
      ),
      amortizationInterestPayments: Number(
        calculateAmortizationInterestPayments()
      ).toFixed(2),
      amortizationTotalCost: Number(calculateAmortizationTotalCost()).toFixed(
        2
      ),

      balanceSheet: calculateBalanceSheet(),
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        paymentPlan,
        paymentPlanInputEvent,
        prePaymentPlan,
        prePaymentPlanInputEvent,
        calculatedData,
        mortgageCalculation,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
