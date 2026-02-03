
import LanguageSwitcher from '@/components/Language/LanguageSwitcher';
import { useTheme } from '@/contexts/ThemeContext';
import {
  AppstoreOutlined,
  DownOutlined, LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Space, theme } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;

import { THEMES } from '@/themeConfig';

const AdminHeader = ({ collapsed, setCollapsed }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { changeTheme, currentThemeKey } = useTheme();
  
  const {
      token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleModuleClick = ({ key }) => {
    console.log('Module clicked:', key);
    switch (key) {
      case 'dashboard':
        navigate('/dashboard');
        break;
      case 'payroll':
        navigate('/payroll/dashboard');
        break;
      case 'accommodations':
        navigate('/accommodations/dashboard');
        break;
      case 'vehicles':
        navigate('/vehicles/dashboard');
        break;
      default:
        break;
    }
  };

  const moduleMenuItems = [
    {
      key: 'dashboard',
      label: t('dashboard.title', 'Dashboard'),
      icon: <span className="text-lg">🏠</span>,
    },
    {
      key: 'payroll',
      label: t('payroll.title', 'Payroll'),
      icon: <span className="text-lg">💰</span>,
    },
    {
      key: 'accommodations',
      label: t('accommodations.title', 'Accommodations'),
      icon: <span className="text-lg">🏠</span>,
    },
    {
      key: 'vehicles',
      label: t('vehicles.title', 'Vehicles'),
      icon: <span className="text-lg">🚗</span>,
    },
  ].filter(Boolean);

  const userMenu = [
    {
      key: 'profile',
      label: t('header.profile') || 'Profile',
      icon: <UserOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: t('header.logout') || 'Logout',
      icon: <LogoutOutlined />,
      danger: true,
      onClick: handleLogout,
    },
  ];

  return (
    <Header
      style={{
        padding: '0 24px',
        background: 'var(--bg-container)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        zIndex: 1,
      }}
    >
      <div className="flex gap-4 items-center">
      </div>

      <div className="flex gap-6 items-center">
        {moduleMenuItems?.length > 0 && (
          <Dropdown
            menu={{
              items: moduleMenuItems,
              onClick: handleModuleClick,
            }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Button
              type="text"
              className="flex gap-2 items-center"
            >
              <AppstoreOutlined />
              <span>Modules</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        )}

        {/* Theme Selector Dropdown */}
        <Dropdown
          menu={{
            items: Object.values(THEMES).map(theme => ({
              key: theme.key,
              label: theme.name,
              onClick: () => changeTheme(theme.key)
            })),
            selectable: true,
            selectedKeys: [currentThemeKey]
          }}
          trigger={['click']}
        >
          <Button type="text" icon={<span style={{ fontSize: '18px' }}>🎨</span>}>
            {THEMES[currentThemeKey]?.name || 'Theme'}
          </Button>
        </Dropdown>

        <LanguageSwitcher />
        
        <Dropdown menu={{ items: userMenu }} placement="bottomRight" arrow>
          <Space className="p-2 h-14 rounded-lg transition-all duration-300 cursor-pointer hover:bg-(--hover-bg)">
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: 'var(--color-primary)' }} />
            <div className="hidden md:block">
              <div className="text-sm font-medium leading-none">Admin User</div>
              <div className="mt-1 text-xs text-gray-500">Administrator</div>
            </div>
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
};

export { AdminHeader };
