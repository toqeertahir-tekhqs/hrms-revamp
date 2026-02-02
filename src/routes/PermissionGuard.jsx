import { useHasPermission } from '@/hooks/usePermission';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * Route Guard for Permissions
 * @param {Object} props
 * @param {string} props.permission - Permission required to access route
 * @param {React.ReactNode} props.children - Child components
 */
const PermissionGuard = ({ permission, children }) => {
  const hasPermission = useHasPermission(permission);

  if (!hasPermission) {
    return <Navigate to="/403" replace />;
  }

  return children ? children : <Outlet />;
};

export default PermissionGuard;
