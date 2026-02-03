import dayjs from 'dayjs';
import moment from 'moment';
// permissionsHelper.js
import Tooltip from '@mui/material/Tooltip';
import { Howl } from 'howler'; // Import Howl from the Howler library
import { useEffect, useRef, useState } from 'react';
import {
  FaCar,
  FaCogs,
  FaHouseUser,
  FaMotorcycle,
  FaShuttleVan,
} from 'react-icons/fa';
import { store } from '../../store/store';

import { styled, TableCell } from '@mui/material';
import axios from 'axios';
import Status from 'components/Status';
import toast from 'components/Toast';
import { BiLogInCircle } from 'react-icons/bi';
import { BsPersonVcard } from 'react-icons/bs';
import { FaMoneyCheckAlt, FaUmbrellaBeach } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GrVirtualStorage } from 'react-icons/gr';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { IoStatsChart, IoWarningOutline } from 'react-icons/io5';
import {
  MdApartment,
  MdOutlinePersonalInjury,
  MdPersonOff,
  MdWork,
} from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import {
  AmountTypeOption,
  countries,
  EmployeeState,
  fiscalMonths,
  formTypeListEnum,
  iconComponents,
  keySplitForDropdown,
  payCategoryTypes,
  payrollTypes,
  roleTypeOptions,
  ScheduledPayPayrollFrequencies,
  STATUS_STYLES,
  ValueTypeOption,
  vehicleStatusOptions,
  wagestype,
  weekendMaskOptions,
  WorkEntrySourceOptions,
} from '../../constants/constant';
import { gradientCombosHex } from './colorsConstant';
import { ROUTE_PATHS } from './routes';

export const numberFormat = (number) => {
  return number
    ? parseFloat(number)
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : '--';
};

export const numberFixedTwo = (value) => {
  if (value === null || value === undefined || Number.isNaN(value)) return '--';
  const rounded = Math.round(Number(value) * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
};
export const calculateWorkHoursMinusBreak = (
  totalWorkHours,
  lunchFrom,
  lunchTo,
  workday,
) => {
  if (!totalWorkHours) return null;

  let hours = Number(totalWorkHours);

  if (lunchFrom && lunchTo) {
    const day = workday ? new Date(workday) : new Date();
    const today = day.toISOString().split('T')[0];

    let start = new Date(`${today}T${lunchFrom}`);
    let end = new Date(`${today}T${lunchTo}`);

    // 🟢 Handle overnight (e.g. 23:30 → 00:30 next day)
    if (end < start) {
      end.setDate(end.getDate() + 1);
    }

    if (!isNaN(start) && !isNaN(end)) {
      const breakHours = (end - start) / (1000 * 60 * 60);
      hours -= Math.max(breakHours, 0); // avoid negative subtraction
    }
  }

  const rounded = Math.round(hours * 100) / 100;
  return Number.isInteger(rounded) ? rounded : rounded.toFixed(2);
};
// Get Date Format DD-MM-YYYY

export const defaultDateFormat = (date) => {
  return date ? dayjs(date).format('DD-MM-YYYY') : '--';
};
export const defaultTimeFormat = (time) => {
  return time ? dayjs(time).format('HH:mm:ss') : '--';
};
export const timeFormat = (time) => {
  return time ? moment(time, 'HH:mm:ss').format('HH:mm') : '--';
};

// Get Date Format with time DD-MM-YYYY with 24 hours Format
export const defaultDateWithTime24Format = (date) => {
  return date ? moment(date).format('DD-MM-YYYY HH:mm') : '--';
};
// Get Date Format with time DD-MM-YYYY  12 hours Format
export const defaultDateWithTime12Format = (date) => {
  return date ? moment(date).format('DD-MM-YYYY hh:mm A') : '--';
};
// Get Time Format with time 12 hours Format
export const formatTimeTo12Hour = (time) => {
  return time ? moment(time, 'HH:mm:ss').format('hh:mm A') : '--';
};

export const convertTime = (timeString) => {
  if (!timeString) {
    const currentDate = dayjs().format('YYYY-MM-DD');
    return dayjs(`${currentDate}T00:00`);
  }
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  return dayjs().hour(hours).minute(minutes).second(seconds);
};
export function formatDateMonthYear(dateStr) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const parts = dateStr.split('-');

  const monthIndex = parseInt(parts[1], 10) - 1;
  const year = parts[2];

  return `${monthNames[monthIndex]} ${year}`;
}
const getDistanceInMeters = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371000; // Radius of Earth in meters

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const isWithinRadius = (
  userLat,
  userLon,
  officeLat,
  officeLon,
  radiusMeters,
) => {
  const distance = getDistanceInMeters(userLat, userLon, officeLat, officeLon);
  return distance <= radiusMeters;
};
export const StickyTableCell = styled(TableCell)(({ theme, right }) => ({
  position: 'sticky',
  right: right ? right : 0,
  zIndex: 2,
  minWidth: '120px',
  width: '120px',
  overflow: 'visible',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),

  '.MuiTableRow-hover:hover &': {
    backgroundColor: '#F5F5F5',
  },
  [theme.breakpoints.down('sm')]: {
    right: right ? '70px' : 0,
    minWidth: '60px',
    width: '60px',
    paddingRight: '15px',
  },
}));
export const StickyLeftCell = styled(TableCell)(({ theme, left }) => ({
  position: 'sticky',
  left: left ? left : 0,
  zIndex: 2,
  backgroundColor: theme.palette.background.paper,
  overflow: 'visible',
  padding: theme.spacing(1),

  '.MuiTableRow-hover:hover &': {
    backgroundColor: '#F5F5F5',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    minWidth: '60px',
    width: '60px',
    left: 0,
  },
}));

export const DocumentStickyTableCell = styled(TableCell)(
  ({ theme, right }) => ({
    position: 'sticky',
    right: right ? right : 0,
    zIndex: 2,
    minWidth: '120px',
    width: '120px',
    overflow: 'visible',
    backgroundColor: '#EFEFEF',
    padding: theme.spacing(1),

    '.MuiTableRow-hover:hover &': {
      backgroundColor: '#F5F5F5',
    },
  }),
);
export const getWeekendDaysName = (mask) => {
  const values =
    weekendMaskOptions?.map((opt) => {
      if ((mask & Number(opt.value)) !== 0) {
        return opt.label;
      }
    }) || 0;

  return values?.filter(Boolean).join(', ') || 'No Weekend';
};

export const TruncateTooltip = ({
  children,
  tooltip,
  className = '',
  wrapperClassName = '',
  ...rest
}) => {
  const textRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsTruncated(el.scrollWidth > el.clientWidth);
    }
  }, [children, tooltip]);

  return (
    <Tooltip
      title={isTruncated ? tooltip : ''}
      arrow
      disableHoverListener={!isTruncated}
      {...rest}
    >
      <div ref={textRef} className={`truncate ${className}`}>
        {children}
      </div>
    </Tooltip>
  );
};

