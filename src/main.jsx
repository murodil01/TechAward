import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        className: "",
        style: {
          background: "#f87171", // qizil rang tibbiyot motivi
          color: "#fff",
          fontWeight: "bold",
        },
        duration: 3000, // 3 soniya
      }}
    />
  </StrictMode>
);
