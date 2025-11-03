import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./lib/firebase"; // Inicjalizacja Firebase Analytics

createRoot(document.getElementById("root")!).render(<App />);
