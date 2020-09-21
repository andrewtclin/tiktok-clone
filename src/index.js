import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// FRONTEND                         BACKEND
// 1. ReactJS                       1. Node.js
// 2. Material UI                   2. Express.js
// 3. Flexbox                       3. MongoDB + Mongoose
// 4. 3rd Party Ticker              4. Heroku Hosting
// 5. Scroll Snap
// 6. Firebase Hosting

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
