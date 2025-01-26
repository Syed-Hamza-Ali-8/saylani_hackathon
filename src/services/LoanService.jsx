// /src/services/loanService.js
import axios from "axios";

const API_URL = "http://your-api-url.com"; // Replace with your backend API URL

// Submit a loan request
export const submitLoanRequest = async (loanData) => {
  try {
    const response = await axios.post(`${API_URL}/loan-request`, loanData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to submit loan request.");
  }
};

// Get the loan details for a specific user
export const getUserApplications = async () => {
  try {
    const response = await axios.get(`${API_URL}/user-loans`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch loan applications.");
  }
};

// Calculate loan details (example function)
export const calculateLoan = async (loanData) => {
  try {
    const response = await axios.post(`${API_URL}/calculate-loan`, loanData);
    return response.data;
  } catch (error) {
    throw new Error("Loan calculation failed.");
  }
};
