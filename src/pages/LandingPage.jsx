import React from "react";
import LoanCategory from "../components/LoanCategory";
import LoanCalculator from "../components/LoanCalculator";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const LandingPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <div>
      <main>
        {/* Center the h1 using Box component */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Typography variant={isSmallScreen ? "h4" : "h1"} align="center">
            Welcome to Our Loan Portal
          </Typography>
        </Box>

        {/* LoanCategory and LoanCalculator */}
        <Box sx={{ px: isSmallScreen ? 2 : 6, py: 3 }}>
          <LoanCategory />
        </Box>
        
        <Box sx={{ px: isSmallScreen ? 2 : 6, py: 3 }}>
          <LoanCalculator />
        </Box>
      </main>
    </div>
  );
};

export default LandingPage;
