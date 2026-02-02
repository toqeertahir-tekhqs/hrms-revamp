import axios from 'axios';

/**
 * Create Axios instance with base configuration
 * BaseURL comes from environment variable
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
});

export default axiosInstance;
