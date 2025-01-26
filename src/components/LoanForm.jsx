import React, { useState } from "react";

const LoanForm = ({ onSubmit }) => {
  const [loanCategory, setLoanCategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      loanCategory,
      loanAmount,
      deposit,
      loanPeriod,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Loan Category:</label>
      <select
        value={loanCategory}
        onChange={(e) => setLoanCategory(e.target.value)}
      >
        <option value="Wedding">Wedding Loans</option>
        <option value="Home">Home Construction Loans</option>
        <option value="Business">Business Startup Loans</option>
        <option value="Education">Education Loans</option>
      </select>

      <br />
      <label>Loan Amount:</label>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        required
      />

      <br />
      <label>Initial Deposit (PKR):</label>
      <input
        type="number"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        required
      />

      <br />
      <label>Loan Period (in years):</label>
      <input
        type="number"
        value={loanPeriod}
        onChange={(e) => setLoanPeriod(e.target.value)}
        required
      />

      <br />
      <button type="submit">Submit Loan Request</button>
    </form>
  );
};

export default LoanForm;
