// import "./styles.css";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import GlobalContext from "../../context/GlobalContext";

const areaData = [
  {
    name: "0",
    uv: 120000,
  },
  {
    name: "50",
    uv: 100000,
  },
  {
    name: "100",
    uv: 80000,
  },
  {
    name: "150",
    uv: 60000,
  },
  {
    name: "200",
    uv: 40000,
  },
  {
    name: "250",
    uv: 20000,
  },
  {
    name: "300",
    uv: 0,
  },
];

const internalStyle = {
  heading: { fontSize: "25px", fontWeight: "bold", marginBottom: "15px" },
  subHeading: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptySpaces: { margin: "50px 0" },
};

const messages = {
  heading: "Payment Diagrams",
  history: "Payment History",
  interest: "Interest Payment",
};

const Chart = (props) => {
  // const { areaData, barData } = props;
  const { calculatedData } = useContext(GlobalContext);

  const barData = [
    {
      name: "Regular Payment",
      principalPayment: calculatedData.amortizationPrincipalPayments,
      interestPayment: calculatedData.amortizationInterestPayments,
    },
  ];
  return (
    <Box style={internalStyle.emptySpaces}>
      <Typography style={internalStyle.heading}>{messages.heading}</Typography>
      <div style={{ display: "flex" }}>
        <Box>
          <Typography style={internalStyle.subHeading}>
            {messages.history}
          </Typography>
          <AreaChart
            width={500}
            height={370}
            data={areaData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </Box>
        <Box>
          <Typography style={internalStyle.subHeading}>
            {messages.interest}
          </Typography>
          <BarChart
            width={500}
            height={400}
            data={barData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="principalPayment" stackId="a" fill="#8884d8" />
            <Bar dataKey="interestPayment" stackId="a" fill="#82ca9d" />
          </BarChart>
        </Box>
      </div>
    </Box>
  );
};

export default Chart;
