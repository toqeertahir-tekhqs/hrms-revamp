
import { Spin } from 'antd';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('pages/Auth/Login'));

import Dashboard from '@/pages/Main/Dashboard/Dashboard';
import PayrollDashboard from 'pages/payroll/PayrollDashboard';
import { ROUTE_PATHS } from 'routes/routes/index';
const LoadingFallback = (
  <div className="flex justify-center items-center h-screen">
    <Spin spinning size="default" />
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
      page: <><Dashboard /></>,
      isPrivate: true,
    },
    {
      path: ROUTE_PATHS.DASHBOARD,
      page: <><Dashboard /></>,
      isPrivate: true,
    },
  ];
  const payrollRoutes = [
    {
      path: ROUTE_PATHS.PAYROLL_DASHBOARD,
      page: <PayrollDashboard />,
      isPrivate: true,
      isPayrollRoute: true,
    },
  ];
  const settingsRoutes = [];

  const otherRoutes = [];

  const AllRoutes = [
    ...authRoutes,
    ...coreRoutes,
    ...payrollRoutes,
    ...settingsRoutes,
    ...otherRoutes,
  ];

  return AllRoutes;
};

export default PermissionRoutes;
