import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Column } from "./screens/Column";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Column />
  </StrictMode>,
);
