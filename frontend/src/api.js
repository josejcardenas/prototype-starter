export async function sendMessage(apiBaseUrl, message) {
  const response = await fetch(`${apiBaseUrl}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const detail = payload?.detail || "The backend could not process the message.";
    throw new Error(detail);
  }

  return payload;
}
