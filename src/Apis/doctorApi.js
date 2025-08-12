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

export const getDoctorRegistrations = () => fetchData('doctorregistrations');