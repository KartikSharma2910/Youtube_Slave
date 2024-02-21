import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Store from "./redux/store";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
