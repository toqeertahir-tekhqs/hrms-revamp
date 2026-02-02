import {
    CalendarOutlined,
    DashboardOutlined,
    HomeOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import BaseLayout from './BaseLayout';

/**
 * AccommodationsLayout
 * Module-specific layout for Accommodations module
 */
const AccommodationsLayout = ({ children }) => {
  const sidebarItems = [
    {
      key: 'accom-dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      path: '/accommodations/dashboard',
    },
    {
      key: 'accom-properties',
      icon: <HomeOutlined />,
      label: 'Properties',
      path: '/accommodations/properties',
    },
    {
      key: 'accom-bookings',
      icon: <CalendarOutlined />,
      label: 'Bookings',
      path: '/accommodations/bookings',
    },
    {
      key: 'accom-tenants',
      icon: <UserOutlined />,
      label: 'Tenants',
      path: '/accommodations/tenants',
    },
    {
      key: 'accom-settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      path: '/accommodations/settings',
    },
  ];

  return (
    <BaseLayout sidebarItems={sidebarItems} headerTitle="Accommodations Module">
      {children}
    </BaseLayout>
  );
};

export default AccommodationsLayout;
