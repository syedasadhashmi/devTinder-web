// For Production

// export const BASE_URL = "/api";

// Dor development

export const BASE_URL =
  location.hostname === "localhost" ? "http://localhost:7777/api" : "/api";
