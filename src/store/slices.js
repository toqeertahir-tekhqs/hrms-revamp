import { createSlice } from '@reduxjs/toolkit';

// Add Initial States
const initialState = {
  resetUser: {},
  userData: {},
  userPermissions: [],
  attendanceFilter: {},
  DDLOptions: {},
  token: null,
  preLoginToken: null,
  tenantDropDownValue: -1,
  tenantAdminCompanySwitch: [],
  toggleCards: false,
};
const initialStateNonPersist = {
  employeeProfileTab: 0,
  adminViewProfileTab: 0,
  selectedFilter: '',
  filterList: [],
  sidebarOpenState: false,
  loaderFile: false,
  dailyAttendance: false,
  activeTabs: {
    approvals: null,
    requests: null,
  },
};
const nonPersistSlice = createSlice({
  name: 'uiState',
  initialState: initialStateNonPersist,
  reducers: {
    setEmployeeProfileTab: (state, action) => {
      state.employeeProfileTab = action.payload;
    },
    setAdminViewProfileTab: (state, action) => {
      state.adminViewProfileTab = action.payload;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    setFilterList: (state, action) => {
      state.filterList = action.payload;
    },
    setSidebarOpenState: (state, action) => {
      state.sidebarOpenState = action.payload;
    },
    setDailyAttendance: (state, action) => {
      state.dailyAttendance = action.payload;
    },
    setActiveTabs: (state, action) => {
      state.activeTabs = action.payload;
    },
    setLoaderFile: (state, action) => {
      state.loaderFile = action.payload;
    },
  },
});
// Added Slice and reducers for get and update the states
export const Slices = createSlice({
  name: 'HRMS',
  initialState: initialState,
  reducers: {
    setResetUser: (state, action) => {
      state.resetUser = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserPermissions: (state, action) => {
      state.userPermissions = action.payload;
    },
    setAttendanceFilter: (state, action) => {
      state.attendanceFilter = action.payload;
    },
    setDDLOptions: (state, action) => {
      state.DDLOptions = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setPreLoginToken: (state, action) => {
      state.preLoginToken = action.payload;
    },
    setTenantAdminCompanySwitch: (state, action) => {
      state.tenantAdminCompanySwitch = action.payload;
    },
    setTenantDropDownValue: (state, action) => {
      state.tenantDropDownValue = action.payload;
    },
    setToggleCards: (state, action) => {
      state.toggleCards = action.payload;
    },
  },
});
export const {
  setEmployeeProfileTab,
  setAdminViewProfileTab,
  setSelectedFilter,
  setFilterList,
  setSidebarOpenState,
  setActiveTabs,
  setLoaderFile,
  setDailyAttendance
} = nonPersistSlice.actions;

export const {
  setResetUser,
  setUserData,
  setUserPermissions,
  setDDLOptions,
  setAttendanceFilter,
  setToken,
  setPreLoginToken,
  setTenantAdminCompanySwitch,
  setTenantDropDownValue,
  setToggleCards,
} = Slices.actions;
export { nonPersistSlice };
export default Slices.reducer;
