import { selectUserPermissions } from '@/features/auth/authSlice';
import { useSelector } from 'react-redux';

/**
 * Custom hook to check if user has permission
 * @param {string} permission - Permission key to check
 * @returns {boolean} - True if user has permission
 */
export const useHasPermission = (permission) => {
  const permissions = useSelector(selectUserPermissions);
  
  if (!permission) return true;
  if (!permissions) return false;
  
  return permissions.includes(permission);
};

/**
 * Custom hook to check if user has ANY of the provided permissions
 * @param {string[]} requiredPermissions - Array of permission keys
 * @returns {boolean} - True if user has at least one
 */
export const useHasAnyPermission = (requiredPermissions = []) => {
  const permissions = useSelector(selectUserPermissions);
  
  if (!requiredPermissions.length) return true;
  if (!permissions) return false;
  
  return requiredPermissions.some(p => permissions.includes(p));
};
