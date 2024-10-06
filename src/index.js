import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const containter = document.getElementById("root")
const root = createRoot(containter)
root.render(<App />);
