import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';


export const getAllAnswers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/answers`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch answers', error);
    throw error;
  }
};