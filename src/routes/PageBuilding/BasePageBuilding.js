// ============================================================================
// ROUTE CONFIGURATION - Organized and Easy to Read
// ============================================================================

import { Spin } from 'antd';
import { usePermissionVariables } from 'Hooks/HasPermission';
import CheckEmail from 'pages/Auth/CheckEmail';
import ForgetPassword from 'pages/Auth/ForgetPassword';
import PasswordReset from 'pages/Auth/PasswordReset';
import SetPassword from 'pages/Auth/SetPassword';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

// ============================================================================
// AUTH IMPORTS
// ============================================================================
const Login = lazy(() => import('pages/Auth/Login'));

// ============================================================================
// DASHBOARD & CORE IMPORTS
// ============================================================================
import TimeSheet from 'pages//ComponentPermissionsSwitch/Timesheet';
import DashboardSwitch from 'pages/ComponentPermissionsSwitch/Dashboard';
import HrDashboard from 'pages/HrDashboard';

// ============================================================================
// EMPLOYEE MANAGEMENT IMPORTS
// ============================================================================
import ResumeBuilder from 'pages/EmployeeModule/Resume-Builder';
import Employees from '~/pages/EmployeeModule/AdminEmployees';
import EditEmployee from '~/pages/EmployeeModule/AdminEmployees/components/editStepper/EditEmployee';
import AddEmployee from '~/pages/EmployeeModule/AdminEmployees/components/stepper/AddEmployee';
import TabsViewEmployee from '~/pages/EmployeeModule/AdminEmployees/components/TabsViewEmployee';
import ReportingEmployees from '~/pages/EmployeeModule/EmployeesDetails/Dashboard/components/ReportingEmployees';
import EmployeeProfile from '~/pages/EmployeeModule/EmployeesDetails/Employee/index';

// ============================================================================
// ORGANIZATION SETUP IMPORTS
// ============================================================================
import Project from 'pages/Organizations/Projects';
import Company from '~/pages/Organizations/Company';
import Department from '~/pages/Organizations/Department';
import Designation from '~/pages/Organizations/Designation';
import Documents from '~/pages/Organizations/Documents';
import OfficeLocation from '~/pages/Organizations/OfficeLocation';
import Worksheet from '~/pages/Organizations/Worksheet';

// ============================================================================
// USER & ROLE MANAGEMENT IMPORTS
// ============================================================================
import UserProfileModal from 'components/SideBar/components/EditUserProfile';
import Roles from '~/pages/UserModule/Role';
import TaskPermission from '~/pages/UserModule/TaskPermission';
import Users from '~/pages/UserModule/Users';
import AddUser from '~/pages/UserModule/Users/components/AddUsersModal';
import EditUser from '~/pages/UserModule/Users/components/EditUserModal';

// ============================================================================
// LEAVE & ATTENDANCE IMPORTS
// ============================================================================
import Leaves from 'pages/Leaves';
import Calendar from 'pages/Timesheet/components/Calendar';
import CalendarView from 'pages/Timesheet/components/Calendar/CalendarView';
import EmployeeCalendar from 'pages/Timesheet/components/Calendar/components/EmployeeCalendar';
import EmployeeCalendarCalendarView from 'pages/Timesheet/components/Calendar/components/EmployeeCalendar/CalendarView';
import ViewLogs from 'pages/Timesheet/components/ViewLogs';
import LeaveQuotaCalendar from '~/pages/Organizations/LeaveQuotaCalendar';
import LeaveQuota from '~/pages/Organizations/LeaveQuotaCalendar/components/LeaveQuota';
import LeaveType from '~/pages/Organizations/LeaveType';
import LeaveSubType from '~/pages/Organizations/LeaveType/components/LeaveSubTypes';

// ============================================================================
// HR FORMS IMPORTS
// ============================================================================
import HrForms from 'pages/HrForms';
import Approvals from 'pages/HrForms/Approvals';
import Requests from 'pages/HrForms/Requests';

