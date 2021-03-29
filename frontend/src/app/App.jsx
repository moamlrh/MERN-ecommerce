import React from "react";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import store from "../redux/store";
import axiosConfig from "../config/AxiosConfig";

// axios config with default configration
axiosConfig()

function App() {
  return (
    // <IntlProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    // </IntlProvider>
  );
}

export default App;
