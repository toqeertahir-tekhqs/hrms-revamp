import {
    CarOutlined,
    DashboardOutlined,
    FileTextOutlined,
    SettingOutlined,
    ToolOutlined,
    UserOutlined,
} from '@ant-design/icons';
import BaseLayout from './BaseLayout';

/**
 * VehiclesLayout
 * Module-specific layout for Vehicles module
 */
const VehiclesLayout = ({ children }) => {
  const sidebarItems = [
    {
      key: 'vehicles-dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      path: '/vehicles/dashboard',
    },
    {
      key: 'vehicles-fleet',
      icon: <CarOutlined />,
      label: 'Fleet',
      path: '/vehicles/fleet',
    },
    {
      key: 'vehicles-maintenance',
      icon: <ToolOutlined />,
      label: 'Maintenance',
      path: '/vehicles/maintenance',
    },
    {
      key: 'vehicles-assignments',
      icon: <UserOutlined />,
      label: 'Assignments',
      path: '/vehicles/assignments',
    },
    {
      key: 'vehicles-reports',
      icon: <FileTextOutlined />,
      label: 'Reports',
      path: '/vehicles/reports',
    },
    {
      key: 'vehicles-settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      path: '/vehicles/settings',
    },
  ];

  return (
    <BaseLayout sidebarItems={sidebarItems} headerTitle="Vehicles Module">
      {children}
    </BaseLayout>
  );
};

export default VehiclesLayout;
