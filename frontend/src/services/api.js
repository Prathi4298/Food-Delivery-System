import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

// Example API service for fetching food items
export const getFoodItems = async () => {
    try {
        const response = await axios.get(`${baseURL}/foods`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
