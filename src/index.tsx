import React from "react";
import { Container, createRoot } from "react-dom/client";
import App from "./app/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

const root = createRoot(document.getElementById("root") as Container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
