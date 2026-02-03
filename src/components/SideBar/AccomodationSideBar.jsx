
import { ROUTE_PATHS } from '@/routes/routes/index';
import {
  DashboardOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const AccomodationSideBar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  const menuItems = [
    {
      key: ROUTE_PATHS.ACCOMMODATION_DASHBOARD,
      icon: <DashboardOutlined />,
      label: t('sidebar.dashboard') || 'Dashboard',
       onClick: () => navigate(ROUTE_PATHS.ACCOMMODATION_DASHBOARD || '/accommodation-dashboard'),
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      className="overflow-y-auto h-screen"
      theme="light"
      style={{
        boxShadow: '2px 0 8px 0 rgba(0,0,0,.05)',
        zIndex: 10,
        background: 'var(--bg-container)',
      }}
    >
      <div className="flex justify-center items-center h-16 border-b border-[var(--border-color)]">
        <h1 className={`text-xl font-bold text-[var(--color-primary)] transition-all duration-300 ${collapsed ? 'scale-0' : 'scale-100'}`}>
          Accommodation
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

export default AccomodationSideBar;
