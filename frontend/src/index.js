import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import "./assets/css/style.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/icofont.css";
import "./assets/css/animate.css";
import "./assets/css/extralayers.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/responsive.css";
// import "./assets/css/jquery-ui.min.css";
import "./assets/css/jquery.bootstrap-touchspin.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./rs-plugin/css/settings.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();