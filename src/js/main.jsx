import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "../styles/index.css";

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(<Home seconds={counter} />);
  counter++;
}, 1000);
