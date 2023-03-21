import { createRoot } from "react-dom/client";
import { LayoutEditor } from "./LayoutEditor";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<LayoutEditor />);
