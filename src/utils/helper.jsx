// /src/utils/helpers.js

// Format currency as Pakistani Rupees
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
  }).format(amount);
};

// Check if an email is valid
export const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

// Get today's date in 'YYYY-MM-DD' format
export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};
