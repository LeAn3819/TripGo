import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TourPage from "./Page/TourPage";
// import Restaurant from "./Page/Restaurant";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TourPage/>
  </StrictMode>
);