export const StickyHeaderStatusCell = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  right: '120px',
  backgroundColor: '#113D4E',
  zIndex: 3,
  minWidth: '130px',
  width: '130px',

  [theme.breakpoints.down('sm')]: {
    right: '70px',
    minWidth: '60px',
    width: '60px',
  },
}));
export const StickyHeaderleftCell = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  left: '120px',
  backgroundColor: '#113D4E',
  zIndex: 3,
  minWidth: '130px',
  width: '130px',

  [theme.breakpoints.down('sm')]: {
    position: 'sticky',
    left: '30px',
    minWidth: '40px',
    width: '40px',
    zIndex: 3,
  },
}));
export const StickyHeaderleftFullname = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  left: '190px',
  backgroundColor: '#113D4E',
  zIndex: 3,
  minWidth: '130px',
  width: '130px',

  [theme.breakpoints.down('sm')]: {
    position: 'sticky',
    left: '60px',
    minWidth: '60px',
    width: '60px',
    zIndex: 3,
  },
}));
export const StickyHeaderlmg = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  left: '0px',
  backgroundColor: '#113D4E',
  zIndex: 3,
  minWidth: '130px',
  width: '130px',

  [theme.breakpoints.down('sm')]: {
    position: 'sticky',
    minWidth: '60px',
    width: '60px',
    left: '0',
    zIndex: 3,
  },
}));

export const StickyHeaderCell = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  right: 0,
  backgroundColor: '#113D4E',
  zIndex: 3,
  minWidth: '120px',
  width: '120px',

  [theme.breakpoints.down('sm')]: {
    minWidth: '50px',
    width: '50px',
  },
}));

export const DocumentStickyHeaderCell = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  right: 0,
  backgroundColor: '#EFEFEF',
  zIndex: 3,
  minWidth: '120px',
  width: '120px',
}));
export function getCurrentDateFormatted(currentDate) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const formattedDate = months[monthIndex] + ' ' + day + ', ' + year;

  return formattedDate;
}

export function getDayName(date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayIndex = date.getDay();

  const dayName = days[dayIndex];

  return dayName;
}
// Sorting Methods

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator, startIndex, endIndex) {
  const stabilizedThis = array
    ?.slice(startIndex, endIndex)
    ?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}
export const firstLetterCapitalize = (str) => {
  return (
    str
      ?.toLocaleLowerCase()
      ?.split(' ')
      ?.map((word) => word?.charAt(0).toLocaleUpperCase() + word?.slice(1))
      .join(' ') || ''
  );
};
export const handleRowsPerPage = (totalRecord, divisionFactor = 10) => {
  const options = [];
  // options.push({ label: 'All', value: totalRecord });
  const pageCount = Math.ceil(totalRecord / divisionFactor);
  for (let index = 0; index < pageCount; index++) {
    const label = (index + 1) * divisionFactor;
    options.push({ label, value: label });
  }
  return options;
};
//////////////////////////////////////
export const dummy = {
  userProfileID: 2,
  userName: 'ayoub.malik@tekhqs.com',
  userFullName: 'Malik Ali Dogger',
  userProfileImage:
    'https://teksandboxresources.blob.core.windows.net/hrms/tekhqs.png',
  securityGroupId: 1,
  companyEmail: 'ayoub.malik@tekhqs.com',
  employeeType: 'temp',
  lastName: 'Dogger',
  firstName: 'ALi Malik',
  gender: 'male',
  fatherName: 'Malik',
  dateOfBirth: '2024-01-25T13:28:42.757Z',
  dateOfJoining: '2024-01-25T13:28:42.757Z',
  phoneNo: 'string',
  mobileNo: '+923004048419',
  personalEmail: 'string@g',
  paddress: 'string',
  pcity: 'string',
  pstate: 'string',
  currentAddress: 'string',
  currentCity: 'string',
  currentState: 'string',
  departmentId: 3,
  projectId: 4,
  designationId: 3,
  workShiftId: 8,
  division: 'string',
  highestDegree: 'string',
  skillSet: 'string',
  employeeReportingTo: 3,
  maritalStatus: 'string',
  nationalId: '2222222222222',
  nicexpirationDate: '2024-01-25T13:28:42.757Z',
  employeeTaxNumber: '0',
  emergencyContact: '0',
  emergencyPhoneNo: 'string',
  emergencyRelationShip: 'string',
  notes: 'string',
  employeeChagePassword: true,
  createdBy: 2,
  updatedBy: 2,
  linkedinJoined: true,
  employeeLinkedin: 0,
  employeeDocsList: [
    {
      docType: 'application/pdf',
      docName: 'Test 1',
      docFile:
        'https://teksandboxresources.blob.core.windows.net/hrms/Internet Speed SC.pdf',
      createdBy: 6,
      updatedBy: 6,
    },
    {
      docType: 'application/pdf',
      docName: 'Test 2',
      docFile:
        'https://teksandboxresources.blob.core.windows.net/hrms/About PC SC.pdf',
      createdBy: 6,
      updatedBy: 6,
    },
  ],
};
///////////////////
export function getProficiencyText(number) {
  if (!number) {
    return 'Invalid proficiency level';
  }
  const proficiencyLevel = Number(number);
  switch (proficiencyLevel) {
    case 1:
      return 'Elementary Proficiency';
    case 2:
      return 'Limited Working Proficiency';
    case 3:
      return 'Professional Proficiency';
    case 4:
      return 'Full Professional Proficiency';
    case 5:
      return 'Native or Bilingual Proficiency';
    default:
      return 'Invalid proficiency level';
  }
}
export const timeStringToSeconds = (timeString) => {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalSeconds;
};
export function getCurrentMonthYear(currentDate) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const formattedDate = months[monthIndex] + ' ' + year;

  return formattedDate;
} // wherever your Redux store is initialized

export function getUserPermissions() {
  const state = store.getState();
  return state?.states?.userData || {};
}
export function employmentStatus(status) {
  let text;
  if (status === 0) {
    text = 'Inactive';
  } else if (status === 1) {
    text = 'Active';
  } else if (status === 2) {
    text = 'Terminated';
  } else if (status === 3) {
    text = 'Resigned';
  } else if (status === 4) {
    text = 'Annual Leave';
  } else if (status === 5) {
    text = 'Medical Leave';
  } else if (status === 6) {
    text = 'Casual Leave';
  } else {
    text = 'Inactive';
  }
  return text;
}
export function getUserAccountStatus(status) {
  let text;
  if (status === 0) {
    text = 'Inactive';
  } else if (status === 1) {
    text = 'Active';
  } else if (status === 2) {
    text = 'Invited';
  } else if (status === 3) {
    text = 'New';
  } else if (status === 4) {
    text = 'Suspended';
  } else {
    text = 'Inactive';
  }
  return text;
}
export function employmentStatusAssignment(status) {
  let text;
  if (status === 0) {
    text = <span className="text-[#C80404]">Inactive</span>;
  } else if (status === 1) {
    text = <span className="text-[#1CCB01]">Active</span>;
  } else if (status === 2) {
    text = <span className="text-[#C80404]">Terminated</span>;
  } else if (status === 3) {
    text = <span className="text-[#C80404]">Resigned</span>;
  } else if (status === 4) {
    text = <span className="text-[#FD9800]">Annual</span>;
  } else if (status === 5) {
    text = <span className="text-[#FD9800]">Medical Leave</span>;
  } else if (status === 6) {
    text = <span className="text-[#1CCB01]">Guest</span>;
  } else {
    text = <span className="text-[#C80404]">Inactive</span>;
  }
  return text;
}

