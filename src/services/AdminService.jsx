// /src/services/adminService.js
import axios from "axios";

const API_URL = "http://your-api-url.com"; // Replace with your backend API URL

// Get all loan applications (admin functionality)
export const getAllApplications = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin/applications`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch applications.");
  }
};

// Add token number to a loan application (admin functionality)
export const addTokenNumber = async (applicationId, tokenNumber) => {
  try {
    const response = await axios.put(
      `${API_URL}/admin/application/${applicationId}`,
      { tokenNumber }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add token number.");
  }
};

// Filter applications by city or country (admin functionality)
export const filterApplications = async (filters) => {
  try {
    const response = await axios.get(`${API_URL}/admin/applications`, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to filter applications.");
  }
};
