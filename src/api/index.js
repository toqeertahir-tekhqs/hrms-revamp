/**
 * Centralized API exports
 * Import API utilities from this file throughout the app
 */

import axiosInstance from './interceptors';
import api, { deleteRequest, get, patch, post, put } from './requests';

export { axiosInstance, deleteRequest, get, patch, post, put };

export default api;
