import { Typography, Container, Box, Select, MenuItem } from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const frequency = ["One time", "Each year", "Same as regular year"];

const PrePaymentPlanCard = () => {
  const { prePaymentPlan, prePaymentPlanInputEvent } =
    useContext(GlobalContext);
  return (
    <Box
      sx={{
        border: "2px solid #2571B4",
        borderRadius: "5px",
        boxSizing: "border-box",
      }}
    >
      <Container sx={{ backgroundColor: "#2571B4", padding: "10px 0" }}>
        <Box>
          <Typography
            sx={{ color: "white", fontSize: "17px", fontWeight: "bold" }}
          >
            Prepayment Plan
          </Typography>
        </Box>
      </Container>
      <Container>
        {/* Mortgage Amount */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ width: "50%", fontWeight: "bold", fontSize: "16px" }}
          >
            Prepayment Amount :
          </Typography>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              border: "2px solid #CCCCCC",
              borderRadius: "2px",
            }}
          >
            <Box
              sx={{
                width: "15%",
                height: "35px",
                display: "flex",
                backgroundColor: "#EEEEEE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FeatherIcon icon="dollar-sign" color="black" height="15px" />
            </Box>
            <input
              name="prePaymentAmount"
              onChange={prePaymentPlanInputEvent}
              defaultValue={prePaymentPlan.prePaymentAmount}
              style={{
                backgroundColor: "white",
                border: "none",
                outline: "none",
                padding: "0 10px",
                boxSizing: "border-box",
                height: "35px",
                width: "85%",
              }}
              type="text"
            />
          </Box>
        </Box>
        {/* Payment Frequency */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ width: "50%", fontWeight: "bold", fontSize: "16px" }}
          >
            Prepayment Frequency :
          </Typography>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              border: "2px solid #CCCCCC",
              borderRadius: "2px",
            }}
          >
            <Box
              sx={{
                width: "15%",
                height: "35px",
                display: "flex",
                backgroundColor: "#EEEEEE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FeatherIcon icon="activity" color="black" height="15px" />
            </Box>
            <Select
              displayEmpty
              name="prePaymentFrequency"
              onChange={prePaymentPlanInputEvent}
              defaultValue={prePaymentPlan.prePaymentFrequency || ""}
              sx={{
                width: "100%",
                height: "35px",
                outline: "none",
                border: "none",
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              {frequency.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        {/* Start With Payment*/}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ width: "50%", fontWeight: "bold", fontSize: "16px" }}
          >
            Start With Payment :
          </Typography>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              border: "2px solid #CCCCCC",
              borderRadius: "2px",
            }}
          >
            <Box
              sx={{
                width: "15%",
                height: "35px",
                display: "flex",
                backgroundColor: "#EEEEEE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FeatherIcon icon="dollar-sign" color="black" height="15px" />
            </Box>
            <input
              name="startWithPayment"
              onChange={prePaymentPlanInputEvent}
              defaultValue={prePaymentPlan.startWithPayment}
              style={{
                backgroundColor: "white",
                border: "none",
                outline: "none",
                padding: "0 10px",
                boxSizing: "border-box",
                height: "35px",
                width: "85%",
              }}
              type="text"
            />
          </Box>
        </Box>
      </Container>
      <Container sx={{ height: "20px" }}></Container>
    </Box>
  );
};

export default PrePaymentPlanCard;
