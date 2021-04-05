import {
  Badge,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@material-ui/core";
import { AccountCircle, Add, Remove, ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  classes,
}) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="end" aria-haspopup="true" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Typography style={{ margin: "0px 10px" }}>Cart</Typography>
        </div>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};
export const RenderMenu = ({ anchorEl, isMenuOpen, handleMenuClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

export const CartLeftDrawer = ({ cart={}, cartDrawer, setCartDrawer }) => {
  return (
    <Drawer
      open={cartDrawer}
      anchor="left"
      onClose={() => setCartDrawer(false)}
    >
      <div className="drawer-container">
        {new Array(10).fill(3).map((product, idx) => (
          <MenuListProducts product={product} key={idx} />
        ))}
        <div className="drawer-action">
          <Link className="link" to={`/cart/${cart.Id || 2}`} onClick={() => setCartDrawer(false)}>
            <Button variant="outlined" color="primary">
              View cart
            </Button>
          </Link>
          <Button variant="outlined" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

const MenuListProducts = ({ product }) => {
  return (
    <MenuList className="list-products">
      <div className="list-container">
        <div className="image">
          <img src="http://placekitten.com/200/300" alt="" />
        </div>
        <div className="info">
          <div className="title">
            <h3>THis IS TITLE</h3>
          </div>
          <div className="price">
            <span>$99.44</span>
          </div>
          <div className="add-more-or-remove">
            <div className="puls-mins">
              <Remove className="icon min" />
              <span>3</span>
              <Add className="icon plus" />
            </div>
          </div>
        </div>
      </div>
    </MenuList>
  );
};
