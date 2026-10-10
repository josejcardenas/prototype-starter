import "./styles/styles.css";
import { createInitialState } from "./state.js";
import { renderShell } from "./components/shell.js";

const state = createInitialState({
  productName: "__PRODUCT_NAME__",
  tagline: "__ONE_SENTENCE_VALUE_PROP__",
  apiBaseUrl: "http://127.0.0.1:8000"
});

renderShell(document.querySelector("#app"), state);
