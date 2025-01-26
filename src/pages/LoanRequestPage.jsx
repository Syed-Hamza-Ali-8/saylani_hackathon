// /src/pages/LoanRequestPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigating to dashboard
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";

const LoanRequestPage = () => {
  const [guarantors, setGuarantors] = useState([
    { name: "", email: "", cnic: "" },
    { name: "", email: "", cnic: "" },
  ]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook to navigate to Dashboard

  const handleChange = (index, e) => {
    const newGuarantors = [...guarantors];
    newGuarantors[index][e.target.name] = e.target.value;
    setGuarantors(newGuarantors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const isValid = guarantors.every(
      (guarantor) =>
        guarantor.name &&
        guarantor.email &&
        guarantor.cnic &&
        /^\d{13}$/.test(guarantor.cnic)
    );

    if (!isValid) {
      setErrorMessage("Please fill all fields correctly, including CNIC.");
      return;
    }

    // Clear error message if validation passed
    setErrorMessage("");

    // Mock submission logic (Replace with API call)
    console.log("Loan request submitted", guarantors);

    // Show success message (Snackbar)
    setOpenSnackbar(true);

    // Mock storing loan data
    localStorage.setItem("loanRequest", JSON.stringify(guarantors));

    // Clear form fields
    setGuarantors([
      { name: "", email: "", cnic: "" },
      { name: "", email: "", cnic: "" },
    ]);

    // Redirect to the Dashboard
    setTimeout(() => {
      navigate("/dashboard"); // Navigates to DashboardPage after submission
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the Snackbar
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 3, borderRadius: 2, boxShadow: 3, mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Loan Request Form
        </Typography>
        <form onSubmit={handleSubmit}>
          {guarantors.map((guarantor, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6">Guarantor {index + 1}</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={guarantor.name}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={guarantor.email}
                    onChange={(e) => handleChange(index, e)}
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="CNIC"
                    variant="outlined"
                    fullWidth
                    name="cnic"
                    value={guarantor.cnic}
                    onChange={(e) => handleChange(index, e)}
                    required
                    type="text"
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
          {errorMessage && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit Request
          </Button>
        </form>
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Loan request submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoanRequestPage;
