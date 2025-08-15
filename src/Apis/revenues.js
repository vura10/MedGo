import axios from "axios";

const BASE_URL = "/api/v1/ap/revenue"; // Common Base URL for the payments and revenue


async function fetchData(endpoint) {
    try{
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

export const getDoctorCommissions = () => fetchData("doctorcommissions");

