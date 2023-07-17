import axios from 'axios';



const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';


export const getFormById = async (formId) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/forms/${formId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch form:', error);
        throw error;
    }
};