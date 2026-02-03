
import { ROUTE_PATHS } from '@/routes/routes/index';
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location.pathname]);

  const menuItems = [
    {
      key: ROUTE_PATHS.DASHBOARD,
      icon: <DashboardOutlined />,
      label: t('sidebar.dashboard') || 'Dashboard',
      onClick: () => navigate(ROUTE_PATHS.DASHBOARD),
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      className="flex flex-col h-screen"
      theme="light"
      style={{
        boxShadow: '2px 0 8px 0 rgba(0,0,0,.05)',
        zIndex: 10,
        background: 'var(--bg-container)',
      }}
    >
      <div className="flex justify-center items-center h-16 border-b border-(--border-color)">
        <h1 className={`text-xl font-bold text-(--color-primary) transition-all duration-300 ${collapsed ? 'scale-0' : 'scale-100'}`}>
          HRMS
        </h1>
      </div>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        defaultOpenKeys={['dashboard']}
        items={menuItems}
        style={{ borderRight: 0, flex: 1 }}
        className="border-none"
      />

      {/* Sidebar Toggle Section */}
      <div
        className="p-4 border-t border-(--border-color) flex items-center justify-center cursor-pointer hover:bg-(--hover-bg) transition-all duration-300"
        onClick={() => setCollapsed(!collapsed)}
        style={{ height: '56px' }}
      >

      </div>
    </Sider>
  );
};

export default SideBar;
