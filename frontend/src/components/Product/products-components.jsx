import React, { useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { MoreVert, AddShoppingCart } from "@material-ui/icons";

import image from "./900.jpg";
import { RemoveProductAlert } from "./helpers";

const ProductMoreMenu = ({ anchorEl, handleClose, productId }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const handleDelProdcut = () => {
    setOpenAlert(!openAlert);
    handleClose(); // to close menu list after clicked
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Report </MenuItem>
        <MenuItem onClick={handleDelProdcut}>Delete Product</MenuItem>
        <MenuItem onClick={handleClose}>No intersted</MenuItem>
      </Menu>
      <RemoveProductAlert
        id={productId}
        open={openAlert}
        setOpen={setOpenAlert}
      />
    </React.Fragment>
  );
};

export const ProductHeader = ({ product }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="card-header">
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <ProductMoreMenu
        productId={product._id}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export const ProductContent = ({ product }) => {
  return (
    <CardContent className="card-content">
      <Typography className="body2" variant="body2">
        {product.category || "Category"}
      </Typography>
      <Link className="link" to={`/product/${product._id}`}>
        <Typography variant="h5">{product.title}</Typography>
      </Link>
      <Rating disabled value={product.rating || 0} />
      <Typography variant="body1" component="h5">
        {product.price}
      </Typography>
    </CardContent>
  );
};

export const ProductActions = ({ product }) => {
  return (
    <CardActions className="card-action">
      <Button className="add-to-cart-btn" variant="outlined" color="primary">
        <span>Add To Cart</span>
        <AddShoppingCart className="add-to-cart-icon" />
      </Button>
    </CardActions>
  );
};

export const ProductMedia = ({ product }) => {
  return (
    <CardMedia
      className="card-media"
      image={image || product.imageURL}
      title={product.title || "this is product image"}
    />
  );
};
