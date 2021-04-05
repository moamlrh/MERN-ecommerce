import React from "react";
import { CircularProgress, Grid, LinearProgress } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import "./style.scss";

export function LoadingLiner() {
  return (
    <div className="liner-progress">
      <LinearProgress />
    </div>
  );
}

export function LoadingCircular() {
  return (
    <div className="circular-progress">
      <CircularProgress />
    </div>
  );
}

export function ProductsLoading() {
  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      className="products-loading"
    >
      <Skeleton variant="rect" width={300} height={150} />
    </Grid>
  );
}
