import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavbarComponent from "../../components/Navbar/Navbar.component";

import HomePage from "../../views/BasePage/Home-page/HomePage";
import Product from "../../views/BasePage/Product-page/ProductPage";

export default function BasePage() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Container className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}
