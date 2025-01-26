import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Alert,
} from "@mui/material";

const DashboardPage = () => {
  const [applications, setApplications] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedApplications = localStorage.getItem("loanRequests");
    if (storedApplications) {
      setApplications(JSON.parse(storedApplications));
    } else {
      setErrorMessage("No loan applications found.");
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 3, mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Your Dashboard
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Your Loan Applications
        </Typography>

        {errorMessage && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <Grid container spacing={3}>
          {applications.length === 0 ? (
            <Grid item xs={12}>
              <Card variant="outlined" sx={{ textAlign: "center" }}>
                <CardContent>
                  <Typography variant="h5">No Applications</Typography>
                  <Typography variant="body2" color="text.secondary">
                    You have not submitted any loan applications yet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ) : (
            applications.map((app, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Guarantor {index + 1}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Name:</strong> {app[0].name}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> {app[0].email}
                    </Typography>
                    <Typography variant="body1">
                      <strong>CNIC:</strong> {app[0].cnic}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardPage;
