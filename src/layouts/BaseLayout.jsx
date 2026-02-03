import LanguageSwitcher from '@/components/Language/LanguageSwitcher';
import { useTheme } from '@/contexts/ThemeContext';
import {
  AppstoreOutlined,
  DownOutlined,
  LogoutOutlined,
  MoonOutlined,
  SunOutlined
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Switch, theme } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

/**
 * BaseLayout Component
 * Generic reusable layout for all modules
 * Features:
 * - Fixed header with logout and language switcher
 * - Scrollable sidebar (left)
 * - Scrollable content area (center)
 * - Responsive (collapsible sidebar)
 * - Dark mode support
 * 
 * @param {Array} sidebarItems - Menu items for sidebar
 * @param {string} headerTitle - Title to display in header
 * @param {ReactNode} children - Content to render
 */
const BaseLayout = ({ sidebarItems = [], headerTitle = 'HRMS', children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const hasPayrollPermission = true;
  const hasAccommodationsPermission = true;
  const hasVehiclesPermission = true;

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
      icon: <span className="text-lg">🏠`</span>,
    },
    hasPayrollPermission && {
      key: 'payroll',
      label: t('payroll.title', 'Payroll'),
      icon: <span className="text-lg">💰</span>,
    },
    hasAccommodationsPermission && {
      key: 'accommodations',
      label: t('accommodations.title', 'Accommodations'),
      icon: <span className="text-lg">🏠</span>,
    },
    hasVehiclesPermission && {
      key: 'vehicles',
      label: t('vehicles.title', 'Vehicles'),
      icon: <span className="text-lg">🚗</span>,
    },
  ].filter(Boolean);

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        width={250}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: colorBgContainer,
        }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        {/* Logo/Brand */}
        <div className="flex justify-center items-center h-16 border-b">
          <h2 className="m-0 text-xl font-bold">{headerTitle}</h2>
        </div>
        
        {/* Sidebar Menu */}
        {/* <GenericSidebar items={sidebarItems} /> */}
      </Sider>

      {/* Main Layout */}
      <Layout style={{ marginLeft: 250 }}>
        {/* Header */}
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            background: colorBgContainer,
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <div className="flex gap-4 items-center">
            <h1 className="m-0 text-lg font-semibold">{t('common.welcome')}</h1>
          </div>
          
          <div className="flex gap-4 items-center">
            {/* Modules Navigation Dropdown */}
            {moduleMenuItems.length > 0 && (
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

            {/* Dark Mode Toggle */}
            <div className="flex gap-2 items-center">
              <SunOutlined className={!isDarkMode ? 'text-yellow-500' : 'text-gray-400'} />
              <Switch 
                checked={isDarkMode}
                onChange={toggleTheme}
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />}
              />
              <MoonOutlined className={isDarkMode ? 'text-blue-500' : 'text-gray-400'} />
            </div>

            <LanguageSwitcher />
            <Button
              type="text"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
            >
              {t('common.logout')}
            </Button>
          </div>
        </Header>

        {/* Content */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: 'auto',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
