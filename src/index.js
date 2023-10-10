import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "modern-normalize/modern-normalize.css";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
