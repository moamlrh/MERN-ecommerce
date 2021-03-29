import React from "react";
import { Container } from "@material-ui/core";

import ProductComponent from "../../../components/Product/Product.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import NavbarComponent from "../../../components/Navbar/Navbar.component";

function HomePage() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Container>
        {new Array(12).fill(32).map((product) => (
          <ProductComponent />
        ))}
      </Container>
      <FooterComponent />
    </React.Fragment>
  );
}

export default HomePage;
