import axios from "axios";

const API_URL = "http://your-api-url.com";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error("Registration failed, please try again.");
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error("Login failed, please try again.");
  }
};

export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { email });
    return response.data;
  } catch (error) {
    throw new Error("Failed to send reset password email.");
  }
};
