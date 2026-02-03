import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
const Login = lazy(() => import('pages/Auth/Login'));
import AccommodationDashboard from '~/pages/Accommodations/Dashboard';
import VehicleDashboard from 'pages/Vehicle/Dashboard';
import PayrollDashboard from 'pages/Payroll/PayrollDashboard';
import PermissionDeniedComponent from 'pages/PermissionDenied/PermissionDeniedComponent';

const LoadingFallback = (
  <div className="flex justify-center items-center h-screen">
    <Spin spinning size="large" />
  </div>
);

const PermissionRoutes = () => {
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

  ];

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
      page: <PayrollDashboard />,
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
