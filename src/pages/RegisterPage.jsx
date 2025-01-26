import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Snackbar,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState(""); // Added password input
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      cnic,
      email,
      name,
      password, // Include the password
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(
        "http://192.168.159.92:5000/api/user/register",
        requestOptions
      );

      if (!response.ok) {
        const data = await response.json();
        if (data.msg && data.msg.includes("already exists")) {
          setError("Email already exists. Please try another.");
        } else {
          setError("Registration failed. Please try again.");
        }
        throw new Error("Registration failed");
      }

      const result = await response.json(); // Parse the JSON response
      console.log("Registration successful:", result);

      setIsSuccess(true);
      setError(""); // Clear any previous error

      // Redirect to the login page after successful registration
      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 2000); // Redirect after a delay to let the user see the success message
    } catch (err) {
      console.error("Error during registration:", err);
      // Error already set in response handling above
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Register
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ padding: 3 }}>
        {isSuccess && (
          <Alert severity="success" sx={{ marginBottom: 2 }}>
            Registration successful! Please log in.
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="CNIC"
          type="text"
          fullWidth
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            fullWidth
            sx={{ padding: 1.5 }}
            onClick={handleRegister}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={!!error || isSuccess}
        autoHideDuration={6000}
        onClose={() => {
          setError("");
          setIsSuccess(false);
        }}
        message={error || (isSuccess && "Registration successful!")}
      />
    </Container>
  );
};

export default RegisterPage;