export function formsStatus(status) {
  let text;
  if (status === 0) {
    text = 'Pending';
  } else if (status === 1 || status === '1') {
    text = 'Approved';
  } else if (status === 2 || status === '2') {
    text = 'Rejected';
  } else if (status === 3 || status === '3') {
    text = 'Cancelled';
  } else if (status === 4 || status === '4') {
    text = 'OnHold';
  } else if (status === 5 || status === '5') {
    text = 'Withdraw';
  } else {
    text = 'Pending';
  }
  return text;
}
export function annualsSettledStatus(status) {
  let text;
  if (status === 'Pending' || status === 'pending') {
    text = 'Pending';
  } else if (status === 'settled' || status === 'Settled') {
    text = 'Settled';
  } else {
    text = 'Pending';
  }
  return text;
}
export function formType(status) {
  let text;
  if (status === 'AnnualLeave') {
    text = 'Annual Leave';
  } else if (status === 'MedicalLeave') {
    text = 'Medical Leave';
  } else if (status === 'CasualLeave') {
    text = 'Casual Leave';
  } else if (status === 'AnnualLeave') {
    text = 'Annual Leave';
  } else if (status === 'WarningForm') {
    text = 'Warning Form';
  } else if (status === 'RejoiningForm') {
    text = 'Rejoining Form';
  } else if (status === 'TerminationForm') {
    text = 'Termination Form';
  } else if (status === 'LoanForm') {
    text = 'Loan Form';
  } else if (status === 'ResignedForm') {
    text = 'Resigned Form';
  } else if (status === 'WorkFromHome') {
    text = 'Work From Home';
  } else if (status === 'AttendanceCorrection') {
    text = 'Attendance Correction';
  } else {
    text = '--';
  }
  return text;
}
export const getLeaveFormStatus = (formType) => {
  const type = String(formType);
  switch (type) {
    case '0':
      return 'MedicalLeave';
    case '1':
      return 'Annual Leave';
    case '2':
      return 'CasualLeave';
    case '3':
      return 'AnnualLeave';
    default:
      return '';
  }
};
export const formApprovalRoute = (formType) => {
  switch (formType) {
    case 'AnnualLeave':
      return '/approvals/annual-form';
    case 'MedicalLeave':
      return '/approvals/medical-leave-form';
    case 'CasualLeave':
      return '/approvals/casual-leave-form';
    // case 'WarningForm':
    // return '/approvals/disciplinary-action-form';
    case 'RejoiningForm':
      return '/approvals/rejoining-form';
    case 'TerminationForm':
      return '/approvals/employee-termination-form';
    case 'LoanForm':
      return '/approvals/loan-form';
    case 'ResignedForm':
      return '/approvals/employee-resignation-form';
    case 'WorkFromHome':
      return '/approvals/work-from-home-form';
    case 'AttendanceCorrection':
      return '/approvals/attendance-correction-form';
    default:
      return '';
  }
};
export const formEditRoute = (formType) => {
  switch (formType) {
    case 'AnnualLeave':
      return getRouteSplit(ROUTE_PATHS.ANNUAL_FORM_EDIT, ':editId');
    // case 'MedicalLeave':
    // return '/approvals/medical-leave-form';
    // case 'CasualLeave':
    // return '/approvals/casual-leave-form';
    // case 'AnnualLeave':
    // return '/approvals/casual-leave-form';
    // case 'WarningForm':
    // return '/approvals/disciplinary-action-form';
    // case 'RejoiningForm':
    // return '/approvals/rejoining-form';
    // case 'TerminationForm':
    // return '/approvals/employee-termination-form';
    case 'LoanForm':
      return getRouteSplit(ROUTE_PATHS.LOAN_FORM_EDIT, ':editId');
    // case 'ResignedForm':
    //   return '/approvals/employee-resignation-form';
    // case 'WorkFromHome':
    //   return '/approvals/work-from-home-form';
    // case 'AttendanceCorrection':
    //   return '/approvals/attendance-correction-form';
    default:
      return '';
  }
};
export const formApprovalViewRequestRoute = (formType) => {
  switch (formType) {
    case 'AnnualLeave':
      return '/read-annual-form';
    case 'MedicalLeave':
      return '/read-medical-leave-form';
    case 'CasualLeave':
      return '/read-casual-leave-form';
    case 'WarningForm':
      return '/read-disciplinary-action-form';
    case 'RejoiningForm':
      return '/read-rejoining-form';
    case 'TerminationForm':
      return '/read-employee-termination-form';
    case 'LoanForm':
      return '/read-loan-form';
    case 'ResignedForm':
      return '/read-employee-resignation-form';
    case 'WorkFromHome':
      return '/read-work-from-home-form';
    case 'AttendanceCorrection':
      return '/read-attendance-correction-form';
    default:
      return '';
  }
};
export const formRequestRoute = (formType) => {
  switch (formType) {
    case 'AnnualLeave':
      return '/requests/annual-form';
    case 'MedicalLeave':
      return '/requests/medical-leave-form';
    case 'CasualLeave':
      return '/requests/casual-leave-form';
    // case 'WarningForm':
    //   return '/requests/disciplinary-action-form';
    case 'RejoiningForm':
      return '/requests/rejoining-form';
    case 'TerminationForm':
      return '/requests/employee-termination-form';
    case 'ResignedForm':
      return '/requests/employee-resignation-form';
    case 'LoanForm':
      return '/requests/loan-form';
    case 'WorkFromHome':
      return '/requests/work-from-home-form';
    case 'AttendanceCorrection':
      return '/requests/attendance-correction-form';
    default:
      return false;
  }
};

export const formRequestAndApprovalRoute = (formType, reqType, permissions) => {
  const basePaths = {
    1: {
      AnnualLeave: '/approvals/annual-form',
      MedicalLeave: '/approvals/medical-leave-form',
      RejoiningForm: '/approvals/rejoining-form',
      TerminationForm: '/approvals/employee-termination-form',
      LoanForm: '/approvals/loan-form',
      ResignedForm: '/approvals/employee-resignation-form',
      CasualLeave: '/approvals/casual-leave-form',
      WorkFromHome: '/approvals/work-from-home-form',
      AttendanceCorrection: '/approvals/attendance-correction-form',
    },
    2: {
      AnnualLeave: '/requests/annual-form',
      MedicalLeave: '/requests/medical-leave-form',
      RejoiningForm: '/requests/rejoining-form',
      TerminationForm: '/requests/employee-termination-form',
      LoanForm: '/requests/loan-form',
      ResignedForm: '/requests/employee-resignation-form',
      CasualLeave: '/requests/casual-leave-form',
      WorkFromHome: '/requests/work-from-home-form',
      AttendanceCorrection: '/requests/attendance-correction-form',
    },
  };

  if (!permissions[formType]) {
    return (
      {
        AnnualLeave: '/read-annual-form',
        MedicalLeave: '/read-medical-leave-form',
        RejoiningForm: '/read-rejoining-form',
        TerminationForm: '/read-employee-termination-form',
        LoanForm: '/read-loan-form',
        ResignedForm: '/read-employee-resignation-form',
        CasualLeave: '/read-casual-leave-form',
        WorkFromHome: '/read-work-from-home-form',
        AttendanceCorrection: '/read-attendance-correction-form',
      }[formType] || ''
    );
  }
  return basePaths?.[reqType]?.[formType] || '';
};