// HR Form Components
import AttendanceCorrectionForm from '~/pages/HrForms/HrFormsModule/AttendanceCorrection/AttendanceCorrection';
import CasualLeaveForm from '~/pages/HrForms/HrFormsModule/CasualLeaveComponent/CasualLeaveComponent';
import DataForm from '~/pages/HrForms/HrFormsModule/DataForm';
import DisciplinaryActionForm from '~/pages/HrForms/HrFormsModule/DisciplinaryActionFormComponent/DisciplinaryActionForm';
import LeaveForm from '~/pages/HrForms/HrFormsModule/LeaveComponent/LeaveForm';
import LoanForm from '~/pages/HrForms/HrFormsModule/LoanComponent/LoanForm';
import RejoiningForm from '~/pages/HrForms/HrFormsModule/RejoiningFormComponent/RejoiningForm';
import ResignationForm from '~/pages/HrForms/HrFormsModule/ResignationComponent/ResignationForm';
import SickLeaveForm from '~/pages/HrForms/HrFormsModule/SickLeaveComponent/SickLeaveForm';
import TerminationLetterForm from '~/pages/HrForms/HrFormsModule/TerminationLetterComponent/TerminationLetterForm';
import WorkFromHomeForm from '~/pages/HrForms/HrFormsModule/WorkFromHome/WorkFromHome';

// ============================================================================
// REPORTS & ANALYTICS IMPORTS
// ============================================================================
import AnnualReports from 'pages/AnalysisAndReporting/AnnualReports';
import CasualLeaveReports from 'pages/AnalysisAndReporting/CasualLeaveReports';
import DateReports from 'pages/AnalysisAndReporting/DateReports';
import RejoiningReports from 'pages/AnalysisAndReporting/RejoiningReports';
import ResignationReports from 'pages/AnalysisAndReporting/ResignationReports';
import SickLeaveReports from 'pages/AnalysisAndReporting/SickLeaveReports';
import StatusAnalysis from 'pages/AnalysisAndReporting/StatusAnalysis';
import TerminationReports from 'pages/AnalysisAndReporting/TerminationReports';
import AttendanceCorrectionReports from '~/pages/AnalysisAndReporting/AttendanceCorrectionReports';
import WarningReports from '~/pages/AnalysisAndReporting/WarningReports';
import WFHReports from '~/pages/AnalysisAndReporting/WFHReports';

// ============================================================================
// ACCOMMODATION IMPORTS
// ============================================================================
import Accommodation from '~/pages/Accommodations/Accommodation';
import AccommodationDashboard from '~/pages/Accommodations/Dashboard';
import Guests from '~/pages/Accommodations/Guests';
import Rooms from '~/pages/Accommodations/Rooms';

// ============================================================================
// VEHICLE MANAGEMENT IMPORTS
// ============================================================================
import VehicleDashboard from 'pages/Vehicle/Dashboard';
import Vehicles from 'pages/Vehicle/Vehicles';
import VehicleDetails from 'pages/Vehicle/Vehicles/components/TabsViewVehicle';
import VehiclesStatus from 'pages/Vehicle/VehiclesStatus';

// ============================================================================
// PAYROLL IMPORTS
// ============================================================================
import PayrollDashboard from 'pages/Payroll/PayrollDashboard';
import PayrollForm from 'pages/RoughPages/PayrollForm';
import ContractType from '~/pages/Payroll/Configuration/ContractTypes';
import ContractTypeView from '~/pages/Payroll/Configuration/ContractTypes/View';
import PayInputTypes from '~/pages/Payroll/Configuration/PayInputType';
import PayInputTypesView from '~/pages/Payroll/Configuration/PayInputType/View';
import PayRules from '~/pages/Payroll/Configuration/PayRules';
import PayRulesView from '~/pages/Payroll/Configuration/PayRules/View';
import PayStructureGroups from '~/pages/Payroll/Configuration/PayStructureGroups';
import PayStructureGroupsView from '~/pages/Payroll/Configuration/PayStructureGroups/View';
import PayStructureRuleCategory from '~/pages/Payroll/Configuration/PayStructureRuleCategory';
import PayStructureRuleCategoryView from '~/pages/Payroll/Configuration/PayStructureRuleCategory/View';
import PayStructures from '~/pages/Payroll/Configuration/PayStructures';
import PayStructuresCrud from '~/pages/Payroll/Configuration/PayStructures/AddEdit';
import PayStructuresView from '~/pages/Payroll/Configuration/PayStructures/View';
import TaxCalculationSetup from '~/pages/Payroll/Configuration/TaxCalculationSetup';
import TaxCalculationSetupCrud from '~/pages/Payroll/Configuration/TaxCalculationSetup/AddEdit';
import TaxCalculationSetupView from '~/pages/Payroll/Configuration/TaxCalculationSetup/View';
import WorkEntryTypes from '~/pages/Payroll/Configuration/WorkEntryTypes';
import WorkEntryTypesView from '~/pages/Payroll/Configuration/WorkEntryTypes/View';
import WorkingHours from '~/pages/Payroll/Configuration/WorkingHours';
import WorkingHoursView from '~/pages/Payroll/Configuration/WorkingHours/View';
import PayrollContracts from '~/pages/Payroll/ContractModule/Contracts';
import PayrollContractsCrud from '~/pages/Payroll/ContractModule/Contracts/AddEdit';
import PayrollContractsDetails from '~/pages/Payroll/ContractModule/Contracts/components/details/Details';
import ContractTemplates from '~/pages/Payroll/ContractModule/ContractTemplates';
import ContractTemplateCrud from '~/pages/Payroll/ContractModule/ContractTemplates/AddEdit';
import ContractTemplateView from '~/pages/Payroll/ContractModule/ContractTemplates/View';
import PayBatches from '~/pages/Payroll/Payslip/PayBatches';
import PayBatchesView from '~/pages/Payroll/Payslip/PayBatches/View';
import PaySlips from '~/pages/Payroll/Payslip/Payslips';
import PaySlipsCrud from '~/pages/Payroll/Payslip/Payslips/AddEdit';
import PaySlipsView from '~/pages/Payroll/Payslip/Payslips/View';

