import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            background: "#f87171", // tibbiyot motivi (xavf yoki xatolik)
            color: "#fff",
            fontWeight: "bold",
          },
          duration: 3000,
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
