
import axios from 'axios';

const API_URL = 'https://dummyjson.com/auth';

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
        expiresInMins: 30
    });
    return response.data;
};

export const getCurrentUser = async (token) => {
    const response = await axios.get(`${API_URL}/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const refreshSession = async (refreshToken) => {
    const response = await axios.post(`${API_URL}/refresh`, {
        refreshToken,
        expiresInMins: 30
    });
    return response.data;
};