const hitSounds = new Howl({
  src: [
    '/sounds/text_tone.mp3',
    '/sounds/text_tone.m4a',
    '/sounds/text_tone.ogg',
    '/sounds/text_tone.wav',
    '/sounds/text_tone.acc',
  ],

  preload: true,
  autoplay: false,
});

export const playHitSound = () => {
  hitSounds?.play();
};

const getFormType = (formType) => {
  switch (formType) {
    case 'AnnualLeave':
      return 'Annual Leave';
    case 'MedicalLeave':
      return 'Medical Leave';
    case 'WarningForm':
      return 'Warning Form';
    case 'RejoiningForm':
      return 'Rejoining Form';
    case 'TerminationForm':
      return 'Termination Form';
    case 'LoanForm':
      return 'Loan Form';
    case 'ResignedForm':
      return 'Resigned Form';
    case 'WorkFromHome':
      return 'Work From Home';
    case 'AttendanceCorrection':
      return 'Attendance Correction';
    case 'EmployeeData':
      return 'Employee Data';
    default:
      return '--';
  }
};
export const calculateTotalHours = (from, to) => {
  if (!from || !to) return 0;

  let fromTime = dayjs(from, 'HH:mm');
  let toTime = dayjs(to, 'HH:mm');

  if (toTime.isBefore(fromTime)) {
    toTime = toTime.add(1, 'day'); // handle crossing midnight
  }

  return toTime.diff(fromTime, 'hour', true); // true → decimal hours
};
export const getUploadFolderPathOnServerForSave = (pathTemplate, values) => {
  let path = pathTemplate;
  values?.forEach((val, idx) => {
    path = path.replace(`{${idx}}`, String(val));
  });
  return path;
};

export const getNotificationsItemIcon = (reqType, formType) => {
  // if (reqType === 1) {
  //   return <FcApproval className="text-3xl" />;
  // }

  switch (formType) {
    case 'AnnualLeave':
      return <FaUmbrellaBeach className="text-3xl text-yellow-500" />;
    case 'WarningForm':
      return <IoWarningOutline className="text-[#c45826] text-3xl" />;
    case 'RejoiningForm':
      return <BiLogInCircle className="text-3xl text-green-600" />;
    case 'MedicalLeave':
      return <MdOutlinePersonalInjury className="text-3xl text-orange-500" />;
    case 'CasualLeave':
      return (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 256 256"
          className="m-4 text-3xl text-lime-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M136,72v43.05l36.42-18.21a8,8,0,0,1,7.16,14.31l-48,24A8,8,0,0,1,120,128V72a8,8,0,0,1,16,0Zm-8,144a88,88,0,1,1,88-88,8,8,0,0,0,16,0A104,104,0,1,0,128,232a8,8,0,0,0,0-16Zm103.73,5.94a8,8,0,1,1-15.46,4.11C213.44,215.42,203.46,208,192,208s-21.44,7.42-24.27,18.05A8,8,0,0,1,160,232a8.15,8.15,0,0,1-2.06-.27,8,8,0,0,1-5.67-9.79,40,40,0,0,1,17.11-23.32,32,32,0,1,1,45.23,0A40,40,0,0,1,231.73,221.94ZM176,176a16,16,0,1,0,16-16A16,16,0,0,0,176,176Z"></path>
        </svg>
      );
    case 'TerminationForm':
      return <MdPersonOff className="text-3xl text-gray-600" />;
    case 'ResignedForm':
      return <RiLogoutBoxRLine className="text-[#0c3b92] text-3xl" />;
    case 'LoanForm':
      return <FaMoneyCheckAlt className="text-3xl text-emerald-600" />;
    case 'WorkFromHome':
      return <FaHouseUser className="text-3xl text-lime-700" />;
    case 'AttendanceCorrection':
      return <RxUpdate className="text-3xl text-lime-700" />;
    case 'EmployeeData':
      return <BsPersonVcard className="text-3xl text-indigo-600" />;
    default:
      return <GrVirtualStorage className="text-3xl text-indigo-600" />;
  }
};
export const getHeaderCardColor = (index) => {
  const combo = gradientCombosHex[index % gradientCombosHex?.length];
  return `linear-gradient(to right, ${combo[0] || '#DCFCE7'}, ${
    combo[1] || '#FEFCE8'
  })`;
};
export const splitCamelCase = (str) => str?.split(/(?=[A-Z])/);
export const addSpaces = (text) => {
  if (!text) {
    return '--';
  }
  return text?.replace(/([a-z])([A-Z])/g, '$1 $2');
};
export const getEmployeeFilterValue = (filter) => {
  return filter?.label === 'Status'
    ? //getDropdownEmployeeFilterValue(
      //     filter?.value?.map((v) => employmentStatus(+v)) || []
      //   )
      employmentStatus(+filter.value)
    : // getDropdownEmployeeFilter(filter)
      // ? getDropdownEmployeeFilterValue(filter?.value)
      // :
      String(filter.value);
};
export const getDropdownEmployeeFilter = (filter) => {
  return (
    filter?.value === 'Gender' ||
    filter?.type === 'Int32' ||
    filter?.value === 'Employee State' ||
    filter?.column === 'EmployeeState' ||
    filter?.value === 'Status' ||
    filter?.column === 'Status' ||
    filter?.value === 'DriverLicenseType' ||
    filter?.column === 'DriverLicenseType' ||
    filter?.value === 'Country' ||
    filter?.value === 'WorkingMode' ||
    filter?.column === 'WorkingMode' ||
    filter?.value === 'EmployeeReportingTo' ||
    filter?.column === 'EmployeeReportingTo' ||
    filter?.value === 'Marital Status' ||
    filter?.column === 'MaritalStatus' ||
    filter?.column === 'DepartmentID' ||
    filter?.column === 'DesignationID' ||
    filter?.column === 'EmployeeReportingTo' ||
    filter?.column === 'Country'
  );
};

export const getDropdownEmployeeFilterValue = (value) => {
  return value?.map((item) => item?.split(keySplitForDropdown)[0]).join(', ');
};

export const iconMap = (icon) =>
  iconComponents[icon] || iconComponents['MdApartment'];
