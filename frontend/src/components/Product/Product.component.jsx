import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import "./style.scss";
import image from "./900.jpg";
import RatingComponent from "../Rating/Rating";
import { AddShoppingCart } from "@material-ui/icons";

const ProductComponent = ({ product }) => {
  // const history = useHistory();

  return (
    <Grid
      className="product-component"
      container
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
    >
      <Card className="card">
        <CardMedia
          className="card-media"
          image={image}
          title="this is the media image"
        />
        <CardContent className="card-content">
          <Typography className="body2" variant="body2">
            this is just subtitle
          </Typography>
          <Link className="link" to={`/product/${product._id || 'productID'}`}>
            <Typography variant="h5">This is the Title</Typography>
          </Link>
          <RatingComponent />
          <Typography variant="body1" component="h5">
            $299.00
          </Typography>
        </CardContent>
        <CardActions className="card-action">
          <Button
            className="add-to-cart-btn"
            variant="outlined"
            color="primary"
          >
            <span>Add To Cart</span>
            <AddShoppingCart className="add-to-cart-icon" />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductComponent;
