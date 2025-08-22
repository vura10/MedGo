import axios from "axios";

const API_BASE_URL = "/api/v1/ap/login"; // proxy handled in vite.config.js

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, {
      username,
      password,
    });

    return response.data; 
    // Example:
    // { "message": "Login successful", "status": 1 }
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    } else {
      throw new Error("Network error. Please try again later.");
    }
  }
};
