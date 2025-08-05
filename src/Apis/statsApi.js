import axios from 'axios';

const BASE_URL = '/api/v1/ap/common';

async function fetchData(endpoint, key) {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data[key]; // extract the required field
  } catch (error) {
    throw new Error(
      error.response
        ? `HTTP error! Status: ${error.response.status}`
        : `Network error: ${error.message}`
    );
  }
}

export const getTotalRevenue = () => fetchData('revenues', 'total_revenue');
export const getTotalEarnings = () => fetchData('earnings', 'total_earnings');
export const getTotalPatients = () => fetchData('patients', 'total_active_patients');
export const getTotalDoctors = () => fetchData('doctors', 'active_doctor_count');
export const getTotalDiscounts = () => fetchData('discounts', 'total_discounts');
export const getTotalConsultations = () => fetchData('consultations', 'total_consultations');