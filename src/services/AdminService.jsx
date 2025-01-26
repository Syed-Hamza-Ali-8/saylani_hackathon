import axios from "axios";

const API_URL = "http://localhost:3000"; 

export const getAllApplications = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin/applications`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch applications.");
  }
};

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
