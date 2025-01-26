// /src/services/authService.js
import axios from "axios";

const API_URL = "http://your-api-url.com"; // Replace with your backend API URL

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error("Registration failed, please try again.");
  }
};

// Login user
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error("Login failed, please try again.");
  }
};

// Reset password
export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { email });
    return response.data;
  } catch (error) {
    throw new Error("Failed to send reset password email.");
  }
};
