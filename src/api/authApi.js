import useAxiosClient from '@/configuration/useAxiosClient';

/**
 * Authentication API Service
 * Centralized authentication API calls
 */

/**
 * Hook for authentication API calls
 * @returns {Object} Authentication API methods
 */
const useAuthApi = () => {
  const { postRequestPreLogin, postRequest, getRequest } = useAxiosClient();

  /**
   * Login user with credentials
   * @param {Object} credentials - User credentials
   * @param {string} credentials.email - User email
   * @param {string} credentials.password - User password
   * @returns {Promise<Object>} User data and token
   */
  const login = async (credentials) => {
    try {
      const response = await postRequestPreLogin('/api/auth/login', credentials);
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  /**
   * Logout current user
   * @returns {Promise<void>}
   */
  const logout = async () => {
    try {
      await postRequest('/api/auth/logout', {});
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  /**
   * Refresh authentication token
   * @param {string} refreshToken - Refresh token
   * @returns {Promise<Object>} New access token
   */
  const refreshToken = async (refreshToken) => {
    try {
      const response = await postRequest('/api/auth/refresh', { refreshToken });
      return response;
    } catch (error) {
      console.error('Token refresh error:', error);
      throw error;
    }
  };

  /**
   * Verify current token validity
   * @returns {Promise<Object>} User data if token is valid
   */
  const verifyToken = async () => {
    try {
      const response = await getRequest('/api/auth/verify');
      return response;
    } catch (error) {
      console.error('Token verification error:', error);
      throw error;
    }
  };

  /**
   * Request password reset
   * @param {string} email - User email
   * @returns {Promise<void>}
   */
  const forgotPassword = async (email) => {
    try {
      const response = await postRequestPreLogin('/api/auth/forgot-password', { email });
      return response;
    } catch (error) {
      console.error('Forgot password error:', error);
      throw error;
    }
  };

  /**
   * Reset password with token
   * @param {Object} data - Reset data
   * @param {string} data.token - Reset token
   * @param {string} data.password - New password
   * @returns {Promise<void>}
   */
  const resetPassword = async (data) => {
    try {
      const response = await postRequestPreLogin('/api/auth/reset-password', data);
      return response;
    } catch (error) {
      console.error('Reset password error:', error);
      throw error;
    }
  };

  return {
    login,
    logout,
    refreshToken,
    verifyToken,
    forgotPassword,
    resetPassword,
  };
};

export default useAuthApi;
