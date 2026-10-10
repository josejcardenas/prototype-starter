export function createInitialState(overrides = {}) {
  return {
    productName: "Prototype",
    tagline: "A focused full-stack prototype starter.",
    apiBaseUrl: "http://127.0.0.1:8000",
    ...overrides
  };
}
