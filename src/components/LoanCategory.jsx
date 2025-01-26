// /src/components/LoanCategory.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Favorite, Home, Business, School } from "@mui/icons-material"; // Use Favorite for Wedding icon

const LoanCategory = () => {
  const categories = [
    { name: "Wedding Loans", path: "/calculator", icon: <Favorite /> }, // Favorite as Wedding icon
    { name: "Home Construction Loans", path: "/calculator", icon: <Home /> },
    { name: "Business Startup Loans", path: "/calculator", icon: <Business /> },
    { name: "Education Loans", path: "/calculator", icon: <School /> },
  ];
  

  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Choose a Loan Category
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {category.icon} {/* Display the icon */}
                  <span style={{ marginLeft: "8px" }}>
                    {category.name}
                  </span>{" "}
                  {/* Add space between icon and text */}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={category.path}
                  fullWidth
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LoanCategory;
