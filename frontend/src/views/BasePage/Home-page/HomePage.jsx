import React from "react";
import { Container, Grid } from "@material-ui/core";
// import { FormattedMessage } from "react-intl";

import "./style.scss";
import ProductComponent from "../../../components/Product/Product.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import HomeSwiper from "../../../components/HomeSwiper/HomeSwiper";


function HomePage() {
  return (
    <React.Fragment>
      <Container className="container">
        <HomeSwiper />
        <Grid container  spacing={3} justify='center' alignItems='center'>
          {new Array(50).fill(1).map((product, i) => (
            <ProductComponent key={i} product={product} />
          ))}
        </Grid>
      </Container>
      <FooterComponent />
    </React.Fragment>
  );
}

export default HomePage;
