import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavbarComponent from "../../components/Navbar/Navbar.component";

import HomePage from "../../views/BasePage/Home/HomePage";
import ProductPage from "../../views/BasePage/Product/ProductPage";
import CartPage from "../../views/BasePage/Cart/CartPage";
import NotFoundPage from "../../views/BasePage/404Page/NotFoundPage";

export default function BasePage() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Container className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart/:id" component={CartPage} />

          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}
