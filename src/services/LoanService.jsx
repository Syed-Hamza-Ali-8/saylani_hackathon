import axios from "axios";

const API_URL = "http://localhost:3000"; 

export const submitLoanRequest = async (loanData) => {
  try {
    const response = await axios.post(`${API_URL}/loan-request`, loanData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to submit loan request.");
  }
};

export const getUserApplications = async () => {
  try {
    const response = await axios.get(`${API_URL}/user-loans`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch loan applications.");
  }
};

export const calculateLoan = async (loanData) => {
  try {
    const response = await axios.post(`${API_URL}/calculate-loan`, loanData);
    return response.data;
  } catch (error) {
    throw new Error("Loan calculation failed.");
  }
};
