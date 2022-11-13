import React from "react";
import { Container } from "@mui/material";
import Header from "../../components/Header";
import Calculator from "./Calculator";
import CalcSummary from "./CalcSummary";
import MortSummary from "./MortSummary";
import Charts from "./Charts";

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Calculator />
      <CalcSummary />
      <MortSummary />
      <Charts />
    </Container>
  );
};

export default Home;
