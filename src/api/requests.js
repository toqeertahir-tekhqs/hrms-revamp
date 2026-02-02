import axiosInstance from './interceptors';

/**
 * Generic API request helpers
 * All methods return response.data directly for cleaner usage
 */

/**
 * GET request
 * @param {string} url - API endpoint
 * @param {object} config - Axios config (optional)
 * @returns {Promise} Response data
 */
export const get = (url, config = {}) => {
  return axiosInstance.get(url, config).then((response) => response.data);
};

/**
 * POST request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Axios config (optional)
 * @returns {Promise} Response data
 */
export const post = (url, data = {}, config = {}) => {
  return axiosInstance.post(url, data, config).then((response) => response.data);
};

/**
 * PUT request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Axios config (optional)
 * @returns {Promise} Response data
 */
export const put = (url, data = {}, config = {}) => {
  return axiosInstance.put(url, data, config).then((response) => response.data);
};

/**
 * PATCH request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Axios config (optional)
 * @returns {Promise} Response data
 */
export const patch = (url, data = {}, config = {}) => {
  return axiosInstance.patch(url, data, config).then((response) => response.data);
};

/**
 * DELETE request
 * @param {string} url - API endpoint
 * @param {object} config - Axios config (optional)
 * @returns {Promise} Response data
 */
export const deleteRequest = (url, config = {}) => {
  return axiosInstance.delete(url, config).then((response) => response.data);
};

// Export all as a unified API object for convenience
const api = {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
};

export default api;
