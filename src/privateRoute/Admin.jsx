// /src/pages/Admin.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users when the page loads
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/users",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography variant="h6">Registered Users</Typography>
              <ul>
                {users.map((user) => (
                  <li key={user._id}>
                    <Typography>
                      {user.name} - {user.email}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" component={Link} to="/dashboard">
            Go to Dashboard
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminPage;
