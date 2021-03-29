import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../../views/BasePage/Home-page/HomePage";
import Product from "../../views/BasePage/Product-page/ProductPage";

export default function BasePage() {
  return (
    <Switch>
      <Route exact path="/" componen={HomePage} />
      <Route exact path='/products/:id' componen={Product}/>
    </Switch>
  );
}
