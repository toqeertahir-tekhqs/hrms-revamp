import { hasAllPermissions, hasAnyPermission, hasPermission } from '@/utils/permissions';
import { useSelector } from 'react-redux';

/**
 * Hook to check user permissions
 * @returns {Object} Permission checking functions
 */
const usePermission = () => {
  const { userPermissions } = useSelector((state) => state.states);
  const { userData } = useSelector((state) => state.states);

  /**
   * Check if user has a specific permission
   * @param {string} permission - Permission to check
   * @returns {boolean} True if user has the permission
   */
  const checkPermission = (permission) => {
    return hasPermission(userPermissions, permission);
  };

  /**
   * Check if user has ALL of the required permissions
   * @param {string[]} permissions - Array of required permissions
   * @returns {boolean} True if user has all permissions
   */
  const checkAllPermissions = (permissions) => {
    return hasAllPermissions(userPermissions, permissions);
  };

  /**
   * Check if user has ANY of the required permissions
   * @param {string[]} permissions - Array of required permissions
   * @returns {boolean} True if user has at least one permission
   */
  const checkAnyPermission = (permissions) => {
    return hasAnyPermission(userPermissions, permissions);
  };

  /**
   * Check if user has a specific role
   * @param {string} role - Role to check
   * @returns {boolean} True if user has the role
   */
  const checkRole = (role) => {
    if (!userData || !userData.role) {
      return false;
    }
    
    return userData.role === role ||
           (Array.isArray(userData.roles) && userData.roles.includes(role));
  };

  return {
    hasPermission: checkPermission,
    hasAllPermissions: checkAllPermissions,
    hasAnyPermission: checkAnyPermission,
    hasRole: checkRole,
    permissions: userPermissions,
    user: userData,
  };
};

export default usePermission;
