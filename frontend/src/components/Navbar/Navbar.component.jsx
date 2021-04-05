import React from "react";
import {
  AppBar,
  InputBase,
  Typography,
  Toolbar,
  IconButton,
  Container,
  Badge,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  AccountCircle,
  MoreVert,
  Search,
  ShoppingCart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { CartLeftDrawer, MobileMenu, RenderMenu } from "./components";
import useStyles from "./style/style";
import "./style/style.scss";

function NavbarComponent() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [cartDrawer, setCartDrawer] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCartClick = (e) => {
    setCartDrawer(!cartDrawer);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link className="link" style={{color:'white'}} to="/">
                E-commerce
              </Link>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-haspopup="true"
                color="inherit"
                onClick={handleCartClick}
              >
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCart />
                </Badge>
                <Typography style={{ margin: "0px 10px" }}>Cart</Typography>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileMenu
        handleMobileMenuClose={handleMobileMenuClose}
        isMobileMenuOpen={isMobileMenuOpen}
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        classes={classes}
      />
      <RenderMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        isMenuOpen={isMenuOpen}
      />
      <CartLeftDrawer cartDrawer={cartDrawer} setCartDrawer={setCartDrawer} />
    </div>
  );
}

export default NavbarComponent;
