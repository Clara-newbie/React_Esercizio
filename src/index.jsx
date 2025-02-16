import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const appComponent = <App />;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(appComponent);

// createRoot(document.getElementById('root')).render(<App />)
