import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
import ProductComponent from "../../../components/Product/Product";
import FooterComponent from "../../../components/Footer/Footer.component";
import HomeSwiper from "../../../components/HomeSwiper/HomeSwiper";
import { ProductsLoading } from "../../../components/Loading/loading";
import ErrorComponent from "../../../components/Error/ErrorComponent";

// redux
import { getAllProductsSaga } from "./redux/getAllProductsRedux";

function HomePage() {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.products.getAllProductsStore
  );

  useEffect(() => {
    dispatch(getAllProductsSaga());
  }, []);

  if (error) return <ErrorComponent />;
  return (
    <React.Fragment>
      <Container className="container">
        <HomeSwiper />
        {loading || !products ? (
          <Grid container spacing={3}>
            {new Array(10).fill("").map((_, i) => (
              <ProductsLoading key={i} />
            ))}
          </Grid>
        ) : (
          <Grid
            className="products-grid"
            container
            spacing={3}
            justify="center"
            alignItems="center"
          >
            {products.length === 0 && (
              <Typography variant="h4">There is no products yet !</Typography>
            )}
            {products.map((product, i) => (
              <ProductComponent key={i} product={product} />
            ))}
          </Grid>
        )}
      </Container>
      <FooterComponent />
      <ToastContainer />
    </React.Fragment>
  );
}

export default HomePage;
