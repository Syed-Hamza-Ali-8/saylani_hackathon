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

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { email, password };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(
        "http://192.168.159.92:5000/api/auth/login",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json(); // Parse the JSON response
      console.log("Login successful:", result);

      // If login is successful, redirect to the dashboard
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to the dashboard page
      }, 2000); // Redirect after a short delay
    } catch (err) {
      console.error("Error during login:", err);
      setError("Login failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Login
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ padding: 3 }}>
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
            onClick={handleLogin}
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
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
        message={error}
      />
    </Container>
  );
};

export default LoginPage;
