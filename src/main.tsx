import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Container } from "./components/container";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Container>Olá</Container>
  </StrictMode>,
);
