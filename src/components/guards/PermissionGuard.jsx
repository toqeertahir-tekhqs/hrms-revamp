import usePermission from '@/Hooks/usePermission';
import PropTypes from 'prop-types';

/**
 * Permission Guard Component
 * Shows/hides children based on user permissions
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Children to render if permission granted
 * @param {string|string[]} props.permission - Required permission(s)
 * @param {boolean} props.requireAll - If true, requires all permissions; if false, requires any (default: false)
 * @param {React.ReactNode} props.fallback - Component to show if permission denied (default: null)
 */
const PermissionGuard = ({ 
  children, 
  permission, 
  requireAll = false,
  fallback = null 
}) => {
  const { hasPermission, hasAllPermissions, hasAnyPermission } = usePermission();

  // Determine if user has required permission
  const isAuthorized = () => {
    if (!permission) {
      return true; // No permission required
    }

    if (Array.isArray(permission)) {
      return requireAll 
        ? hasAllPermissions(permission)
        : hasAnyPermission(permission);
    }

    return hasPermission(permission);
  };

  // Show children if authorized, otherwise show fallback
  return isAuthorized() ? <>{children}</> : <>{fallback}</>;
};

PermissionGuard.propTypes = {
  children: PropTypes.node.isRequired,
  permission: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  requireAll: PropTypes.bool,
  fallback: PropTypes.node,
};

export default PermissionGuard;
