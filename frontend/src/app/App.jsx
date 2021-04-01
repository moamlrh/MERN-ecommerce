import React from "react";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";

// import store from "../redux/store";
import axiosConfig from "../config/AxiosConfig";
import I18nProvider from "../config/I18n/I18nProvider";

// axios config with default configration
axiosConfig();

function App() {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <I18nProvider local={"en"}>
          {/* <Provider store={store}> */}
          <Routes />
          {/* </Provider> */}
        </I18nProvider>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
