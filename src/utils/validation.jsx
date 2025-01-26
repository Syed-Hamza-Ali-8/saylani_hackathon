// /src/utils/validation.js

// Validate required fields
export const validateRequired = (value) => {
  if (!value || value.trim() === "") {
    return "This field is required";
  }
  return "";
};

// Validate if the CNIC is valid (format check)
export const validateCnic = (cnic) => {
  const cnicPattern = /^\d{5}-\d{7}-\d$/;
  if (!cnicPattern.test(cnic)) {
    return "Invalid CNIC format. Example: 12345-1234567-1";
  }
  return "";
};

// Validate if the deposit is a valid number
export const validateDeposit = (deposit) => {
  if (deposit <= 0) {
    return "Deposit should be greater than zero";
  }
  return "";
};

// Validate loan period (must be at least 1 year)
export const validateLoanPeriod = (period) => {
  if (period < 1 || period > 5) {
    return "Loan period should be between 1 and 5 years";
  }
  return "";
};