export const getSettingSidebarIcon = (title) => {
  switch (title) {
    case 'Organization':
      return (
        <IoStatsChart className="transition-all duration-300 w-[24px] h-[24px] text-white" />
      );
    case 'Profile':
      return (
        <HiBuildingOffice2 className="w-[24px] h-[24px] ml-1 text-white" />
      );
    case 'Branding':
      return <MdApartment className="w-[24px] h-[24px] text-white" />;
    case 'Manage Subscription':
      return <MdWork className="w-[24px] h-[24px] text-white" />;
    case 'Users & Roles':
      return (
        <FiUsers className="transition-all duration-300 w-[24px] h-[24px] text-white" />
      );
    case 'Roles':
      return <MdApartment className="w-[24px] h-[24px] text-white" />;
    case 'Setup & Configuration':
      return (
        <FaCogs className="transition-all duration-300 w-[24px] h-[24px] text-white" />
      );
    case 'General':
      return (
        <HiBuildingOffice2 className="w-[24px] h-[24px] ml-1 text-white" />
      );
    case 'Currencies':
      return <MdApartment className="w-[24px] h-[24px] text-white" />;
    case 'Opening balances':
      return <MdApartment className="w-[24px] h-[24px] text-white" />;
    case 'Reminders':
      return <MdApartment className="w-[24px] h-[24px] text-white" />;
    default:
      return <MdApartment className="w-[24px] h-[24px] text-white" />;
  }
};

export const getApprovalsStatus = (value) => {
  let i;
  if (value === 'Pending') i = 0;
  else if (value === 'Approve') i = 1;
  else if (value === 'Reject') i = 2;
  else if (value === 'Cancel') i = 3;
  else if (value === 'On Hold') i = 4;
  else if (value === 'Withdraw') i = 5;
  return { i, value };
};
export const getPermissionLabel = (status) => {
  const FormActionButtons = {
    0: 'Pending',
    1: 'Approve',
    2: 'Reject',
    3: 'Cancel',
    4: 'On Hold',
    5: 'Withdraw',
  };

  return FormActionButtons[status] ?? null;
};
export const getAllowedActions = ({
  requestId,
  formId,
  status: statusString,
  roleType,
  date,
  formType,
}) => {
  const status = Number(statusString);
  // requestId logic
  if (requestId) {
    if ((status === 0 || status === 4) && status !== 3) {
      return [getPermissionLabel(3)];
    }
    const afterCheck = dayjs(date).isAfter(dayjs(), 'day');
    const sameCheck = dayjs(date).isSame(dayjs(), 'day');
    const dateCheck = date;
    const isDateInFuture = afterCheck || sameCheck;
    const formNotAllowToWithdraw =
      formType.value !== formTypeListEnum.ResignedForm.value;

    if (
      formNotAllowToWithdraw &&
      isDateInFuture &&
      dateCheck &&
      status !== 5 &&
      status !== 3 &&
      status !== 0 &&
      status !== 2
    ) {
      return [getPermissionLabel(5)];
    } else {
      return [];
    }
  }

  // formId logic
  if (formId) {
    const actions = [];

    // 1. Approve
    // Only allow if NOT approved and user is not roleType 2
    if (
      status !== 1 &&
      status !== 2 &&
      status !== 3 &&
      status !== 5 &&
      roleType != 2
    ) {
      actions.push(getPermissionLabel(1)); // Approve
    }
    // 2. Reject
    // Only allow if NOT approved and NOT rejected and user is not roleType 2
    if ((status === 0 || status === 4) && roleType != 2) {
      actions.push(getPermissionLabel(2)); // Rejected
    }

    // 3. On Hold
    // Only allow if not Approved, Rejected, Cancelled, Withdrawn
    if (![1, 2, 3, 4, 5].includes(status) && roleType != 2) {
      actions.push(getPermissionLabel(4)); // On Hold
    }

    // 4. Cancel
    // Allowed when user is roleType 3 AND status is not status !== 3 && status !== 2 && status !== 5
    if (roleType == 2 && status !== 3 && status !== 2 && status !== 5) {
      actions.push(getPermissionLabel(3)); // Cancel
    }

    return actions.filter(Boolean);
  }

  return [];
  // if (requestId) {
  //   if (status === 0 || status === 4) {
  //     return [getPermissionLabel(3)];
  //   }
  //   return [getPermissionLabel(5)];
  // } else if (formId) {
  //   actions = [
  //     formik.values.status !== 1 && userData?.roleType != 2 ? 'Approve' : null,
  //     formik.values.status !== 1 && formik.values.status !== 2
  //       ? 'Rejected'
  //       : null,
  //     formik.values.status !== 1 && formik.values.status !== 4
  //       ? 'On Hold'
  //       : null,
  //     userData?.roleType != 3 &&
  //     formik.values.status === 1 &&
  //     formik.values.status !== 3 &&
  //     formik.values.status !== 2
  //       ? 'Cancel'
  //       : null,
  //   ].filter(Boolean);
  // }
};
export function getCalendarMonthDayDiff(startDate, endDate) {
  let a = dayjs(startDate);
  let b = dayjs(endDate);

  // if same day or reversed, normalize so a <= b
  let negative = false;
  if (a.isAfter(b)) {
    negative = true;
    [a, b] = [b, a];
  }

  // count whole months
  let months = 0;
  const startDay = a.date();

  // naive months diff by year/month then adjust
  months = (b.year() - a.year()) * 12 + (b.month() - a.month());

  // create candidate by adding those months to start
  let candidate = a.add(months, 'month');

  // If candidate is after end, step back months until candidate <= end
  while (candidate.isAfter(b)) {
    months -= 1;
    candidate = a.add(months, 'month');
  }

  // If candidate's day is different because original month had fewer days,
  // candidate will be last day of that month — that's fine: we compute remaining days from candidate.
  const days = b.diff(candidate, 'day');

  return {
    months: negative ? -months : months,
    days: negative ? -days : days,
  };
}

/**
 * Convenience: format readable string like "X months Y days"
 */
