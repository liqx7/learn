// before
import { render } from "react-dom";
const container = document.getElementById("app");
render(<App tab="home" />, container);

// after
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
