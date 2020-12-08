import React from "react";
import ReactDOM from "react-dom";
import { install } from "@xdn/prefetch/window";

import "./index.css";
import App from "./App";

install();

ReactDOM.render(<App />, document.getElementById("root"));
