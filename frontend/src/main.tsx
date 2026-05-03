import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


export const authService = "http://localhost:5000";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={process.env.GMAIL_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
