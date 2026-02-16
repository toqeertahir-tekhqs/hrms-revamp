import { usePermissionVariables } from '@/Hooks/HasPermission';
import Dashboard from '@/pages/Main/Dashboard/Dashboard';
import PermissionDeniedComponent from 'pages/PermissionDenied/PermissionDeniedComponent';
import VehicleDashboard from 'pages/Vehicle/Dashboard';
import { ROUTE_PATHS } from 'routes/routes';
import AccommodationDashboard from '~/pages/Accommodations/Dashboard';
import ForgotPassword from '~/pages/Auth/ForgetPassword';
import Login from '~/pages/Auth/Login';

const PermissionRoutes = () => {
  const { Accommodation_View, Vehicle_View }= usePermissionVariables()
  const authRoutes = [
    {
      path: ROUTE_PATHS.LOGIN,
      page: (
        <Login />
      ),
      isPrivate: false,
      permission: true,
    },
    {
      path: ROUTE_PATHS.FORGOT_PASSWORD,
      page: (
        <ForgotPassword />
      ),
      isPrivate: false,
      permission: true,
    },
  ];

  const coreRoutes = [
    {
      path: ROUTE_PATHS.DASHBOARD_INDEX,
      page: <Dashboard />,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.DASHBOARD,
      page: <Dashboard />,
      isPrivate: true,
    },

  ];

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

  ];

  const vehicleRoutes = [
    {
      path: ROUTE_PATHS.VEHICLE_DASHBOARD,
      page: Vehicle_View ? <VehicleDashboard /> : <PermissionDeniedComponent />,
      isPrivate: true,
      isVehicle: true,
    },

  ];

  const payrollRoutes = [
    {
      path: ROUTE_PATHS.PAYROLL_DASHBOARD,
      page: <></>,
      isPrivate: true,
      isPayrollRoute: true,
    },
  ]

  const AllRoutes = [
    ...authRoutes,
    ...coreRoutes,
    ...accommodationRoutes,
    ...vehicleRoutes,
    ...payrollRoutes,
  ];

  return AllRoutes;
};

export default PermissionRoutes;
