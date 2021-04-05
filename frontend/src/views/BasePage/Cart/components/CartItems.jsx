import { Select, Typography } from "@material-ui/core";
import React, { useState } from "react";

export const CartItems = ({ product }) => {
  const [qty, setQty] = useState("");
  const handleChange = (e) => {
    setQty(e.target.value);
  };
  return (
    <div className="cart-item">
      <div className="image">
        <img src="http://placekitten.com/200/300" alt="placekitten" />
      </div>
      <div className="information">
        <Typography className="title" variant="h5" component="h3">
          THIS IS THE TITLE OF PRODUCT
        </Typography>
        <Typography variant="subtitle2">By Moaml riad</Typography>
        <Typography variant="subtitle2">In stock</Typography>
        <div className="qty">
          <Select native value={qty} onChange={handleChange}>
            <option aria-label="select" value="" />
            {[...new Array(product.qty || 10)].map((_,i) => (
              <option key={i} value={i+1}>
                {i+1}
              </option>
            ))}
          </Select>
        </div>
        <div className="price">
          <Typography>
            <b>Price</b> : $44.32
          </Typography>
        </div>
        <div className="remove">
          <Typography variant="subtitle2" color="secondary">
            delete from cart
          </Typography>
        </div>
      </div>
    </div>
  );
};
