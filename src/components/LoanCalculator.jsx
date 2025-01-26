import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const LoanCalculator = ({ setLoanDetails }) => {
  const [category, setCategory] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);

  const handleCalculate = () => {
    const loanAmount = category === "Wedding" ? 500000 : 1000000;
    const monthlyInstallment = loanAmount / loanPeriod;

    setLoanDetails({
      loanAmount,
      monthlyInstallment,
    });
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: isSmallScreen ? "100%" : 400,
        mx: "auto",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Loan Calculator
      </Typography>

      <Grid container spacing={2} direction="column">
        <Grid item>
          <FormControl fullWidth>
            <InputLabel>Choose Loan Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Choose Loan Category"
            >
              <MenuItem value="Wedding">Wedding Loans</MenuItem>
              <MenuItem value="Home">Home Construction Loans</MenuItem>
              <MenuItem value="Business">Business Startup Loans</MenuItem>
              <MenuItem value="Education">Education Loans</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <TextField
            label="Initial Deposit (PKR)"
            type="number"
            fullWidth
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </Grid>

        <Grid item>
          <FormControl fullWidth>
            <InputLabel>Loan Period (in years)</InputLabel>
            <Select
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(e.target.value)}
              label="Loan Period (in years)"
            >
              <MenuItem value={1}>1 Year</MenuItem>
              <MenuItem value={3}>3 Years</MenuItem>
              <MenuItem value={5}>5 Years</MenuItem>
              <MenuItem value={4}>4 Years</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCalculate}
          >
            Calculate
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanCalculator;
