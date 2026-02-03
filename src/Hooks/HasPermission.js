import usePermission from './UsePermissionHook';

export function usePermissionVariables() {
  const Employee_View = usePermission('Employee.View');
  const Employee_Search = usePermission('Employee.Search');
  const Employee_Add = usePermission('Employee.Add');
  const Employee_Edit = usePermission('Employee.Edit');
  const Employee_Delete = usePermission('Employee.Delete');
  const Employee_Print = usePermission('Employee.Print');

  const Employee_List_View = usePermission('Employee.View');
  const Employee_List_Search = usePermission('Employee.Search');
  const Employee_List_Add = usePermission('Employee.Add');
  const Employee_List_Edit = usePermission('Employee.Edit');
  const Employee_List_Delete = usePermission('Employee.Delete');
  const Employee_List_Print = usePermission('Employee.Print');

  const Employee_Timesheet_View = usePermission('Employee Timesheet.View');
  const Employee_Timesheet_Search = usePermission('Employee Timesheet.Search');
  const Employee_Timesheet_Add = usePermission('Employee Timesheet.Add');
  const Employee_Timesheet_Edit = usePermission('Employee Timesheet.Edit');
  const Employee_Timesheet_Delete = usePermission('Employee Timesheet.Delete');
  const Employee_Timesheet_Print = usePermission('Employee Timesheet.Print');

  const Employee_Leave_View = usePermission('Employee Leave.View');
  const Employee_Leave_Search = usePermission('Employee Leave.Search');
  const Employee_Leave_Add = usePermission('Employee Leave.Add');
  const Employee_Leave_Edit = usePermission('Employee Leave.Edit');
  const Employee_Leave_Delete = usePermission('Employee Leave.Delete');
  const Employee_Leave_Print = usePermission('Employee Leave.Print');

  const Role_View = usePermission('Role.View');
  const Role_Search = usePermission('Role.Search');
  const Role_Add = usePermission('Role.Add');
  const Role_Edit = usePermission('Role.Edit');
  const Role_Delete = usePermission('Role.Delete');
  const Role_Print = usePermission('Role.Print');

  const Role_Permission_View = usePermission('Role Permission.View');
  const Role_Permission_Search = usePermission('Role Permission.Search');
  const Role_Permission_Add = usePermission('Role Permission.Add');
  const Role_Permission_Edit = usePermission('Role Permission.Edit');
  const Role_Permission_Delete = usePermission('Role Permission.Delete');
  const Role_Permission_Print = usePermission('Role Permission.Print');

  const Organization_View = usePermission('Organization.View');
  const Organization_Search = usePermission('Organization.Search');
  const Organization_Add = usePermission('Organization.Add');
  const Organization_Edit = usePermission('Organization.Edit');
  const Organization_Delete = usePermission('Organization.Delete');
  const Organization_Print = usePermission('Organization.Print');

  const Departments_View = usePermission('Departments.View');
  const Departments_Search = usePermission('Departments.Search');
  const Departments_Add = usePermission('Departments.Add');
  const Departments_Edit = usePermission('Departments.Edit');
  const Departments_Delete = usePermission('Departments.Delete');
  const Departments_Print = usePermission('Departments.Print');

  const Designation_View = usePermission('Designation.View');
  const Designation_Search = usePermission('Designation.Search');
  const Designation_Add = usePermission('Designation.Add');
  const Designation_Edit = usePermission('Designation.Edit');
  const Designation_Delete = usePermission('Designation.Delete');
  const Designation_Print = usePermission('Designation.Print');

  const Project_View = usePermission('Project.View');
  const Project_Search = usePermission('Project.Search');
  const Project_Add = usePermission('Project.Add');
  const Project_Edit = usePermission('Project.Edit');
  const Project_Delete = usePermission('Project.Delete');
  const Project_Print = usePermission('Project.Print');

  const Work_Shift_View = usePermission('Work Shift.View');
  const Work_Shift_Search = usePermission('Work Shift.Search');
  const Work_Shift_Add = usePermission('Work Shift.Add');
  const Work_Shift_Edit = usePermission('Work Shift.Edit');
  const Work_Shift_Delete = usePermission('Work Shift.Delete');
  const Work_Shift_Print = usePermission('Work Shift.Print');

  const Office_View = usePermission('Office.View');
  const Office_Search = usePermission('Office.Search');
  const Office_Add = usePermission('Office.Add');
  const Office_Edit = usePermission('Office.Edit');
  const Office_Delete = usePermission('Office.Delete');
  const Office_Print = usePermission('Office.Print');

  const Leave_Quota_View = usePermission('LeaveQuota.View');
  const Leave_Quota_Search = usePermission('LeaveQuota.Search');
  const Leave_Quota_Add = usePermission('LeaveQuota.Add');
  const Leave_Quota_Edit = usePermission('LeaveQuota.Edit');
  const Leave_Quota_Delete = usePermission('LeaveQuota.Delete');
  const Leave_Quota_Print = usePermission('LeaveQuota.Print');

  const Attendance_View = usePermission('Attendance.View');
  const Attendance_Search = usePermission('Attendance.Search');
  const Attendance_Add = usePermission('Attendance.Add');
  const Attendance_Edit = usePermission('Attendance.Edit');
  const Attendance_Delete = usePermission('Attendance.Delete');
  const Attendance_Print = usePermission('Attendance.Print');

  const Attendance_List_View = usePermission('Attendance.View');
  const Attendance_List_Search = usePermission('Attendance.Search');
  const Attendance_List_Add = usePermission('Attendance.Add');
  const Attendance_List_Edit = usePermission('Attendance.Edit');
  const Attendance_List_Delete = usePermission('Attendance.Delete');
  const Attendance_List_Print = usePermission('Attendance.Print');

  const Attendance_Calendar_View = usePermission('AttendanceCalendar.View');
  const Attendance_Calendar_Search = usePermission('AttendanceCalendar.Search');
  const Attendance_Calendar_Add = usePermission('AttendanceCalendar.Add');
  const Attendance_Calendar_Edit = usePermission('AttendanceCalendar.Edit');
  const Attendance_Calendar_Delete = usePermission('AttendanceCalendar.Delete');
  const Attendance_Calendar_Print = usePermission('AttendanceCalendar.Print');

  const Settings_View = usePermission('Settings.View');
  const Settings_Edit = usePermission('Settings.Edit');

  const EmployeeCalender_View = usePermission('EmployeeCalendar.View');
  const EmployeeCalender_Search = usePermission('EmployeeCalendar.Search');
  const EmployeeCalender_Add = usePermission('EmployeeCalendar.Add');
  const EmployeeCalender_Edit = usePermission('EmployeeCalendar.Edit');
  const EmployeeCalender_Delete = usePermission('EmployeeCalendar.Delete');
  const EmployeeCalender_Print = usePermission('EmployeeCalendar.Print');

  const Security_View = usePermission('Security.View');
  const Security_Search = usePermission('Security.Search');
  const Security_Add = usePermission('Security.Add');
  const Security_Edit = usePermission('Security.Edit');
  const Security_Delete = usePermission('Security.Delete');
  const Security_Print = usePermission('Security.Print');

  const User_View = usePermission('User.View');
  const User_Search = usePermission('User.Search');
  const User_Add = usePermission('User.Add');
  const User_Edit = usePermission('User.Edit');
  const User_Delete = usePermission('User.Delete');
  const User_Print = usePermission('User.Print');

  const Company_View = usePermission('Company.View');
  const Company_Search = usePermission('Company.Search');
  const Company_Add = usePermission('Company.Add');
  const Company_Edit = usePermission('Company.Edit');
  const Company_Delete = usePermission('Company.Delete');
  const Company_Print = usePermission('Company.Print');

  const Document_View = usePermission('DocumentType.View');
  const Document_Search = usePermission('DocumentType.Search');
  const Document_Add = usePermission('DocumentType.Add');
  const Document_Edit = usePermission('DocumentType.Edit');
  const Document_Delete = usePermission('DocumentType.Delete');

  const Approval_Search = true; // usePermission('Approval.Search');
  const Approval_Add = true; // usePermission('Approval.Add');
  const Approval_View = true; // usePermission('Approval.View');
  const Approval_Edit = true; // usePermission('Approval.Edit');
  const Approval_Delete = true; // usePermission('Approval.Delete');

  const Leave_Type_Search = usePermission('LeaveType.Search');
  const Leave_Type_Add = usePermission('LeaveType.Add');
  const Leave_Type_View = usePermission('LeaveType.View');
  const Leave_Type_Edit = usePermission('LeaveType.Edit');
  const Leave_Type_Delete = usePermission('LeaveType.Delete');

  const Leave_Sub_Type_Search = usePermission('LeaveSubType.Search');
  const Leave_Sub_Type_Add = usePermission('LeaveSubType.Add');
  const Leave_Sub_Type_View = usePermission('LeaveSubType.View');
  const Leave_Sub_Type_Edit = usePermission('LeaveSubType.Edit');
  const Leave_Sub_Type_Delete = usePermission('LeaveSubType.Delete');

  const LoanForm_View = usePermission('LoanForm.View');
  const LoanForm_Add = usePermission('LoanForm.Add');
  const LoanForm_Edit = usePermission('LoanForm.Edit');
  const LoanForm_Delete = usePermission('LoanForm.Delete');
  const LoanForm_Print = usePermission('LoanForm.Print');
  const LoanForm_Authorize = usePermission('LoanForm.Authorize');

  const AnnualForm_View = usePermission('AnnualForm.View');
  const AnnualForm_Add = usePermission('AnnualForm.Add');
  const AnnualForm_Edit = usePermission('AnnualForm.Edit');
  const AnnualForm_Delete = usePermission('AnnualForm.Delete');
  const AnnualForm_Print = usePermission('AnnualForm.Print');
  const AnnualForm_Authorize = usePermission('AnnualForm.Authorize');

  const WarningForm_View = usePermission('WarningForm.View');
  const WarningForm_Add = usePermission('WarningForm.Add');
  const WarningForm_Edit = usePermission('WarningForm.Edit');
  const WarningForm_Delete = usePermission('WarningForm.Delete');
  const WarningForm_Print = usePermission('WarningForm.Print');
  const WarningForm_Authorize = usePermission('WarningForm.Authorize');

  const RejoiningForm_View = usePermission('RejoiningForm.View');
  const RejoiningForm_Add = usePermission('RejoiningForm.Add');
  const RejoiningForm_Edit = usePermission('RejoiningForm.Edit');
  const RejoiningForm_Delete = usePermission('RejoiningForm.Delete');
  const RejoiningForm_Print = usePermission('RejoiningForm.Print');
  const RejoiningForm_Authorize = usePermission('RejoiningForm.Authorize');

  const LeaveForm_View = usePermission('LeaveForm.View');
  const LeaveForm_Add = usePermission('LeaveForm.Add');
  const LeaveForm_Edit = usePermission('LeaveForm.Edit');
  const LeaveForm_Delete = usePermission('LeaveForm.Delete');
  const LeaveForm_Print = usePermission('LeaveForm.Print');
  const LeaveForm_Authorize = usePermission('LeaveForm.Authorize');

  const TerminationForm_View = usePermission('TerminationForm.View');
  const TerminationForm_Add = usePermission('TerminationForm.Add');
  const TerminationForm_Edit = usePermission('TerminationForm.Edit');
  const TerminationForm_Delete = usePermission('TerminationForm.Delete');
  const TerminationForm_Print = usePermission('TerminationForm.Print');
  const TerminationForm_Authorize = usePermission('TerminationForm.Authorize');

  const ResignedForm_View = usePermission('ResignedForm.View');
  const ResignedForm_Add = usePermission('ResignedForm.Add');
  const ResignedForm_Edit = usePermission('ResignedForm.Edit');
  const ResignedForm_Delete = usePermission('ResignedForm.Delete');
  const ResignedForm_Print = usePermission('ResignedForm.Print');
  const ResignedForm_Authorize = usePermission('ResignedForm.Authorize');

  // const Payroll_View = usePermission('Payroll.View');
  // const Payroll_Add = usePermission('Payroll.Add');
  // const Payroll_Edit = usePermission('Payroll.Edit');
  // const Payroll_Delete = usePermission('Payroll.Delete');
  // const Payroll_Print = usePermission('Payroll.Print');
  // const Payroll_Search = usePermission('Payroll.Search');
  const Payroll_View = true;
  const Payroll_Add = true;
  const Payroll_Edit = true;
  const Payroll_Delete = true;
  const Payroll_Print = true;
  const Payroll_Search = true;
  const WorkFormHome_View = usePermission('WorkFromHome.View');
  const WorkFormHome_Add = usePermission('WorkFromHome.Add');
  const WorkFormHome_Edit = usePermission('WorkFromHome.Edit');
  const WorkFormHome_Delete = usePermission('WorkFromHome.Delete');
  const WorkFormHome_Print = usePermission('WorkFromHome.Print');
  const WorkFormHome_Authorize = usePermission('WorkFromHome.Authorize');

  const AttendanceForm_View = usePermission('AttendanceCorrectionForm.View');
  const AttendanceForm_Add = usePermission('AttendanceCorrectionForm.Add');
  const AttendanceForm_Edit = usePermission('AttendanceCorrectionForm.Edit');
  const AttendanceForm_Delete = usePermission(
    'AttendanceCorrectionForm.Delete',
  );
  const AttendanceForm_Print = usePermission('AttendanceCorrectionForm.Print');
  const AttendanceForm_Authorize = usePermission(
    'AttendanceCorrectionForm.Authorize',
  );

  const Accommodation_View = usePermission('Accommodation.View');
  const Accommodation_Add = usePermission('Accommodation.Add');
  const Accommodation_Search = usePermission('Accommodation.Search');
  const Accommodation_Edit = usePermission('Accommodation.Edit');
  const Accommodation_Delete = usePermission('Accommodation.Delete');
  const Accommodation_Print = usePermission('Accommodation.Print');

  const Room_View = usePermission('Rooms.View');
  const Room_Add = usePermission('Rooms.Add');
  const Room_Edit = usePermission('Rooms.Edit');
  const Room_Search = usePermission('Rooms.Search');
  const Room_Delete = usePermission('Rooms.Delete');
  const Room_Print = usePermission('Rooms.Print');

  const Guest_View = usePermission('Guest.View');
  const Guest_Add = usePermission('Guest.Add');
  const Guest_Edit = usePermission('Guest.Edit');
  const Guest_Search = usePermission('Guest.Search');
  const Guest_Delete = usePermission('Guest.Delete');
  const Guest_Print = usePermission('Guest.Print');

  const Vehicle_View = usePermission('Vehicle.View');
  const Vehicle_Add = usePermission('Vehicle.Add');
  const Vehicle_Edit = usePermission('Vehicle.Edit');
  const Vehicle_Search = usePermission('Vehicle.Search');
  const Vehicle_Delete = usePermission('Vehicle.Delete');
  const Vehicle_Print = usePermission('Vehicle.Print');

  const VehicleStatus_View = usePermission('VehicleStatus.View');
  const VehicleStatus_Add = usePermission('VehicleStatus.Add');
  const VehicleStatus_Edit = usePermission('VehicleStatus.Edit');
  const VehicleStatus_Search = usePermission('VehicleStatus.Search');
  const VehicleStatus_Delete = usePermission('VehicleStatus.Delete');
  const VehicleStatus_Print = usePermission('VehicleStatus.Print');
  // Payroll
  const ContractType_View = usePermission('ContractType.View');
  const ContractType_Add = usePermission('ContractType.Add');
  const ContractType_Edit = usePermission('ContractType.Edit');
  const ContractType_Search = usePermission('ContractType.Search');
  const ContractType_Delete = usePermission('ContractType.Delete');
  const ContractType_Print = usePermission('ContractType.Print');
  const ContractType_Authorize = usePermission('ContractType.Authorize');

  const PayInputType_View = usePermission('PayInputType.View');
  const PayInputType_Add = usePermission('PayInputType.Add');
  const PayInputType_Edit = usePermission('PayInputType.Edit');
  const PayInputType_Search = usePermission('PayInputType.Search');
  const PayInputType_Delete = usePermission('PayInputType.Delete');
  const PayInputType_Print = usePermission('PayInputType.Print');
  const PayInputType_Authorize = usePermission('PayInputType.Authorize');

  const TaxCalculationSetup_View = usePermission('TaxCalculationSetup.View');
  const TaxCalculationSetup_Add = usePermission('TaxCalculationSetup.Add');
  const TaxCalculationSetup_Edit = usePermission('TaxCalculationSetup.Edit');
  const TaxCalculationSetup_Search = usePermission(
    'TaxCalculationSetup.Search',
  );
  const TaxCalculationSetup_Delete = usePermission(
    'TaxCalculationSetup.Delete',
  );
  const TaxCalculationSetup_Print = usePermission('TaxCalculationSetup.Print');
  const TaxCalculationSetup_Authorize = usePermission(
    'TaxCalculationSetup.Authorize',
  );

  const WorkingHour_View = usePermission('WorkingHour.View');
  const WorkingHour_Add = usePermission('WorkingHour.Add');
  const WorkingHour_Search = usePermission('WorkingHour.Search');
  const WorkingHour_Edit = usePermission('WorkingHour.Edit');
  const WorkingHour_Delete = usePermission('WorkingHour.Delete');
  const WorkingHour_Print = usePermission('WorkingHour.Print');
  const WorkingHour_Authorize = usePermission('WorkingHour.Authorize');

  const PayStructureRuleCategory_View = usePermission(
    'PayStructureRuleCategory.View',
  );
  const PayStructureRuleCategory_Add = usePermission(
    'PayStructureRuleCategory.Add',
  );
  const PayStructureRuleCategory_Search = usePermission(
    'PayStructureRuleCategory.Search',
  );
  const PayStructureRuleCategory_Edit = usePermission(
    'PayStructureRuleCategory.Edit',
  );
  const PayStructureRuleCategory_Delete = usePermission(
    'PayStructureRuleCategory.Delete',
  );
  const PayStructureRuleCategory_Print = usePermission(
    'PayStructureRuleCategory.Print',
  );
  const PayStructureRuleCategory_Authorize = usePermission(
    'PayStructureRuleCategory.Authorize',
  );

  const PayStructureGroup_View = usePermission('PayStructureGroup.View');
  const PayStructureGroup_Add = usePermission('PayStructureGroup.Add');
  const PayStructureGroup_Search = usePermission('PayStructureGroup.Search');
  const PayStructureGroup_Edit = usePermission('PayStructureGroup.Edit');
  const PayStructureGroup_Delete = usePermission('PayStructureGroup.Delete');
  const PayStructureGroup_Print = usePermission('PayStructureGroup.Print');
  const PayStructureGroup_Authorize = usePermission(
    'PayStructureGroup.Authorize',
  );

  const PayStructure_View = usePermission('PayStructure.View');
  const PayStructure_Add = usePermission('PayStructure.Add');
  const PayStructure_Edit = usePermission('PayStructure.Edit');
  const PayStructure_Search = usePermission('PayStructure.Search');
  const PayStructure_Delete = usePermission('PayStructure.Delete');
  const PayStructure_Print = usePermission('PayStructure.Print');
  const PayStructure_Authorize = usePermission('PayStructure.Authorize');

  const PayStructureRule_View = usePermission('PayStructureRule.View');
  const PayStructureRule_Add = usePermission('PayStructureRule.Add');
  const PayStructureRule_Edit = usePermission('PayStructureRule.Edit');
  const PayStructureRule_Search = usePermission('PayStructureRule.Search');
  const PayStructureRule_Delete = usePermission('PayStructureRule.Delete');
  const PayStructureRule_Print = usePermission('PayStructureRule.Print');
  const PayStructureRule_Authorize = usePermission(
    'PayStructureRule.Authorize',
  );

  const ContractTemplate_View = usePermission('ContractTemplate.View');
  const ContractTemplate_Add = usePermission('ContractTemplate.Add');
  const ContractTemplate_Edit = usePermission('ContractTemplate.Edit');
  const ContractTemplate_Search = usePermission('ContractTemplate.Search');
  const ContractTemplate_Delete = usePermission('ContractTemplate.Delete');
  const ContractTemplate_Print = usePermission('ContractTemplate.Print');
  const ContractTemplate_Authorize = usePermission(
    'ContractTemplate.Authorize',
  );

  const WorkEntryType_View = usePermission('WorkEntryType.View');
  const WorkEntryType_Add = usePermission('WorkEntryType.Add');
  const WorkEntryType_Edit = usePermission('WorkEntryType.Edit');
  const WorkEntryType_Search = usePermission('WorkEntryType.Search');
  const WorkEntryType_Delete = usePermission('WorkEntryType.Delete');
  const WorkEntryType_Print = usePermission('WorkEntryType.Print');
  const WorkEntryType_Authorize = usePermission('WorkEntryType.Authorize');

  const PayRule_View = usePermission('PayRule.View');
  const PayRule_Add = usePermission('PayRule.Add');
  const PayRule_Edit = usePermission('PayRule.Edit');
  const PayRule_Search = usePermission('PayRule.Search');
  const PayRule_Delete = usePermission('PayRule.Delete');
  const PayRule_Print = usePermission('PayRule.Print');
  const PayRule_Authorize = usePermission('PayRule.Authorize');

  const Pay_Batches_View = usePermission('PayBatch.View');
  const Pay_Batches_Add = usePermission('PayBatch.Add');
  const Pay_Batches_Edit = usePermission('PayBatch.Edit');
  const Pay_Batches_Search = usePermission('PayBatch.Search');
  const Pay_Batches_Delete = usePermission('PayBatch.Delete');
  const Pay_Batches_Print = usePermission('PayBatch.Print');
  const Pay_Batches_Authorize = usePermission('PayBatch.Authorize');

  const Pay_Slip_View = true
  const Pay_Slip_Add = true
  const Pay_Slip_Edit = true
  const Pay_Slip_Search = true
  const Pay_Slip_Delete = true
  const Pay_Slip_Print = true
  const Pay_Slip_Authorize = true

  const Contract_View = usePermission('Contract.View');
  const Contract_Add = usePermission('Contract.Add');
  const Contract_Edit = usePermission('Contract.Edit');
  const Contract_Search = usePermission('Contract.Search');
  const Contract_Delete = usePermission('Contract.Delete');
  const Contract_Print = usePermission('Contract.Print');
  const Contract_Authorize = usePermission('Contract.Authorize');

  return {
    Settings_View,
    Settings_Edit,
    VehicleStatus_View,
    VehicleStatus_Add,
    VehicleStatus_Edit,
    VehicleStatus_Search,
    VehicleStatus_Delete,
    VehicleStatus_Print,
    Vehicle_View,
    Vehicle_Add,
    Vehicle_Edit,
    Vehicle_Search,
    Vehicle_Delete,
    Vehicle_Print,
    Accommodation_View,
    Accommodation_Add,
    Accommodation_Edit,
    Accommodation_Search,
    Accommodation_Delete,
    Accommodation_Print,
    Room_View,
    Room_Add,
    Room_Edit,
    Room_Search,
    Room_Delete,
    Room_Print,
    Guest_View,
    Guest_Add,
    Guest_Edit,
    Guest_Search,
    Guest_Delete,
    Guest_Print,
    Employee_View,
    Employee_Search,
    Employee_Add,
    Employee_Edit,
    Employee_Delete,
    Employee_Print,
    Employee_List_View,
    Employee_List_Search,
    Employee_List_Add,
    Employee_List_Edit,
    Employee_List_Delete,
    Employee_List_Print,
    Employee_Timesheet_View,
    Employee_Timesheet_Search,
    Employee_Timesheet_Add,
    Employee_Timesheet_Edit,
    Employee_Timesheet_Delete,
    Employee_Timesheet_Print,
    EmployeeCalender_View,
    EmployeeCalender_Search,
    EmployeeCalender_Add,
    EmployeeCalender_Edit,
    EmployeeCalender_Delete,
    EmployeeCalender_Print,
    Employee_Leave_View,
    Employee_Leave_Search,
    Employee_Leave_Add,
    Employee_Leave_Edit,
    Employee_Leave_Delete,
    Employee_Leave_Print,
    Role_View,
    Role_Search,
    Role_Add,
    Role_Edit,
    Role_Delete,
    Role_Print,
    Role_Permission_View,
    Role_Permission_Search,
    Role_Permission_Add,
    Role_Permission_Edit,
    Role_Permission_Delete,
    Role_Permission_Print,
    Organization_View,
    Organization_Search,
    Organization_Add,
    Organization_Edit,
    Organization_Delete,
    Organization_Print,
    Departments_View,
    Departments_Search,
    Departments_Add,
    Departments_Edit,
    Departments_Delete,
    Departments_Print,
    Designation_View,
    Designation_Search,
    Designation_Add,
    Designation_Edit,
    Designation_Delete,
    Designation_Print,
    Project_View,
    Project_Search,
    Project_Add,
    Project_Edit,
    Project_Delete,
    Project_Print,
    Work_Shift_View,
    Work_Shift_Search,
    Work_Shift_Add,
    Work_Shift_Edit,
    Work_Shift_Delete,
    Work_Shift_Print,
    Office_View,
    Office_Search,
    Office_Add,
    Office_Edit,
    Office_Delete,
    Office_Print,
    Leave_Quota_View,
    Leave_Quota_Search,
    Leave_Quota_Add,
    Leave_Quota_Edit,
    Leave_Quota_Delete,
    Leave_Quota_Print,
    Attendance_View,
    Attendance_Search,
    Attendance_Add,
    Attendance_Edit,
    Attendance_Delete,
    Attendance_Print,
    Attendance_List_View,
    Attendance_List_Search,
    Attendance_List_Add,
    Attendance_List_Edit,
    Attendance_List_Delete,
    Attendance_List_Print,
    Attendance_Calendar_View,
    Attendance_Calendar_Search,
    Attendance_Calendar_Add,
    Attendance_Calendar_Edit,
    Attendance_Calendar_Delete,
    Attendance_Calendar_Print,
    Security_View,
    Security_Search,
    Security_Add,
    Security_Edit,
    Security_Delete,
    Security_Print,
    User_View,
    User_Search,
    User_Add,
    User_Edit,
    User_Delete,
    User_Print,
    Company_View,
    Company_Search,
    Company_Add,
    Company_Edit,
    Company_Delete,
    Company_Print,
    Document_View,
    Document_Search,
    Document_Add,
    Document_Edit,
    Document_Delete,
    Approval_Search,
    Approval_Add,
    Approval_View,
    Approval_Edit,
    Approval_Delete,
    Leave_Type_Search,
    Leave_Type_Add,
    Leave_Type_View,
    Leave_Type_Edit,
    Leave_Type_Delete,
    Leave_Sub_Type_Search,
    Leave_Sub_Type_Add,
    Leave_Sub_Type_View,
    Leave_Sub_Type_Edit,
    Leave_Sub_Type_Delete,
    LoanForm_View,
    LoanForm_Add,
    LoanForm_Edit,
    LoanForm_Delete,
    LoanForm_Print,
    LoanForm_Authorize,
    AnnualForm_View,
    AnnualForm_Add,
    AnnualForm_Edit,
    AnnualForm_Delete,
    AnnualForm_Print,
    AnnualForm_Authorize,
    WarningForm_View,
    WarningForm_Add,
    WarningForm_Edit,
    WarningForm_Delete,
    WarningForm_Print,
    WarningForm_Authorize,
    RejoiningForm_View,
    RejoiningForm_Add,
    RejoiningForm_Edit,
    RejoiningForm_Delete,
    RejoiningForm_Print,
    RejoiningForm_Authorize,
    LeaveForm_View,
    LeaveForm_Add,
    LeaveForm_Edit,
    LeaveForm_Delete,
    LeaveForm_Print,
    LeaveForm_Authorize,
    TerminationForm_View,
    TerminationForm_Add,
    TerminationForm_Edit,
    TerminationForm_Delete,
    TerminationForm_Print,
    TerminationForm_Authorize,
    ResignedForm_View,
    ResignedForm_Add,
    ResignedForm_Edit,
    ResignedForm_Delete,
    ResignedForm_Print,
    ResignedForm_Authorize,
    Payroll_View,
    Payroll_Add,
    Payroll_Edit,
    Payroll_Delete,
    Payroll_Print,
    Payroll_Search,
    WorkFormHome_View,
    WorkFormHome_Add,
    WorkFormHome_Edit,
    WorkFormHome_Delete,
    WorkFormHome_Print,
    WorkFormHome_Authorize,
    AttendanceForm_View,
    AttendanceForm_Add,
    AttendanceForm_Edit,
    AttendanceForm_Delete,
    AttendanceForm_Print,
    AttendanceForm_Authorize,
    PayStructureRuleCategory_View,
    PayStructureRuleCategory_Add,
    PayStructureRuleCategory_Edit,
    PayStructureRuleCategory_Search,
    PayStructureRuleCategory_Delete,
    PayStructureRuleCategory_Print,
    PayStructureRuleCategory_Authorize,
    PayStructureGroup_View,
    PayStructureGroup_Add,
    PayStructureGroup_Edit,
    PayStructureGroup_Search,
    PayStructureGroup_Delete,
    PayStructureGroup_Print,
    PayStructureGroup_Authorize,
    PayStructure_View,
    PayStructure_Add,
    PayStructure_Edit,
    PayStructure_Search,
    PayStructure_Delete,
    PayStructure_Print,
    PayStructure_Authorize,
    PayStructureRule_View,
    PayStructureRule_Add,
    PayStructureRule_Edit,
    PayStructureRule_Search,
    PayStructureRule_Delete,
    PayStructureRule_Print,
    PayStructureRule_Authorize,
    ContractTemplate_View,
    ContractTemplate_Add,
    ContractTemplate_Edit,
    ContractTemplate_Search,
    ContractTemplate_Delete,
    ContractTemplate_Print,
    ContractTemplate_Authorize,
    ContractType_View,
    ContractType_Add,
    ContractType_Edit,
    ContractType_Search,
    ContractType_Delete,
    ContractType_Print,
    ContractType_Authorize,
    WorkingHour_View,
    WorkingHour_Add,
    WorkingHour_Edit,
    WorkingHour_Search,
    WorkingHour_Delete,
    WorkingHour_Print,
    WorkingHour_Authorize,
    WorkEntryType_View,
    WorkEntryType_Add,
    WorkEntryType_Edit,
    WorkEntryType_Search,
    WorkEntryType_Delete,
    WorkEntryType_Print,
    WorkEntryType_Authorize,
    PayRule_View,
    PayRule_Add,
    PayRule_Edit,
    PayRule_Search,
    PayRule_Delete,
    PayRule_Print,
    PayRule_Authorize,
    Contract_View,
    Contract_Add,
    Contract_Edit,
    Contract_Search,
    Contract_Delete,
    Contract_Print,
    Contract_Authorize,
    PayInputType_View,
    PayInputType_Add,
    PayInputType_Edit,
    PayInputType_Search,
    PayInputType_Delete,
    PayInputType_Print,
    PayInputType_Authorize,
    TaxCalculationSetup_View,
    TaxCalculationSetup_Add,
    TaxCalculationSetup_Edit,
    TaxCalculationSetup_Search,
    TaxCalculationSetup_Delete,
    TaxCalculationSetup_Print,
    TaxCalculationSetup_Authorize,
    Pay_Batches_View,
    Pay_Batches_Add,
    Pay_Batches_Edit,
    Pay_Batches_Search,
    Pay_Batches_Delete,
    Pay_Batches_Print,
    Pay_Batches_Authorize,
    Pay_Slip_View,
    Pay_Slip_Add,
    Pay_Slip_Edit,
    Pay_Slip_Search,
    Pay_Slip_Delete,
    Pay_Slip_Print,
    Pay_Slip_Authorize,
  };
}
