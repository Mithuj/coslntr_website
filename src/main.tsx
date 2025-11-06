import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply dark mode by default since we're using a dark theme
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")!).render(<App />);
