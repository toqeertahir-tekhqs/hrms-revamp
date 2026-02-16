// ============================================================================
// ROUTE PATH CONSTANTS
// ============================================================================
export const ROUTE_PATHS = Object.freeze({
  // Authentication Routes
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  SET_PASSWORD: '/set-password',
  EMAIL_SENT: '/email-sent',
  EMAIL_VERIFY: '/email-verify',
  // Core Routes
  DASHBOARD: '/',
  DASHBOARD_INDEX: '/dashboard',
  PERMISSION_DENIED: '/permission-denied',
  NOT_FOUND: '*',

  // Accommodation Routes
  ACCOMMODATION: '/accommodation',

  // Vehicle Routes
  VEHICLE_DASHBOARD: '/vehicle-dashboard',
  // Payroll Routes
  PAYROLL_DASHBOARD: '/payroll',
});
