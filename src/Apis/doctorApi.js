import axios from 'axios';

const BASE_URL = '/api/v1/ap'; // common base for all API calls

async function fetchData(endpoint) {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response
        ? `HTTP error! Status: ${error.response.status}`
        : `Network error: ${error.message}`
    );
  }
}

// doctorApi.js
export const getDoctorRegistrations = (params = {}) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value?.trim() !== "")
  );

  const query = new URLSearchParams(filteredParams).toString();
  return fetchData(`doctorregistrations${query ? `?${query}` : ""}`);
};
