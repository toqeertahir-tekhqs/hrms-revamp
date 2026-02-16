/**
 * Permission Utility Functions
 * Helper functions for checking user permissions
 */

/**
 * Check if user has a specific permission
 * @param {string[]} userPermissions - Array of user's permissions
 * @param {string} requiredPermission - Permission to check
 * @returns {boolean} True if user has the permission
 */
export const hasPermission = (userPermissions, requiredPermission) => {
  if (!requiredPermission || !userPermissions) {
    return false;
  }
  
  return userPermissions.includes(requiredPermission);
};

/**
 * Check if user has ALL of the required permissions
 * @param {string[]} userPermissions - Array of user's permissions
 * @param {string[]} requiredPermissions - Array of required permissions
 * @returns {boolean} True if user has all permissions
 */
export const hasAllPermissions = (userPermissions, requiredPermissions) => {
  if (!requiredPermissions || requiredPermissions.length === 0) {
    return true;
  }
  
  if (!userPermissions || userPermissions.length === 0) {
    return false;
  }
  
  return requiredPermissions.every(permission => 
    userPermissions.includes(permission)
  );
};

/**
 * Check if user has ANY of the required permissions
 * @param {string[]} userPermissions - Array of user's permissions
 * @param {string[]} requiredPermissions - Array of required permissions
 * @returns {boolean} True if user has at least one permission
 */
export const hasAnyPermission = (userPermissions, requiredPermissions) => {
  if (!requiredPermissions || requiredPermissions.length === 0) {
    return true;
  }
  
  if (!userPermissions || userPermissions.length === 0) {
    return false;
  }
  
  return requiredPermissions.some(permission => 
    userPermissions.includes(permission)
  );
};

/**
 * Check if user has a specific role
 * @param {Object} user - User object
 * @param {string} requiredRole - Role to check
 * @returns {boolean} True if user has the role
 */
export const hasRole = (user, requiredRole) => {
  if (!user || !user.role || !requiredRole) {
    return false;
  }
  
  return user.role === requiredRole ||
         (Array.isArray(user.roles) && user.roles.includes(requiredRole));
};

/**
 * Permission constants for common HRMS permissions
 */
export const PERMISSIONS = {
  // Dashboard
  DASHBOARD_VIEW: 'dashboard.view',
  
  // Employees
  EMPLOYEES_VIEW: 'employees.view',
  EMPLOYEES_CREATE: 'employees.create',
  EMPLOYEES_EDIT: 'employees.edit',
  EMPLOYEES_DELETE: 'employees.delete',
  
  // Payroll
  PAYROLL_VIEW: 'payroll.view',
  PAYROLL_MANAGE: 'payroll.manage',
  PAYROLL_APPROVE: 'payroll.approve',
  
  // Leave Management
  LEAVE_VIEW: 'leave.view',
  LEAVE_REQUEST: 'leave.request',
  LEAVE_APPROVE: 'leave.approve',
  
  // Attendance
  ATTENDANCE_VIEW: 'attendance.view',
  ATTENDANCE_MANAGE: 'attendance.manage',
  
  // Reports
  REPORTS_VIEW: 'reports.view',
  REPORTS_EXPORT: 'reports.export',
  
  // Settings
  SETTINGS_VIEW: 'settings.view',
  SETTINGS_MANAGE: 'settings.manage',
  
  // Users & Permissions
  USERS_VIEW: 'users.view',
  USERS_MANAGE: 'users.manage',
  PERMISSIONS_MANAGE: 'permissions.manage',
  
  // Accommodations
  ACCOMMODATIONS_VIEW: 'accommodations.view',
  ACCOMMODATIONS_MANAGE: 'accommodations.manage',
  
  // Vehicles
  VEHICLES_VIEW: 'vehicles.view',
  VEHICLES_MANAGE: 'vehicles.manage',
};

/**
 * Role constants for common HRMS roles
 */
export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  HR_MANAGER: 'hr_manager',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
};
