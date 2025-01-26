import React, { createContext, useState, useContext } from "react";

const LoanContext = createContext();

export const useLoan = () => useContext(LoanContext);

export const LoanProvider = ({ children }) => {
  const [loanDetails, setLoanDetails] = useState({
    category: "",
    amount: 0,
    period: 1,
    deposit: 0,
    monthlyInstallment: 0,
  });

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
