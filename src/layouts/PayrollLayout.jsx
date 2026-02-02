import {
    DashboardOutlined,
    DollarOutlined,
    FileTextOutlined,
    SettingOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import BaseLayout from './BaseLayout';

/**
 * PayrollLayout
 * Module-specific layout for Payroll module
 */
const PayrollLayout = ({ children }) => {
  const sidebarItems = [
    {
      key: 'payroll-dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      path: '/payroll/dashboard',
    },
    {
      key: 'payroll-employees',
      icon: <TeamOutlined />,
      label: 'Employees',
      path: '/payroll/employees',
    },
    {
      key: 'payroll-salaries',
      icon: <DollarOutlined />,
      label: 'Salaries',
      path: '/payroll/salaries',
    },
    {
      key: 'payroll-reports',
      icon: <FileTextOutlined />,
      label: 'Reports',
      path: '/payroll/reports',
    },
    {
      key: 'payroll-settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      path: '/payroll/settings',
    },
  ];

  return (
    <BaseLayout sidebarItems={sidebarItems} headerTitle="Payroll Module">
      {children}
    </BaseLayout>
  );
};

export default PayrollLayout;
