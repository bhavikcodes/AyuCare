import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";



// Load Clerk Publishable Key from environment variable
const PUBLISHABLE_KEY = "pk_test_Z29yZ2VvdXMtZ2lyYWZmZS0xMC5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  console.error("Error: Clerk Publishable Key is missing. Add it to your .env file.");
}

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </React.StrictMode>
  );
} else {
  console.error("Error: Root element not found.");
}