import React from "react";
import { Button, Divider, Typography } from "@material-ui/core";

import "./style.scss";
import { CartItems } from "./components/CartItems";

function CartPage({ product = {} }) {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <div className="left-side">
            <Typography variant="h4" component="h2">
              Shopping Cart
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Deselect all items
            </Typography>
          </div>
          <div className="right-side">
            <Typography variant="subtitle1">
              Subtotal (1 items) : $34.23
            </Typography>
            <Button className="btn" variant="outlined">
              <Typography>Proceed to checkout</Typography>
            </Button>
          </div>
        </div>
        <div className="cart-items">
          <CartItems product={product} />
          <CartItems product={product} />
          <CartItems product={product} />
          <CartItems product={product} />
          <CartItems product={product} />
          <CartItems product={product} />
          <CartItems product={product} />
        </div>
        <Divider variant="fullWidth" />
        <div className="subtotal">
          <Typography className="right-side">
            Subtotal (1 items) : $34.23
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
