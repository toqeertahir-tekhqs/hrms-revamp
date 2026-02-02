import { message } from 'antd';
import axiosInstance from './axiosInstance';

/**
 * Request interceptor
 * Injects Authorization header with token from localStorage
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const persistRoot = localStorage.getItem('persist:root');
    
    if (persistRoot) {
      try {
        const parsed = JSON.parse(persistRoot);
        const authState = JSON.parse(parsed.auth);
        
        if (authState && authState.token) {
          config.headers.Authorization = `Bearer ${authState.token}`;
        }
      } catch (error) {
        console.error('Error parsing auth token:', error);
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Handles global error responses
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Return successful response as-is
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized - clear auth and redirect to login
    if (error.response && error.response.status === 401) {
      // Clear localStorage
      localStorage.removeItem('persist:root');
      
      // Show error message
      message.error('Session expired. Please login again.');
      
      // Redirect to login page
      window.location.href = '/login';
    } 
    // Handle 403 Forbidden
    else if (error.response && error.response.status === 403) {
      message.error('You do not have permission to access this resource.');
    }
    // Handle 404 Not Found
    else if (error.response && error.response.status === 404) {
      message.error('Resource not found.');
    }
    // Handle 500 Server Error
    else if (error.response && error.response.status === 500) {
      message.error('Server error. Please try again later.');
    }
    // Handle network errors
    else if (!error.response) {
      message.error('Network error. Please check your connection.');
    }
    // Handle other errors
    else {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      message.error(errorMessage);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
