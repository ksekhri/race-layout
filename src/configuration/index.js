import { createRoot } from "react-dom/client";
import { Configuration } from "./Configuration";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<Configuration />);
