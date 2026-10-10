import { sendMessage } from "../api.js";

export function renderShell(root, state) {
  root.innerHTML = `
    <section class="app-shell">
      <section class="hero">
        <p class="eyebrow">Prototype Starter Kit</p>
        <h1>${state.productName}</h1>
        <p class="tagline">${state.tagline}</p>
      </section>

      <section class="demo-panel" aria-labelledby="demo-title">
        <div class="demo-copy">
          <h2 id="demo-title">Backend Message Demo</h2>
          <p>Send a message to the FastAPI backend and render the JSON answer here.</p>
        </div>

        <form id="message-form" class="message-form">
          <label class="input-label" for="message-input">Message</label>
          <textarea id="message-input" rows="6" placeholder="Type a message for the backend"></textarea>
          <div class="actions">
            <button id="send-button" type="submit">Send message</button>
            <button id="clear-button" type="button" class="secondary">Clear</button>
          </div>
        </form>

        <section class="response-area" aria-live="polite">
          <div class="response-header">
            <h2>Response</h2>
            <span id="connection-status" class="status">Ready</span>
          </div>
          <pre id="result-panel" class="result-panel">No response yet.</pre>
        </section>
      </section>
    </section>
  `;

  const form = root.querySelector("#message-form");
  const input = root.querySelector("#message-input");
  const result = root.querySelector("#result-panel");
  const status = root.querySelector("#connection-status");
  const sendButton = root.querySelector("#send-button");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = input.value.trim();

    if (!value) {
      status.textContent = "Missing message";
      result.textContent = "Type a message before sending it to the backend.";
      return;
    }

    status.textContent = "Sending";
    sendButton.disabled = true;
    result.textContent = "Waiting for backend response...";

    try {
      const response = await sendMessage(state.apiBaseUrl, value);
      status.textContent = "Answered";
      result.textContent = JSON.stringify(response, null, 2);
    } catch (error) {
      status.textContent = "Error";
      result.textContent = error.message;
    } finally {
      sendButton.disabled = false;
    }
  });

  root.querySelector("#clear-button").addEventListener("click", () => {
    input.value = "";
    status.textContent = "Ready";
    result.textContent = "No response yet.";
  });
}
