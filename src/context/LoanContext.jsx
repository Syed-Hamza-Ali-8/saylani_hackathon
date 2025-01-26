// /src/context/LoanContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const LoanContext = createContext();

// Custom hook to use LoanContext
export const useLoan = () => useContext(LoanContext);

// LoanContext provider component
export const LoanProvider = ({ children }) => {
  const [loanDetails, setLoanDetails] = useState({
    category: "",
    amount: 0,
    period: 1,
    deposit: 0,
    monthlyInstallment: 0,
  });

  // Update loan details
  const updateLoanDetails = (newDetails) => {
    setLoanDetails((prevDetails) => ({
      ...prevDetails,
      ...newDetails,
    }));
  };

  return (
    <LoanContext.Provider value={{ loanDetails, updateLoanDetails }}>
      {children}
    </LoanContext.Provider>
  );
};