// ============================================================================
// OTHER IMPORTS
// ============================================================================
import PermissionDenied from 'pages/PermissionDenied';
import PermissionDeniedComponent from 'pages/PermissionDenied/PermissionDeniedComponent';
import PermissionDeniedComponentSettings from 'pages/PermissionDenied/PermissionDeniedComponentSettings';
import ReactFlow from 'pages/RoughPages/ReactFlow';
import SavePages from 'pages/RoughPages/SavePages';
import Settings from 'pages/Settings';
import SettingsSubPage from 'pages/Settings/components/SettingsSubPage';
import PageNotFound from '~/pages/PermissionDenied/PageNotFound';
import { ROUTE_PATHS } from '~/utils/routes';

// ============================================================================
// LOADING COMPONENT
// ============================================================================
const LoadingFallback = (
  <div className="flex justify-center items-center h-screen">
    <Spin spinning size="large" />
  </div>
);

// ============================================================================
// MAIN ROUTE CONFIGURATION
// ============================================================================
const PermissionRoutes = () => {
  const { userData } = useSelector((state) => state.states);
  const { dailyAttendance } = useSelector((state) => state?.nonPersistedState);

  // Permission variables
  const permissions = usePermissionVariables();
  const {
    Employee_View,
    Employee_Add,
    Employee_List_View,
    Employee_List_Edit,
    Role_View,
    Role_Permission_View,
    Departments_View,
    Designation_View,
    Project_View,
    Work_Shift_View,
    Office_View,
    Leave_Sub_Type_View,
    User_View,
    User_Add,
    User_Edit,
    Company_View,
    Document_View,
    Approval_View,
    Leave_Type_View,
    Guest_View,
    Room_View,
    Accommodation_View,
    VehicleStatus_View,
    Vehicle_View,
    EmployeeCalender_View,
    Employee_Timesheet_View,
    Attendance_List_View,
    Leave_Quota_View,
    Attendance_Calendar_View,
    Settings_View,
    LoanForm_Add,
    AnnualForm_Add,
    WarningForm_Add,
    RejoiningForm_Add,
    LeaveForm_Add,
    TerminationForm_Add,
    ResignedForm_Add,
    WorkFormHome_Add,
    AttendanceForm_Add,
    LoanForm_View,
    AnnualForm_View,
    WarningForm_View,
    RejoiningForm_View,
    LeaveForm_View,
    TerminationForm_View,
    ResignedForm_View,
    WorkFormHome_View,
    AttendanceForm_View,
    WorkingHour_View,
    ContractType_View,
    ContractTemplate_View,
    PayStructureRuleCategory_View,
    PayStructureGroup_View,
    PayStructure_View,
    PayStructureRule_View,
    WorkEntryType_View,
    PayRule_View,
    Contract_View,
    PayInputType_View,
    PayStructure_Add,
    PayStructure_Edit,
    ContractTemplate_Add,
    ContractTemplate_Edit,
    Contract_Add,
    Contract_Edit,
    TaxCalculationSetup_View,
    TaxCalculationSetup_Edit,
    TaxCalculationSetup_Add,
    Pay_Batches_View,
    Pay_Slip_View,
    Pay_Slip_Add,
    Pay_Slip_Edit,
  } = permissions;

  // User role checks
  const isNotEmployee = userData?.roleType != '3';
  const isEmployee = userData?.roleType == 3;
  const isAdminOrUser = userData?.roleType == 3 || userData?.roleType == 2;
  const isCompanyUser = userData?.companyId != -1;

  // ============================================================================
  // AUTHENTICATION ROUTES
  // ============================================================================
  const authRoutes = [
    {
      path: ROUTE_PATHS.LOGIN,
      page: (
        <Suspense fallback={LoadingFallback}>
          <Login />
        </Suspense>
      ),
      isPrivate: false,
      permission: true,
    },
    {
      path: ROUTE_PATHS.FORGET_PASSWORD,
      page: <ForgetPassword />,
      isPrivate: false,
    },
    {
      path: ROUTE_PATHS.CHECK_EMAIL,
      page: <CheckEmail />,
      isPrivate: false,
    },
    {
      path: ROUTE_PATHS.SET_PASSWORD,
      page: <SetPassword />,
      isPrivate: false,
    },
    {
      path: ROUTE_PATHS.PASSWORD_RESET,
      page: <PasswordReset />,
      isPrivate: false,
    },
  ];

  // ============================================================================
  // CORE ROUTES
  // ============================================================================
  const coreRoutes = [
    {
      path: ROUTE_PATHS.DASHBOARD_INDEX,
      page: <DashboardSwitch />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.DASHBOARD,
      page: <DashboardSwitch />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.PERMISSION_DENIED,
      page: <PermissionDenied />,
      isPrivate: true,
    },
  ];

  // ============================================================================
  // EMPLOYEE MANAGEMENT ROUTES
  // ============================================================================
  const employeeRoutes = [
    {
      path: ROUTE_PATHS.EMPLOYEES,
      page:
        Employee_View && isNotEmployee ? (
          <Employees />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.ADD_EMPLOYEE,
      page:
        Employee_Add && isNotEmployee ? (
          <AddEmployee />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.EDIT_EMPLOYEE,
      page:
        Employee_List_Edit && isNotEmployee ? (
          <EditEmployee />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.EMPLOYEE_VIEW,
      page:
        Employee_List_View && isNotEmployee ? (
          <TabsViewEmployee />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.EMPLOYEE_PROFILE,
      page: isEmployee ? <EmployeeProfile /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.REPORTING_EMPLOYEES,
      page: isEmployee ? <ReportingEmployees /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.RESUME_BUILDER,
      page: <ResumeBuilder />,
      isPrivate: true,
    },
  ];

  // ============================================================================
  // ORGANIZATION ROUTES
  // ============================================================================
  const organizationRoutes = [
    {
      path: ROUTE_PATHS.COMPANY,
      page: Company_View ? <Company /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.DEPARTMENT,
      page: Departments_View ? <Department /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.DESIGNATION,
      page: Designation_View ? <Designation /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.PROJECT,
      page: Project_View ? <Project /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.OFFICE_LOCATION,
      page: Office_View ? <OfficeLocation /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.LEAVE_SUB_TYPE,
      page: Leave_Sub_Type_View ? (
        <LeaveSubType />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.WORK_SHIFT,
      page: Work_Shift_View ? <Worksheet /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.LEAVE_TYPE,
      page: Leave_Type_View ? <LeaveType /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.DOCUMENTS,
      page: Document_View ? <Documents /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
  ];

  // ============================================================================
  // USER & ROLE ROUTES
  // ============================================================================
  const userRoleRoutes = [
    {
      path: ROUTE_PATHS.USERS,
      page: User_View ? <Users /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.ADD_USERS,
      page: User_Add ? <AddUser /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.EDIT_USERS,
      page: User_Edit ? <EditUser /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.USERS_PROFILE,
      page: isNotEmployee ? (
        <UserProfileModal />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.ROLE,
      page: Role_View ? <Roles /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.TASK_PERMISSION,
      page: Role_Permission_View ? (
        <TaskPermission />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
    },
  ];

  // ============================================================================
  // LEAVE & ATTENDANCE ROUTES
  // ============================================================================
  const leaveAttendanceRoutes = [
    {
      path: ROUTE_PATHS.LEAVES,
      page: <Leaves />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.LEAVE_QUOTA_CALENDAR,
      page:
        Leave_Quota_View && isCompanyUser ? (
          <LeaveQuotaCalendar />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.LEAVE_QUOTA,
      page:
        Leave_Quota_View && isCompanyUser ? (
          <LeaveQuota />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.TIMESHEET,
      page:
        (Employee_Timesheet_View || Attendance_List_View) && dailyAttendance ? (
          <TimeSheet />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.VIEW_LOGS,
      page:
        Employee_Timesheet_View && dailyAttendance ? (
          <ViewLogs />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.CALENDAR,
      page:
        Attendance_Calendar_View && dailyAttendance ? (
          <Calendar />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.CALENDAR_VIEW,
      page:
        Attendance_Calendar_View && isCompanyUser && dailyAttendance ? (
          <CalendarView />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.CALENDAR_EMPLOYEE,
      page:
        EmployeeCalender_View && dailyAttendance ? (
          <EmployeeCalendar />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.CALENDAR_EMPLOYEE_VIEW_DETAILS,
      page:
        EmployeeCalender_View && dailyAttendance ? (
          <EmployeeCalendarCalendarView />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
  ];

  // ============================================================================
  // HR FORMS ROUTES
  // ============================================================================
  const hasHRFormAddPermissions =
    LoanForm_Add ||
    AnnualForm_Add ||
    WarningForm_Add ||
    RejoiningForm_Add ||
    LeaveForm_Add ||
    TerminationForm_Add ||
    ResignedForm_Add ||
    WorkFormHome_Add ||
    AttendanceForm_Add;

  const hrFormRoutes = [
    {
      path: ROUTE_PATHS.HR_FORMS,
      page:
        isAdminOrUser && hasHRFormAddPermissions ? (
          <HrForms />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.REQUESTS,
      page: <Requests />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.APPROVALS,
      page: Approval_View ? <Approvals /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
  ];

  // HR Form Add Routes (No Employee ID)
  const hrFormAddRoutes = [
    { path: ROUTE_PATHS.ADD_LEAVE_FORM, page: <LeaveForm /> },
    { path: ROUTE_PATHS.ADD_SICK_LEAVE, page: <SickLeaveForm /> },
    { path: ROUTE_PATHS.ADD_CASUAL_LEAVE, page: <CasualLeaveForm /> },
    { path: ROUTE_PATHS.ADD_WORK_FROM_HOME, page: <WorkFromHomeForm /> },
    { path: ROUTE_PATHS.ADD_ATTENDANCE, page: <AttendanceCorrectionForm /> },
    { path: ROUTE_PATHS.ADD_DISCIPLINARY, page: <DisciplinaryActionForm /> },
    { path: ROUTE_PATHS.ADD_REJOINING, page: <RejoiningForm /> },
    { path: ROUTE_PATHS.ADD_TERMINATION, page: <TerminationLetterForm /> },
    { path: ROUTE_PATHS.ADD_RESIGNATION, page: <ResignationForm /> },
    { path: ROUTE_PATHS.ADD_LOAN, page: <LoanForm /> },
    { path: ROUTE_PATHS.ADD_DATA, page: <DataForm /> },
  ].map((route) => ({ ...route, isPrivate: true }));

  // HR Form Add Routes (With Employee ID)
  const hrFormAddEmployeeIdRoutes = [
    { path: ROUTE_PATHS.ADD_LEAVE_FORM_EMPLOYEEID, page: <LeaveForm /> },
    { path: ROUTE_PATHS.ADD_SICK_LEAVE_EMPLOYEEID, page: <SickLeaveForm /> },
    {
      path: ROUTE_PATHS.ADD_CASUAL_LEAVE_EMPLOYEEID,
      page: <CasualLeaveForm />,
    },
    {
      path: ROUTE_PATHS.ADD_WORK_FROM_HOME_EMPLOYEEID,
      page: <WorkFromHomeForm />,
    },
    {
      path: ROUTE_PATHS.ADD_ATTENDANCE_EMPLOYEEID,
      page: <AttendanceCorrectionForm />,
    },
    {
      path: ROUTE_PATHS.ADD_DISCIPLINARY_EMPLOYEEID,
      page: <DisciplinaryActionForm />,
    },
    { path: ROUTE_PATHS.ADD_REJOINING_EMPLOYEEID, page: <RejoiningForm /> },
    {
      path: ROUTE_PATHS.ADD_TERMINATION_EMPLOYEEID,
      page: <TerminationLetterForm />,
    },
    { path: ROUTE_PATHS.ADD_RESIGNATION_EMPLOYEEID, page: <ResignationForm /> },
    { path: ROUTE_PATHS.ADD_LOAN_EMPLOYEEID, page: <LoanForm /> },
    { path: ROUTE_PATHS.ADD_DATA_EMPLOYEEID, page: <DataForm /> },
  ].map((route) => ({ ...route, isPrivate: true }));

  // HR Form Request Routes
  const hrFormRequestRoutes = [
    { path: ROUTE_PATHS.LEAVE_FORM_REQUESTS, page: <LeaveForm /> },
    { path: ROUTE_PATHS.SICK_LEAVE_REQUESTS, page: <SickLeaveForm /> },
    { path: ROUTE_PATHS.CASUAL_LEAVE_REQUESTS, page: <CasualLeaveForm /> },
    { path: ROUTE_PATHS.WORK_FROM_HOME_REQUESTS, page: <WorkFromHomeForm /> },
    {
      path: ROUTE_PATHS.ATTENDANCE_REQUESTS,
      page: <AttendanceCorrectionForm />,
    },
    {
      path: ROUTE_PATHS.DISCIPLINARY_REQUESTS,
      page: <DisciplinaryActionForm />,
    },
    { path: ROUTE_PATHS.REJOINING_REQUESTS, page: <RejoiningForm /> },
    { path: ROUTE_PATHS.TERMINATION_REQUESTS, page: <TerminationLetterForm /> },
    { path: ROUTE_PATHS.RESIGNATION_REQUESTS, page: <ResignationForm /> },
    { path: ROUTE_PATHS.LOAN_REQUESTS, page: <LoanForm /> },
  ].map((route) => ({ ...route, isPrivate: true }));

  // HR Form Approval Routes
  const hrFormApprovalRoutes = [
    { path: ROUTE_PATHS.LEAVE_FORM_APPROVALS, page: <LeaveForm /> },
    { path: ROUTE_PATHS.SICK_LEAVE_APPROVALS, page: <SickLeaveForm /> },
    { path: ROUTE_PATHS.CASUAL_LEAVE_APPROVALS, page: <CasualLeaveForm /> },
    { path: ROUTE_PATHS.WORK_FROM_HOME_APPROVALS, page: <WorkFromHomeForm /> },
    {
      path: ROUTE_PATHS.ATTENDANCE_APPROVALS,
      page: <AttendanceCorrectionForm />,
    },
    {
      path: ROUTE_PATHS.DISCIPLINARY_APPROVALS,
      page: <DisciplinaryActionForm />,
    },
    { path: ROUTE_PATHS.REJOINING_APPROVALS, page: <RejoiningForm /> },
    {
      path: ROUTE_PATHS.TERMINATION_APPROVALS,
      page: <TerminationLetterForm />,
    },
    { path: ROUTE_PATHS.RESIGNATION_APPROVALS, page: <ResignationForm /> },
    { path: ROUTE_PATHS.LOAN_APPROVALS, page: <LoanForm /> },
  ].map((route) => ({ ...route, isPrivate: true }));

  // HR Form View Routes
  const hrFormViewRoutes = [
    { path: ROUTE_PATHS.LEAVE_FORM_VIEW, page: <LeaveForm /> },
    { path: ROUTE_PATHS.SICK_LEAVE_VIEW, page: <SickLeaveForm /> },
    { path: ROUTE_PATHS.CASUAL_LEAVE_VIEW, page: <CasualLeaveForm /> },
    { path: ROUTE_PATHS.WORK_FROM_HOME_VIEW, page: <WorkFromHomeForm /> },
    { path: ROUTE_PATHS.ATTENDANCE_VIEW, page: <AttendanceCorrectionForm /> },
    { path: ROUTE_PATHS.DISCIPLINARY_VIEW, page: <DisciplinaryActionForm /> },
    { path: ROUTE_PATHS.REJOINING_VIEW, page: <RejoiningForm /> },
    { path: ROUTE_PATHS.TERMINATION_VIEW, page: <TerminationLetterForm /> },
    { path: ROUTE_PATHS.RESIGNATION_VIEW, page: <ResignationForm /> },
    { path: ROUTE_PATHS.LOAN_VIEW, page: <LoanForm /> },
  ].map((route) => ({ ...route, isPrivate: true }));

  // HR Form Settle Routes
  const hrFormSettleRoutes = [
    { path: ROUTE_PATHS.SETTLE_APPROVALS, page: <LeaveForm /> },
    { path: ROUTE_PATHS.SETTLE_RESIGNATION, page: <ResignationForm /> },
    { path: ROUTE_PATHS.SETTLE_TERMINATION, page: <TerminationLetterForm /> },
  ].map((route) => ({ ...route, isPrivate: true }));
  // HR Form Edit Routes
  const hrFormEditRoutes = [
    { path: ROUTE_PATHS.ANNUAL_FORM_EDIT, page: <LeaveForm /> },
    { path: ROUTE_PATHS.LOAN_FORM_EDIT, page: <LoanForm /> },
  ].map((route) => ({ ...route, isPrivate: true }));
  // ============================================================================
  // REPORTS & ANALYTICS ROUTES
  // ============================================================================
  const reportRoutes = [
    {
      path: ROUTE_PATHS.STATUS_ANALYSIS,
      page: isNotEmployee ? <StatusAnalysis /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.DATE_REPORTS,
      page: isNotEmployee ? <DateReports /> : <PermissionDeniedComponent />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.ANNUAL_REPORTS,
      page:
        isNotEmployee && AnnualForm_View ? (
          <AnnualReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.SICK_LEAVE_REPORTS,
      page:
        isNotEmployee && LeaveForm_View ? (
          <SickLeaveReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.CASUAL_LEAVE_REPORTS,
      page:
        isNotEmployee && LeaveForm_View ? (
          <CasualLeaveReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.WORK_FROM_HOME_REPORTS,
      page:
        isNotEmployee && WorkFormHome_View ? (
          <WFHReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.ATTENDANCE_CORRECTION_REPORTS,
      page:
        isNotEmployee && AttendanceForm_View ? (
          <AttendanceCorrectionReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.TERMINATION_REPORTS,
      page:
        isNotEmployee && TerminationForm_View ? (
          <TerminationReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.RESIGNATION_REPORTS,
      page:
        isNotEmployee && ResignedForm_View ? (
          <ResignationReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.REJOINING_REPORTS,
      page:
        isNotEmployee && RejoiningForm_View ? (
          <RejoiningReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.WARNING_REPORTS,
      page:
        isNotEmployee && WarningForm_View ? (
          <WarningReports />
        ) : (
          <PermissionDeniedComponent />
        ),
      isPrivate: true,
    },
  ];

  // ============================================================================
  // ACCOMMODATION ROUTES
  // ============================================================================
  const accommodationRoutes = [
    {
      path: ROUTE_PATHS.ACCOMMODATION_DASHBOARD,
      page: Accommodation_View ? (
        <AccommodationDashboard />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isAccommodation: true,
    },
    {
      path: ROUTE_PATHS.ACCOMMODATION,
      page: Accommodation_View ? (
        <Accommodation />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isAccommodation: true,
    },
    {
      path: ROUTE_PATHS.ROOMS,
      page: Room_View ? <Rooms /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isAccommodation: true,
    },
    {
      path: ROUTE_PATHS.GUESTS,
      page: Guest_View ? <Guests /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isAccommodation: true,
    },
  ];

  // ============================================================================
  // VEHICLE MANAGEMENT ROUTES
  // ============================================================================
  const vehicleRoutes = [
    {
      path: ROUTE_PATHS.VEHICLE_DASHBOARD,
      page: Vehicle_View ? <VehicleDashboard /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isVehicle: true,
    },
    {
      path: ROUTE_PATHS.VEHICLE,
      page: Vehicle_View ? <Vehicles /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isVehicle: true,
    },
    {
      path: ROUTE_PATHS.VEHICLE_DETAIL,
      page: Vehicle_View ? <VehicleDetails /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isVehicle: true,
    },
    {
      path: ROUTE_PATHS.VEHICLE_STATUS,
      page: VehicleStatus_View ? (
        <VehiclesStatus />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isVehicle: true,
    },
  ];

  // ============================================================================
  // PAYROLL ROUTES
  // ============================================================================
  const payrollRoutes = [
    {
      path: ROUTE_PATHS.PAYROLL_DASHBOARD,
      page: <PayrollDashboard />,
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_FORM,
      page: <PayrollForm />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_WORKING_HOURS,
      page: WorkingHour_View ? <WorkingHours /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_WORKING_HOURS_VIEW,
      page: WorkingHour_View ? (
        <WorkingHoursView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACT_TYPES,
      page: ContractType_View ? (
        <ContractType />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACT_TYPES_VIEW,
      page: ContractType_View ? (
        <ContractTypeView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_INPUT_TYPES,
      page: PayInputType_View ? (
        <PayInputTypes />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_INPUT_TYPES_VIEW,
      page: PayInputType_View ? (
        <PayInputTypesView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACT_TEMPLATES,
      page: ContractTemplate_View ? (
        <ContractTemplates />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACT_TEMPLATES_ADD,
      page: ContractTemplate_Add ? (
        <ContractTemplateCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACT_TEMPLATES_EDIT,
      page: ContractTemplate_Edit ? (
        <ContractTemplateCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACT_TEMPLATES_VIEW,
      page: ContractTemplate_View ? (
        <ContractTemplateView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACTS,
      page: Contract_View ? (
        <PayrollContracts />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACTS_ADD,
      page: Contract_Add ? (
        <PayrollContractsCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACTS_EDIT,
      page: Contract_Edit ? (
        <PayrollContractsCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_CONTRACTS_DETAILS,
      page: Contract_View ? (
        <PayrollContractsDetails />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURE_RULE_CATEGORY,
      page: PayStructureRuleCategory_View ? (
        <PayStructureRuleCategory />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURE_RULE_CATEGORY_VIEW,
      page: PayStructureRuleCategory_View ? (
        <PayStructureRuleCategoryView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURE_GROUPS,
      page: PayStructureGroup_View ? (
        <PayStructureGroups />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURE_GROUPS_VIEW,
      page: PayStructureGroup_View ? (
        <PayStructureGroupsView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURES,
      page: PayStructure_View ? (
        <PayStructures />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURES_VIEW,
      page: PayStructure_View ? (
        <PayStructuresView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURES_ADD,
      page: PayStructure_Add ? (
        <PayStructuresCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_STRUCTURES_EDIT,
      page: PayStructure_Edit ? (
        <PayStructuresCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_WORK_ENTRY_TYPES,
      page: WorkEntryType_View ? (
        <WorkEntryTypes />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_WORK_ENTRY_TYPES_VIEW,
      page: WorkEntryType_View ? (
        <WorkEntryTypesView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_RULE,
      page: PayRule_View ? <PayRules /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_RULE_VIEW,
      page: PayRule_View ? <PayRulesView /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_TAX_CALCULATION_SETUP,
      page: TaxCalculationSetup_View ? (
        <TaxCalculationSetup />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_TAX_CALCULATION_SETUP_VIEW,
      page: TaxCalculationSetup_View ? (
        <TaxCalculationSetupView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_TAX_CALCULATION_SETUP_ADD,
      page: TaxCalculationSetup_Add ? (
        <TaxCalculationSetupCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_TAX_CALCULATION_SETUP_EDIT,
      page: TaxCalculationSetup_Edit ? (
        <TaxCalculationSetupCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_BATCHES,
      page: Pay_Batches_View ? <PayBatches /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_BATCHES_VIEW,
      page: Pay_Batches_View ? (
        <PayBatchesView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_SLIPS,
      page: Pay_Slip_View ? (
        <PaySlips />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_SLIPS_VIEW,
      page: Pay_Slip_View ? (
        <PaySlipsView />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_SLIPS_ADD,
      page: Pay_Slip_Add ? (
        <PaySlipsCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
    {
      path: ROUTE_PATHS.PAYROLL_PAY_SLIPS_EDIT,
      page: Pay_Slip_Edit ? (
        <PaySlipsCrud />
      ) : (
        <PermissionDeniedComponent />
      ),
      isPrivate: true,
      isPayrollRoute: true,
    },
  ];

  // ============================================================================
  // SETTINGS & OTHER ROUTES
  // ============================================================================
  const settingsRoutes = [
    {
      path: ROUTE_PATHS.SETTINGS,
      page:
        isCompanyUser && Settings_View ? (
          <Settings />
        ) : (
          <PermissionDeniedComponentSettings />
        ),
      isPrivate: true,
      isOutFromLayout: true,
    },
    {
      path: ROUTE_PATHS.SETTINGS_CATEGORY,
      page:
        isCompanyUser && Settings_View ? (
          <SettingsSubPage />
        ) : (
          <PermissionDeniedComponentSettings />
        ),
      isPrivate: true,
      isOutFromLayout: true,
    },
  ];

  const otherRoutes = [
    {
      path: ROUTE_PATHS.REACT_FLOW,
      page: <ReactFlow />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.HR_DASHBOARD,
      page: <HrDashboard />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.SAVE_PAGES,
      page: <SavePages />,
      isPrivate: true,
    },
  ];

  const notFoundRoute = {
    path: ROUTE_PATHS.NOT_FOUND,
    page: <PageNotFound />,
    isPrivate: true,
    isOutFromLayout: true,
  };

  // ============================================================================
  // COMBINE ALL ROUTES
  // ============================================================================
  const AllRoutes = [
    ...authRoutes,
    ...coreRoutes,
    ...employeeRoutes,
    ...organizationRoutes,
    ...userRoleRoutes,
    ...leaveAttendanceRoutes,
    ...hrFormRoutes,
    ...hrFormAddRoutes,
    ...hrFormAddEmployeeIdRoutes,
    ...hrFormRequestRoutes,
    ...hrFormApprovalRoutes,
    ...hrFormViewRoutes,
    ...hrFormSettleRoutes,
    ...hrFormEditRoutes,
    ...reportRoutes,
    ...accommodationRoutes,
    ...vehicleRoutes,
    ...payrollRoutes,
    ...settingsRoutes,
    ...otherRoutes,
    notFoundRoute,
  ];

  return AllRoutes;
};

export default PermissionRoutes;
