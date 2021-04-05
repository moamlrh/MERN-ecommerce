import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import BasePage from "./pages/BasePage";

const Routes = () => {
  const isUserAuth = localStorage.getItem("token");

  return (
    <Switch>
      {isUserAuth ? (
        <Route path="/auth">
          <AuthPage />
        </Route>
      ) : (
        <Route path="/">
          <BasePage />
        </Route>
      )}
    </Switch>
  );
};

export default Routes;
