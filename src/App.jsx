// /src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Pages
import LandingPage from "./pages/LandingPage";
import CalculatorPage from "./pages/CalculatorPage";
import RegisterPage from "./pages/RegisterPage";
import LoanRequestPage from "./pages/LoanRequestPage";
import DashboardPage from "./pages/Dashboard";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from "./privateRoute/Admin";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Router>
      {/* Header that will appear on every page */}
      <Header />

      {/* Wrap your routes in the <Routes> component */}
      <Routes>
        {/* Define the Routes for each page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loan-request" element={<LoanRequestPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/Admin" element={<AdminPage />} />

        {/* Default route for unknown paths */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>

      {/* Footer that will appear on every page */}
      <Footer />
    </Router>
  );
};

export default App;
