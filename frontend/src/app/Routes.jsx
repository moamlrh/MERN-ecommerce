import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import BasePage from "./pages/BasePage";

const Routes = () => {
  const isUserAuth = localStorage.getItem("token");
  return (
    <Switch>
      {isUserAuth ? (
        <Route>
          <AuthPage />
        </Route>
      ) : (
        <Redirect to="/" />
      )}

      {isUserAuth ? (
        <Redirect to="/auth/login" />
      ) : (
          <Route>
              <BasePage />
          </Route>
      )}
    </Switch>
  );
};

export default Routes;
