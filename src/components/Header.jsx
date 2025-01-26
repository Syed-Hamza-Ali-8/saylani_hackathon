import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#343a40" }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Microfinance App
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          {isSmallScreen ? (
            <div>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: 1 }}
              >
                <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/calculator"
                  onClick={handleMenuClose}
                >
                  Loan Calculator
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/register"
                  onClick={handleMenuClose}
                >
                  Register
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/loan-request"
                  onClick={handleMenuClose}
                >
                  Loan Request
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/dashboard"
                  onClick={handleMenuClose}
                >
                  Dashboard
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/calculator" color="inherit">
                Loan Calculator
              </Button>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
              <Button component={Link} to="/loan-request" color="inherit">
                Loan Request
              </Button>
              <Button component={Link} to="/dashboard" color="inherit">
                Dashboard
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