export function formatMonthDayDiff(startDate, endDate) {
  const diff = getCalendarMonthDayDiff(startDate, endDate);
  const months = Math.abs(diff.months);
  const days = Math.abs(diff.days);
  const parts = [];
  if (months === 1) parts.push('1 month');
  else if (months > 1) parts.push(`${months} months`);
  if (days === 1) parts.push('1 day');
  else if (days > 1) parts.push(`${days} days`);
  return parts.join(' ');
}
export const statusReport = (array, name) => {
  if (!Array.isArray(array)) return null;
  return array.find((item) => item?.name === name) || { value: 0, name };
};
export const statusVehicleReport = (array, name) => {
  if (!Array.isArray(array)) return null;
  return (
    array.find((item) => item?.statusName === name) || {
      count: 0,
      statusName: name,
    }
  );
};
export const formatNumberUS = (numberValue) => {
  const num = Number(numberValue);

  if (isNaN(num) || numberValue === null || numberValue === undefined) {
    return '-';
  }

  return `~ ${new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 4,
  }).format(num)}`;
};
export const formatNumberUSString = (numberValue) => {
  const num = Number(numberValue);

  if (isNaN(num) || numberValue === null || numberValue === undefined) {
    return '-';
  }

  const abs = Math.abs(num);

  const format = (value, divisor, suffix, decimals = 2) => {
    const raw = value / divisor;

    // truncate decimals WITHOUT rounding
    const factor = Math.pow(10, decimals);
    const truncated = Math.trunc(raw * factor) / factor;

    return truncated + suffix;
  };

  if (abs >= 1_000_000_000) return format(num, 1_000_000_000, 'B');
  if (abs >= 1_000_000) return format(num, 1_000_000, 'M');
  if (abs >= 1_000) return format(num, 1_000, 'K');

  return num.toString();
};
export const InfoRow = ({ label, value }) => (
  <div className="mb-15">
    <p className="text-[12px] text-gray-500 mb-5">{label}</p>
    <p className="text-[14px] text-[#08214F] font-medium">{value ?? '--'}</p>
  </div>
);
export const handleDownloadTemplate = async (
  route,
  formType,
  employeeName,
  token,
) => {
  try {
    if (!route) {
      toast.error('Route is required');
      return;
    }
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}${route}`,
      {
        responseType: 'blob', // Required to handle binary data
        headers: {
          Authorization: `Bearer ${token}`, // Include token if needed
        },
      },
    );
    // Create a blob from the response
    const blob = new Blob([response.data], { type: 'application/pdf' });
    // Create a link and simulate a click to download
    // const link = document.createElement('a');
    // link.href = window.URL.createObjectURL(blob);
    // link.download = `${employeeName} - ${formType}.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    const fileURL = window.URL.createObjectURL(blob);

    // Open the PDF in a new browser tab
    window.open(fileURL, '_blank');
  } catch (error) {
    console.error('Download failed:', error);
  }
};
export const formPrintRoute = (formType, formId) => {
  const routes = {
    AnnualLeave: {
      api: '/api/form-templates/annual',
    },
    MedicalLeave: {
      api: '/api/form-templates/sick',
    },
    WarningForm: {
      api: '/api/form-templates/warning',
    },
    RejoiningForm: {
      api: '/api/form-templates/rejoin',
    },
    TerminationForm: {
      api: '/api/form-templates/termination',
    },
    AttendanceCorrection: {
      api: '/api/form-templates/attendance-correction',
    },
    LoanForm: {
      api: '/api/form-templates/loan',
    },
    DataForm: {
      print: '/print-data-form',
    },
    CasualLeave: {
      api: '/api/form-templates/casual',
      print: '/print-casual-leave-form',
    },
    WorkFromHome: {
      api: '/api/form-templates/wfh',
    },
  };

  const route = routes[formType];
  if (!route) return false;

  // API route if formId exists
  if (formId && route.api) {
    return `${route.api}/${formId}/download`;
  }

  // Print route fallback
  return route.print || false;
};

