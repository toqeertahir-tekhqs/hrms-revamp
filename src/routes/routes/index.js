// ============================================================================
// ROUTE PATH CONSTANTS
// ============================================================================
export const ROUTE_PATHS = Object.freeze({
  // Authentication Routes
  LOGIN: '/login',
  FORGET_PASSWORD: '/forget-password',
  CHECK_EMAIL: '/check-email',
  SET_PASSWORD: '/set-password',
  PASSWORD_RESET: '/password-reset',
  RESET_PASSWORD: '/reset-password',
  RESET_SCREEN_PASSWORD: '/reset-screen',

  // Core Routes
  DASHBOARD: '/',
  DASHBOARD_INDEX: '/dashboard',
  PERMISSION_DENIED: '/permission-denied',
  NOT_FOUND: '*',

  // Employee Routes
  EMPLOYEES: '/employees',
  ADD_EMPLOYEE: '/employees/add-employee',
  EDIT_EMPLOYEE: '/employees/edit-employee/:id',
  EMPLOYEE_VIEW: '/employees/employee-view/:id',
  EMPLOYEE_PROFILE: '/employee-profile/:id',
  RESUME_BUILDER: '/employees/additional-details/:id',
  REPORTING_EMPLOYEES: '/reporting-employees',

  // Organization Routes
  COMPANY: '/company',
  DEPARTMENT: '/department',
  DESIGNATION: '/designation',
  PROJECT: '/project',
  OFFICE_LOCATION: '/office-location',
  WORK_SHIFT: '/work-shift',
  LEAVE_TYPE: '/leave-types',
  LEAVE_SUB_TYPE: '/leave-types/leave-sub-types/:id',
  DOCUMENTS: '/documents',

  // User & Role Routes
  USERS: '/users',
  ADD_USERS: '/users/add-user',
  EDIT_USERS: '/users/edit-user/:id',
  USERS_PROFILE: '/users/user-profile',
  ROLE: '/roles',
  TASK_PERMISSION: '/task-permission',

  // Leave & Attendance Routes
  LEAVES: '/leaves',
  LEAVE_QUOTA_CALENDAR: '/leave-quota',
  LEAVE_QUOTA: '/leave-quota/view-leave-quota/:id',
  TIMESHEET: '/time-sheet',
  TIMESHEET_EMPLOYEE: '/time-sheet-employee',
  VIEW_LOGS: '/time-sheet/view-logs/:id',
  CALENDAR: '/calendar',
  CALENDAR_VIEW: '/calendar/calender-view/:id',
  CALENDAR_EMPLOYEE: '/employee-calendar',
  CALENDAR_EMPLOYEE_VIEW_DETAILS:
    '/employee-calendar/employee-calender-view/:id',

  // HR Forms Routes
  HR_FORMS: '/HR-forms',
  REQUESTS: '/requests',
  APPROVALS: '/approvals',

  // HR Forms - Add (No Employee ID)
  ADD_LEAVE_FORM: '/HR-forms/add-annual-form',
  ADD_SICK_LEAVE: '/HR-forms/add-medical-leave-form',
  ADD_CASUAL_LEAVE: '/HR-forms/add-casual-leave-form',
  ADD_WORK_FROM_HOME: '/HR-forms/add-work-from-home-form',
  ADD_ATTENDANCE: '/HR-forms/add-attendance-correction-form',
  ADD_DISCIPLINARY: '/HR-forms/add-disciplinary-action-form',
  ADD_REJOINING: '/HR-forms/add-rejoining-form',
  ADD_TERMINATION: '/HR-forms/add-employee-termination-form',
  ADD_RESIGNATION: '/HR-forms/add-employee-resignation-form',
  ADD_LOAN: '/HR-forms/add-loan-form',
  ADD_DATA: '/HR-forms/add-data-form',

  // HR Forms - Add (With Employee ID)
  ADD_LEAVE_FORM_EMPLOYEEID: '/HR-forms/add-annual-form/:employeeId',
  ADD_SICK_LEAVE_EMPLOYEEID: '/HR-forms/add-medical-leave-form/:employeeId',
  ADD_CASUAL_LEAVE_EMPLOYEEID: '/HR-forms/add-casual-leave-form/:employeeId',
  ADD_WORK_FROM_HOME_EMPLOYEEID:
    '/HR-forms/add-work-from-home-form/:employeeId',
  ADD_ATTENDANCE_EMPLOYEEID:
    '/HR-forms/add-attendance-correction-form/:employeeId',
  ADD_DISCIPLINARY_EMPLOYEEID:
    '/HR-forms/add-disciplinary-action-form/:employeeId',
  ADD_REJOINING_EMPLOYEEID: '/HR-forms/add-rejoining-form/:employeeId',
  ADD_TERMINATION_EMPLOYEEID:
    '/HR-forms/add-employee-termination-form/:employeeId',
  ADD_RESIGNATION_EMPLOYEEID:
    '/HR-forms/add-employee-resignation-form/:employeeId',
  ADD_LOAN_EMPLOYEEID: '/HR-forms/add-loan-form/:employeeId',
  ADD_DATA_EMPLOYEEID: '/HR-forms/add-data-form/:employeeId',

  // HR Forms - Requests
  LEAVE_FORM_REQUESTS: '/requests/annual-form/:requestId',
  SICK_LEAVE_REQUESTS: '/requests/medical-leave-form/:requestId',
  CASUAL_LEAVE_REQUESTS: '/requests/casual-leave-form/:requestId',
  WORK_FROM_HOME_REQUESTS: '/requests/work-from-home-form/:requestId',
  ATTENDANCE_REQUESTS: '/requests/attendance-correction-form/:requestId',
  DISCIPLINARY_REQUESTS: '/requests/disciplinary-action-form/:requestId',
  REJOINING_REQUESTS: '/requests/rejoining-form/:requestId',
  TERMINATION_REQUESTS: '/requests/employee-termination-form/:requestId',
  RESIGNATION_REQUESTS: '/requests/employee-resignation-form/:requestId',
  LOAN_REQUESTS: '/requests/loan-form/:requestId',

  // HR Forms - Approvals
  LEAVE_FORM_APPROVALS: '/approvals/annual-form/:formId',
  SICK_LEAVE_APPROVALS: '/approvals/medical-leave-form/:formId',
  CASUAL_LEAVE_APPROVALS: '/approvals/casual-leave-form/:formId',
  WORK_FROM_HOME_APPROVALS: '/approvals/work-from-home-form/:formId',
  ATTENDANCE_APPROVALS: '/approvals/attendance-correction-form/:formId',
  DISCIPLINARY_APPROVALS: '/approvals/disciplinary-action-form/:formId',
  REJOINING_APPROVALS: '/approvals/rejoining-form/:formId',
  TERMINATION_APPROVALS: '/approvals/employee-termination-form/:formId',
  RESIGNATION_APPROVALS: '/approvals/employee-resignation-form/:formId',
  LOAN_APPROVALS: '/approvals/loan-form/:formId',

  // HR Forms - View
  LEAVE_FORM_VIEW: '/read-annual-form/:formId',
  SICK_LEAVE_VIEW: '/read-medical-leave-form/:formId',
  CASUAL_LEAVE_VIEW: '/read-casual-leave-form/:formId',
  WORK_FROM_HOME_VIEW: '/read-work-from-home-form/:formId',
  ATTENDANCE_VIEW: '/read-attendance-correction-form/:formId',
  DISCIPLINARY_VIEW: '/read-disciplinary-action-form/:formId',
  REJOINING_VIEW: '/read-rejoining-form/:formId',
  TERMINATION_VIEW: '/read-employee-termination-form/:formId',
  RESIGNATION_VIEW: '/read-employee-resignation-form/:formId',
  LOAN_VIEW: '/read-loan-form/:formId',

  // HR Forms - Print
  PRINT_LEAVE_FORM: '/print-annual-form/:employeeId',
  PRINT_SICK_LEAVE_FORM: '/print-medical-leave-form/:formId',
  PRINT_CASUAL_LEAVE_FORM: '/print-casual-leave-form/:formId',
  PRINT_REJOINING_FORM: '/print-rejoining-form/:formId',
  PRINT_WARNING_FORM: '/print-disciplinary-action-form/:formId',
  PRINT_DATA_FORM: '/print-data-form',
  PRINT_LOAN_FORM: '/print-loan-form/:formId',
  PRINT_TERMINATION_FORM: '/print-employee-termination-form/:formId',
  PRINT_RESIGNATION_FORM: '/print-employee-resignation-form/:formId',

  // HR Forms - Settle
  SETTLE_APPROVALS: '/annual-reports/settle/:settleId',
  SETTLE_RESIGNATION: '/resignation-reports/settle/:settleId',
  SETTLE_TERMINATION: '/termination-reports/settle/:settleId',

  // HR Forms -Edit
  ANNUAL_FORM_EDIT: '/approvals/edit-annual-form/:editId',
  LOAN_FORM_EDIT: '/approvals/edit-loan-form/:editId',

  // Reports Routes
  STATUS_ANALYSIS: '/status-analysis',
  DATE_REPORTS: '/date-reports',
  ANNUAL_REPORTS: '/annual-reports',
  SICK_LEAVE_REPORTS: '/medical-leave-reports',
  CASUAL_LEAVE_REPORTS: '/casual-leave-reports',
  WORK_FROM_HOME_REPORTS: '/WFH-reports',
  ATTENDANCE_CORRECTION_REPORTS: '/attendance-correction-reports',
  TERMINATION_REPORTS: '/termination-reports',
  RESIGNATION_REPORTS: '/resignation-reports',
  REJOINING_REPORTS: '/rejoining-reports',
  WARNING_REPORTS: '/warning-reports',

  // Accommodation Routes
  ACCOMMODATION: '/accommodation',
  ACCOMMODATION_DASHBOARD: '/accommodation-dashboard',
  GUESTS: '/guests',
  ROOMS: '/rooms',

  // Vehicle Routes
  VEHICLE_DASHBOARD: '/vehicle-dashboard',
  VEHICLE: '/vehicles',
  VEHICLE_DETAIL: '/vehicles/vehicle-detail/:id',
  VEHICLE_STATUS: '/vehicle-status',

  // Payroll Routes
  PAYROLL_DASHBOARD: '/payroll',
  PAYROLL_FORM: '/payroll/payroll-form',
  PAYROLL_WORKING_HOURS: '/payroll/working-hours',
  PAYROLL_WORKING_HOURS_ADD: '/payroll/working-hours/add',
  PAYROLL_WORKING_HOURS_EDIT: '/payroll/working-hours/edit/:id',
  PAYROLL_WORKING_HOURS_VIEW: '/payroll/working-hours/view/:id',
  PAYROLL_CONTRACT_TYPES: '/payroll/contract-types',
  PAYROLL_CONTRACT_TYPES_ADD: '/payroll/contract-types/add',
  PAYROLL_CONTRACT_TYPES_EDIT: '/payroll/contract-types/edit/:id',
  PAYROLL_CONTRACT_TYPES_VIEW: '/payroll/contract-types/view/:id',
  PAYROLL_PAY_STRUCTURE_RULE_CATEGORY: '/payroll/pay-structure-rule-categories',
  PAYROLL_PAY_STRUCTURE_RULE_CATEGORY_ADD:
    '/payroll/pay-structure-rule-categories/add',
  PAYROLL_PAY_STRUCTURE_RULE_CATEGORY_EDIT:
    '/payroll/pay-structure-rule-categories/edit/:id',
  PAYROLL_PAY_STRUCTURE_RULE_CATEGORY_VIEW:
    '/payroll/pay-structure-rule-categories/view/:id',
  PAYROLL_PAY_STRUCTURE_GROUPS: '/payroll/pay-structure-groups',
  PAYROLL_PAY_STRUCTURE_GROUPS_ADD: '/payroll/pay-structure-groups/add',
  PAYROLL_PAY_STRUCTURE_GROUPS_EDIT: '/payroll/pay-structure-groups/edit/:id',
  PAYROLL_PAY_STRUCTURE_GROUPS_VIEW: '/payroll/pay-structure-groups/view/:id',
  PAYROLL_PAY_STRUCTURES: '/payroll/pay-structures',
  PAYROLL_PAY_STRUCTURES_ADD: '/payroll/pay-structures/add',
  PAYROLL_PAY_STRUCTURES_EDIT: '/payroll/pay-structures/edit/:id',
  PAYROLL_PAY_STRUCTURES_VIEW: '/payroll/pay-structures/view/:id',
  PAYROLL_PAY_STRUCTURE_RULES: '/payroll/pay-structure-rules',
  PAYROLL_PAY_STRUCTURE_RULES_ADD: '/payroll/pay-structure-rules/add',
  PAYROLL_PAY_STRUCTURE_RULES_EDIT: '/payroll/pay-structure-rules/edit/:id',
  PAYROLL_PAY_STRUCTURE_RULES_VIEW: '/payroll/pay-structure-rules/view/:id',
  PAYROLL_WORK_ENTRY_TYPES: '/payroll/work-entry-types',
  PAYROLL_WORK_ENTRY_TYPES_ADD: '/payroll/work-entry-types/add',
  PAYROLL_WORK_ENTRY_TYPES_EDIT: '/payroll/work-entry-types/edit/:id',
  PAYROLL_WORK_ENTRY_TYPES_VIEW: '/payroll/work-entry-types/view/:id',
  PAYROLL_PAY_RULE: '/payroll/pay-rules',
  PAYROLL_PAY_RULE_ADD: '/payroll/pay-rules/add',
  PAYROLL_PAY_RULE_EDIT: '/payroll/pay-rules/edit/:id',
  PAYROLL_PAY_RULE_VIEW: '/payroll/pay-rules/view/:id',
  PAYROLL_CONTRACTS: '/payroll/contracts',
  PAYROLL_CONTRACTS_ADD: '/payroll/contracts/add',
  PAYROLL_CONTRACTS_EDIT: '/payroll/contracts/edit/:id',
  PAYROLL_CONTRACTS_DETAILS: '/payroll/contracts/details/:id',
  PAYROLL_CONTRACT_TEMPLATES: '/payroll/contract-templates',
  PAYROLL_CONTRACT_TEMPLATES_ADD: '/payroll/contract-templates/add',
  PAYROLL_CONTRACT_TEMPLATES_EDIT: '/payroll/contract-templates/edit/:id',
  PAYROLL_CONTRACT_TEMPLATES_VIEW: '/payroll/contract-templates/view/:id',
  PAYROLL_PAY_INPUT_TYPES: '/payroll/pay-inputs',
  PAYROLL_PAY_INPUT_TYPES_ADD: '/payroll/pay-inputs/add',
  PAYROLL_PAY_INPUT_TYPES_EDIT: '/payroll/pay-inputs/edit/:id',
  PAYROLL_PAY_INPUT_TYPES_VIEW: '/payroll/pay-inputs/view/:id',
  PAYROLL_TAX_CALCULATION_SETUP: '/payroll/tax-calculation-setups',
  PAYROLL_TAX_CALCULATION_SETUP_ADD: '/payroll/tax-calculation-setups/add',
  PAYROLL_TAX_CALCULATION_SETUP_EDIT:
    '/payroll/tax-calculation-setups/edit/:id',
  PAYROLL_TAX_CALCULATION_SETUP_VIEW:
    '/payroll/tax-calculation-setups/view/:id',
  PAYROLL_PAY_BATCHES: '/payroll/pay-batches',
  PAYROLL_PAY_BATCHES_VIEW: '/payroll/pay-batches/view/:id',
  PAYROLL_PAY_SLIPS: '/payroll/pay-slips',
  PAYROLL_PAY_SLIPS_VIEW: '/payroll/pay-slips/view/:id',
  PAYROLL_PAY_SLIPS_ADD: '/payroll/pay-slips/add',
  PAYROLL_PAY_SLIPS_EDIT: '/payroll/pay-slips/edit/:id',

  // Settings & Other Routes
  SETTINGS: '/settings',
  SETTINGS_CATEGORY: '/settings/:category',
  REACT_FLOW: '/ReactFlow',
  HR_DASHBOARD: '/hr-dashboard',
  SAVE_PAGES: '/save-pages',
});
