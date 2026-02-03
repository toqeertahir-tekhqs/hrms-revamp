
import { ROUTE_PATHS } from '@/routes/routes/index';
import {
  CarOutlined,
  DashboardOutlined,
  FileSearchOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const VehicleSideBar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  const menuItems = [
    {
      key: ROUTE_PATHS.VEHICLE_DASHBOARD,
      icon: <DashboardOutlined />,
      label: t('sidebar.dashboard') || 'Dashboard',
      onClick: () => navigate(ROUTE_PATHS.VEHICLE_DASHBOARD),
    },
    {
      key: ROUTE_PATHS.VEHICLE,
      icon: <CarOutlined />,
      label: t('sidebar.vehicles') || 'Vehicles',
      onClick: () => navigate(ROUTE_PATHS.VEHICLE),
    },
     {
      key: 'vehicle-status',
      icon: <FileSearchOutlined />,
      label: t('sidebar.status') || 'Status',
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      className="h-screen overflow-y-auto"
      theme="light"
      style={{
        boxShadow: '2px 0 8px 0 rgba(29,35,41,.05)',
        zIndex: 10,
      }}
    >
      <div className="h-16 flex items-center justify-center border-b border-gray-100">
         <h1 className={`text-xl font-bold text-[#11686d] transition-all duration-300 ${collapsed ? 'scale-0' : 'scale-100'}`}>
          Fleet
        </h1>
      </div>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        items={menuItems}
        style={{ borderRight: 0 }}
        className="border-none"
      />
    </Sider>
  );
};

export default VehicleSideBar;