export const handleFileChangeDocumentUpload = ({
  e,
  setLoading,
  path,
  formik,
  value,
  method,
  size = 10 * 1024 * 1024,
}) => {
  const file = e.target.files[0];
  if (
    file &&
    [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
    ].includes(file.type)
  ) {
    if (file) {
      if (file.size > size) {
        toast.error(
          'File size should be less than ' + size / 1024 / 1024 + 'MB',
        );
        return;
      }
      setLoading(true);
      method(path, {
        files: file,
      })
        .then((res) => {
          if (res) {
            formik.setFieldValue(value, res[0]?.fileId);
            setLoading(false);
          } else {
            toast.error('Upload failed');
          }
        })
        .catch(() => {
          console.log('catch: failed to upload file');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  } else {
    toast.error('Invalid file type');
  }
};
export const handleFileChangeDocumentUploadFileType = ({
  e,
  setLoading,
  path,
  formik,
  value,
  label,
  method,
  size = 10 * 1024 * 1024,
}) => {
  const file = e.target.files[0];
  if (
    file &&
    [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
    ].includes(file.type)
  ) {
    if (file) {
      if (file.size > size) {
        toast.error(
          'File size should be less than ' + size / 1024 / 1024 + 'MB',
        );
        return;
      }
      setLoading(true);
      method(path, {
        files: file,
      })
        .then((res) => {
          if (res) {
            formik.setFieldValue(value, res[0]?.fileID);
            formik.setFieldValue(label, res[0]?.fileName);
            setLoading(false);
          } else {
            toast.error('Upload failed');
          }
        })
        .catch(() => {
          console.log('catch: failed to upload file');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  } else {
    toast.error('Invalid file type');
  }
};
export const handleDownloadFileAndPDFTemplateForms = async (
  formId,
  formType,
  employeeName,
  setLoading,
  loading,
  token,
  resignedDocumentUrl,
) => {
  if (loading?.loading) {
    toast.warning('Another download in progress');
    return;
  }
  const route = formPrintRoute(formType, formId);
  if (formType !== 'ResignedForm') {
    setLoading(() => getUpdateLoadingState(formType, formId));
    handleDownloadTemplate(route, formType, employeeName, token).finally(() => {
      setLoading(() => getInitialLoadingState());
    });
  } else if (formType === 'ResignedForm') {
    if (resignedDocumentUrl) {
      window.open(resignedDocumentUrl);
    } else {
      toast.error('No document found for Resigned Form.');
    }
  }
};
export const handleManagerList = ({
  empId,
  isShowUsers,
  setManagerOptions,
  setLoadingSettingAPI,
  method,
  formik,
  value,
}) => {
  method(
    `/api/Employee/hierarchy?employeeId=${empId}&managerType=${
      isShowUsers ? 2 : 1
    }`,
  )
    .then((res) => {
      if (res?.isSuccess) {
        const options = res?.response?.map((item) => ({
          label: item?.employeeTitle || item?.fullName,
          value: `${item?.employeeID}`,
          designation: item?.designationName || '',
        }));
        setManagerOptions(options);
      } else {
        setManagerOptions([]);
      }
    })
    .catch((err) => {
      setManagerOptions([]);
      console.error('Failed to fetch manager data:', err);
    })
    .finally(() => {
      setLoadingSettingAPI(false);
    });
};
export const handleSettingsCall = ({
  empId,
  setLoadingSettingAPI,
  method,
  setManagerType,
  setManagerOptions,
  formik,
  value,
}) => {
  setLoadingSettingAPI(true);
  method(`/api/setting/employee/${empId}/approval`)
    .then((res) => {
      if (res?.isSuccess) {
        handleManagerList({
          empId,
          isShowUsers: res?.response?.isShowUsers,
          setLoadingSettingAPI,
          method,
          setManagerOptions,
          formik,
          value,
        });
        setManagerType(res?.response?.isShowUsers ? '2' : '1');
      } else {
        setLoadingSettingAPI(false);
      }
    })
    .catch(() => {
      console.log('catch: failed to fetch manager data');
      setLoadingSettingAPI(false);
    });
};
export const getUpdateLoadingState = (formType, id) => {
  return {
    loading: true,
    id: id,
    formType: formType,
  };
};
export const getInitialLoadingState = () => {
  return {
    loading: false,
    id: null,
    formType: null,
  };
};

export const pushNotification = (notificationText = '') => {
  if (!('Notification' in window)) {
    toast.error('Your browser does not support notifications.');
    return;
  }

  const showNotification = () => {
    new Notification('HRMS', {
      body: notificationText,
      icon: '/images/logo/images/Icon.svg', // Optional: Add an icon if you like
    });
  };

  if (Notification.permission === 'granted') {
    if (notificationText) {
      showNotification();
    }
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        showNotification();
      } else {
        toast.error('Notification permission denied.');
      }
    });
  } else {
    toast.error('Notification permission was denied earlier.');
  }
};
export const getUpperCaseText = (text = '') => {
  return text?.toUpperCase();
};
export const getSliceText = (text) => {
  return text?.length > 14
    ? (text?.slice(0, 7) ?? '') + '...' + text?.slice(-6, text?.length)
    : text;
};
const checkValueAvailablePemissionApproval = (list, value) => {
  if (!list) return false;
  return list?.find((item) => `${item}` === `${value}`);
};
export const handlePemissionApproval = (
  roleType,
  userId,
  employeeId,
  managerType,
  managerList,
  status,
  formType,
  permissions,
  managerID,
) => {
  if (
    !managerList &&
    !((roleType == 0 || roleType == 1 || roleType == 2) && managerID)
  ) {
    return false;
  }
  if (!permissions[formType]) {
    return false;
  }
  const st = String(status);

  const isResignedOrTerminated =
    formType === 'ResignedForm' || formType === 'TerminationForm';
  const isStatusOpen = st === '0' || st === '4';

  // roleType 1 & managerType 2 & user is the manager
  // roleType 2 & managerType 2
  if (roleType == 2) {
    // allow if the form is Resigned/Termination
    return true;
  }
  if (
    (roleType == 1 || roleType == 0) &&
    managerType == 2 &&
    checkValueAvailablePemissionApproval(managerList || [managerID], userId)
  ) {
    // allow if the form is Resigned/Termination OR if status is 0/4
    return isResignedOrTerminated || isStatusOpen;
  }

  // roleType 3 & employeeId matches managerID & managerType 1
  if (
    roleType == 3 &&
    checkValueAvailablePemissionApproval(managerList, employeeId) &&
    managerType == 1
  ) {
    // allow only when status is 0 or 4
    return isStatusOpen;
  }

  return false;
};
export const handlePermissionApprovalEdit = ({
  status,
  formType,
  permissions,
}) => {
  if (!permissions[formType]) {
    return false;
  }
  const st = String(status);
  const isStatusOpen = st === '0' || st === '4';
  if (isStatusOpen) {
    return isStatusOpen;
  }
  return false;
};
export const getFormsApprovalPermissionHelper = (
  WorkFormHome_Authorize,
  AnnualForm_Authorize,
  LeaveForm_Authorize,
  TerminationForm_Authorize,
  RejoiningForm_Authorize,
  ResignedForm_Authorize,
  WarningForm_Authorize,
  LoanForm_Authorize,
  AttendanceCorrectionForm_Authorize,
) => {
  return {
    WorkFromHome: WorkFormHome_Authorize,
    AnnualLeave: AnnualForm_Authorize,
    MedicalLeave: LeaveForm_Authorize,
    CasualLeave: LeaveForm_Authorize,
    TerminationForm: TerminationForm_Authorize,
    RejoiningForm: RejoiningForm_Authorize,
    ResignedForm: ResignedForm_Authorize,
    WarningForm: WarningForm_Authorize,
    LoanForm: LoanForm_Authorize,
    AttendanceCorrection: AttendanceCorrectionForm_Authorize,
  };
};
export const sanitizeContent = (content) => {
  return content
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '<div>$1</div>')
    .replace(/<br\s*\/?>/g, '<br />');
};
export const getUserTenant = (type) => {
  if (type == 2) {
    return 'User';
  } else if (type == 1) {
    return 'Admin';
  } else if (type == 0) {
    return 'Global Admin';
  } else return '--';
};
export const splitSentenceIntoFirstWord = (sentence) => {
  return sentence?.split(' ')[0];
};
export const getCountryName = (code) => {
  const country = countries?.find((c) => c.value === code);
  return country?.label || '--';
};
export const getActionType = (code) => {
  const status = vehicleStatusOptions?.find((c) => c.value == code);
  return status?.label || '--';
};
export const getRoleTypeLabel = (value) => {
  const status = roleTypeOptions?.find((c) => c.value == value);
  return status?.label || '--';
};

export const concatStrings = (str1, str2) => {
  if (str1 && str2) {
    return `${str1} ${str2}`;
  } else if (str1 && !str2) {
    return str1;
  }
  return '';
};
export const concatMultipleStrings = (operator = ' ', ...strings) => {
  return strings.filter(Boolean).join(operator);
};
export const getHostelStatus = (status) => {
  if (status == 1) {
    return 'Active';
  } else {
    return 'Inactive';
  }
};
export const renderStatusSticky = (
  value,
  align = 'center',
  position = { right: '0px' },
) => (
  <StickyTableCell
    {...position}
    align={align}
    className="capitalize whitespace-nowrap"
  >
    <div className="flex justify-center items-center">
      <Status status={value} />
    </div>
  </StickyTableCell>
);
export const renderTextCell = (text, align = 'left', extraClass = '') => (
  <TableCell align={align} className="capitalize max-w-[200px] truncate">
    <div className={`truncate cursor-pointer text-[#000000de] ${extraClass}`}>
      <TruncateTooltip
        tooltip={text === 0 || text === '0' ? '0' : (text ?? '--')}
      >
        {text === 0 || text === '0' ? '0' : (text ?? '--')}
      </TruncateTooltip>
    </div>
  </TableCell>
);
export const renderTextStatus = (value) => (
  <TableCell align="center" className="capitalize whitespace-nowrap">
    <div className="flex justify-center items-center">
      <Status status={value} />
    </div>
  </TableCell>
);
export const getBedStatus = (status) => {
  const value = String(status);
  if (value === '0') {
    return 'Inactive';
  } else if (value === '1') {
    return 'Available';
  } else if (value === '2') {
    return 'Occupied';
  } else if (value === '3') {
    return 'Reserved';
  } else if (value === '4') {
    return 'Maintenance';
  } else {
    return 'Inactive';
  }
};
export const getVehicleStatus = (status) => {
  if (status == 0) {
    return 'InActive';
  } else if (status == 1) {
    return 'Available';
  } else if (status == 2) {
    return 'Assigned';
  } else if (status == 3) {
    return 'Under Maintenance';
  } else if (status == 4) {
    return 'Cancelled';
  } else if (status == 5) {
    return 'Idle';
  }
  return 'InActive';
};
export const getStatusVehicleProfile = (status) => {
  const statusKey = getVehicleStatus(status);
  const style = STATUS_STYLES[statusKey] || STATUS_STYLES['InActive'];
  return (
    <div
      className={`mt-4 sm:mt-0 sm:ml-4 font-semibold w-fit px-10 h-20 sm:h-24 rounded-[4px] flex items-center justify-center text-[14px] border-[1px] transition-all ${style.textColor} ${style.backgroundColor} ${style.borderColor}`}
    >
      {statusKey}
    </div>
  );
};

export const getRoomStatus = (status) => {
  const value = String(status);
  if (value == '0') {
    return 'Inactive';
  } else if (value == '1') {
    return 'Active';
  } else if (value == '2') {
    return 'Occupied';
  } else if (value == '3') {
    return 'Reserved';
  } else if (value == '4') {
    return 'Maintenance';
  } else {
    return 'Inactive';
  }
};
export const getProfileStatusEmployee = (status) => {
  const statusKey = employmentStatus(status);
  const style = STATUS_STYLES[statusKey] || STATUS_STYLES['Inactive'];

  return (
    <div
      className={`mt-4 sm:mt-0 sm:ml-4 font-semibold w-fit px-10 h-20 sm:h-24 rounded-[4px] flex items-center justify-center text-[14px] border-[1px] transition-all ${style.textColor} ${style.backgroundColor} ${style.borderColor}`}
    >
      {statusKey}
    </div>
  );
};
export const getVehicleIcon = (vehicleType) => {
  const type = vehicleType?.toLowerCase();
  if (type === 'car') {
    return <FaCar size={50} color="#113D4E" />;
  } else if (type === 'bike') {
    return <FaMotorcycle size={50} color="#113D4E" />;
  } else if (type === 'van') {
    return <FaShuttleVan size={50} color="#113D4E" />;
  } else {
    <FaCar size={50} color="#113D4E" />;
  }
};
export const getAlertTypeForReasonAlert = (type) => {
  if (type === '0' || type === 0) {
    return 'info';
  } else if (type === '1' || type === 1) {
    return 'success';
  } else if (type === '2' || type === 2) {
    return 'error';
  } else if (type === '4' || type === 4) {
    return 'warning';
  } else {
    return 'warning';
  }
};
export function mapToOptionsByKeys(
  data,
  labelKey,
  valueKey,
  separator = ' - ',
) {
  if (!Array.isArray(data)) return [];

  return data?.map((item) => {
    let label;

    if (Array.isArray(labelKey)) {
      label = labelKey?.map((k) => item?.[k] ?? '').join(separator);
    } else {
      label = item?.[labelKey] ?? '';
    }

    return {
      label,
      value: item?.[valueKey] ?? '',
    };
  });
}
export function createOptions(
  data,
  {
    labelKey,
    valueKey,
    separator = ' - ',
    udrKey = 'original',
    removeKeyIntoOriginal = [],
    addKeyIntoOriginal = [],
  } = {}
) {
  if (!Array.isArray(data)) return [];

  return data?.map((item) => {
    // ---------- LABEL ----------
    let label = '';
    if (Array.isArray(labelKey)) {
      label = labelKey?.map((k) => item?.[k] ?? '')?.join(separator);
    } else {
      label = item?.[labelKey] ?? '';
    }

    // ---------- ORIGINAL (CLONE FIRST) ----------
    let original = { ...item };

    // ---------- REMOVE KEYS ----------
    if (Array.isArray(removeKeyIntoOriginal) && removeKeyIntoOriginal?.length) {
      removeKeyIntoOriginal?.forEach((key) => {
        delete original[key];
      });
    }

    // ---------- ADD / OVERRIDE KEYS ----------
    if (Array.isArray(addKeyIntoOriginal) && addKeyIntoOriginal?.length) {
      addKeyIntoOriginal?.forEach((key) => {
        original[key] = item?.[key];
      });
    }

    return {
      label,
      value: item?.[valueKey] ?? '',
      [udrKey]: original,
    };
  });
}

export function checkPermissions() {
  return { admin: true };
}
export function getOccurrencesPerYear(schedulePay, workingHours) {
  const daysPerWeek = workingHours?.workingDaysPerWeek || 5; // assuming 5 working days per week
  const weeksPerYear = 52;

  switch (schedulePay) {
    case 1: // Annually
      return 1;
    case 2: // Semi Annually
      return 2;
    case 3: // Quarterly
      return 4;
    case 4: // Bi Monthly (every 2 months)
      return 6;
    case 5: // Monthly
      return 12;
    case 6: // Semi Monthly (twice a month)
      return 24;
    case 7: // Bi Weekly
      return weeksPerYear / 2;
    case 8: // Weekly
      return weeksPerYear;
    case 9: // Daily
      return daysPerWeek * weeksPerYear;
    default:
      return 0;
  }
}

export function getTotalHoursPerYear(workingHours) {
  return workingHours?.hoursPerWeek * 52;
}
export const calculateCosts = ({
  wageType,
  wage,
  schedulePay,
  workingHours,
}) => {
  const occurrences = getOccurrencesPerYear(schedulePay, workingHours);
  const totalHoursPerYear = getTotalHoursPerYear(workingHours);

  let hourlyAmount = 0;
  let yearlyCost = 0;
  let monthlyCost = 0;
  let fixedAmount = 0;

  // ✅ FIXED WAGE
  if (wageType === 1) {
    // wage = amount per schedulePay
    yearlyCost = wage * occurrences;
    monthlyCost = yearlyCost / 12;
    hourlyAmount = yearlyCost / totalHoursPerYear;
    fixedAmount = wage;
  }

  // ✅ HOURLY WAGE
  if (wageType === 2) {
    // wage = hourly rate
    hourlyAmount = wage;
    yearlyCost = hourlyAmount * totalHoursPerYear;
    monthlyCost = yearlyCost / 12;
    fixedAmount = 0;
  }

  return {
    hourlyAmount: Number(hourlyAmount.toFixed(2)),
    fixedAmount: Number(fixedAmount.toFixed(2)),
    yearlyCost: Number(yearlyCost.toFixed(2)),
    monthlyCost: Number(monthlyCost.toFixed(2)),
  };
};

// Payroll start
const getPayrollLabel = (value) =>
  payrollTypes?.find((x) => x?.value == value)?.label;

const getFiscalYearStartingMonthLabel = (value) =>
  fiscalMonths?.find((x) => x?.value == value)?.label;
const getWorkEntrySourceLabel = (value) =>
  WorkEntrySourceOptions?.find((x) => x?.value == value)?.label;
const getBooleanLabel = (value) => (value ? 'Yes' : 'No');
const getPayFrequencyLabel = (value) =>
  ScheduledPayPayrollFrequencies?.find((x) => x?.value == value)?.label;
const getWagesTypeLabel = (value) =>
  wagestype?.find((x) => x?.value == value)?.label;
const getPayCategoryTypeLabel = (value) =>
  payCategoryTypes?.find((x) => x?.value == value)?.label;
const getAmountTypeLabel = (value) =>
  AmountTypeOption?.find((x) => x?.value == value)?.label;
const getLabel = (options, value) =>
  options?.find((x) => x?.value == value)?.label;
const getRouteSplit = (value, id = ':id') => value?.split(id)[0];
const getValueTypeLabel = (value) =>
  ValueTypeOption?.find((x) => x?.value == value)?.label;
const getEmployeeStateLabel = (value) =>
  EmployeeState?.find((x) => x?.value == value)?.label;
export {
  getAmountTypeLabel,
  getBooleanLabel,
  getEmployeeStateLabel,
  getFiscalYearStartingMonthLabel,
  getLabel,
  getPayCategoryTypeLabel,
  getPayFrequencyLabel,
  getPayrollLabel,
  getRouteSplit,
  getValueTypeLabel,
  getWagesTypeLabel,
  getWorkEntrySourceLabel
};

// payroll end
