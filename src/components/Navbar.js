import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../assets/logo.png";
import styles from "./navbarstyles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = styles();
  const location = useLocation();

  if (location.pathname === "/") {
  }
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="35px"
              className={classes.image}
            />
            Apple
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart></ShoppingCart>
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
