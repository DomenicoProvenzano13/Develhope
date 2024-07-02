import { createRoot } from "react-dom/client";
import { Root } from "./Root";

import "./index.css";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(<Root />);
