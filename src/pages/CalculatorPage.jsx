import React, { useState } from "react";
import LoanCalculator from "../components/LoanCalculator";

const CalculatorPage = () => {
  const [loanDetails, setLoanDetails] = useState(null);

  return (
    <div>
      <LoanCalculator setLoanDetails={setLoanDetails} />
      {loanDetails && (
        <div>
          <h3>Loan Details</h3>
          <p>Loan Amount: PKR {loanDetails.loanAmount}</p>
          <p>Monthly Installment: PKR {loanDetails.monthlyInstallment}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorPage;
