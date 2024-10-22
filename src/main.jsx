import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FunActivitiesPage from "./Page/FunActivitiesPage";
// import HomePage from "./Page/HomePage";
// import Restaurant from "./Page/Restaurant";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FunActivitiesPage />
  </StrictMode>
);
