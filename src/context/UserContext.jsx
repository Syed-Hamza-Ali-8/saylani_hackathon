// /src/context/UserContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const UserContext = createContext();

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);

// UserContext provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user details
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status

  // Check if the user is logged in (e.g., check token or localStorage)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // Log user in
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Log user out
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
