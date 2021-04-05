import React from "react";
import { Card, Grid } from "@material-ui/core";

import "./style.scss";
import {
  ProductActions,
  ProductContent,
  ProductMedia,
  ProductHeader,
} from "./products-components";

const ProductComponent = ({ product }) => {
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
        <ProductMedia product={product} />
        <ProductHeader product={product} />
        <ProductContent product={product} />
        <ProductActions product={product} />
      </Card>
    </Grid>
  );
};

export default ProductComponent;
