import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import SwatchProvider from "./components/SwatchProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <SwatchProvider>
      <App />
    </SwatchProvider>
  </MantineProvider>
);
