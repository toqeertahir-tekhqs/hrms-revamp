import SEO from '@/components/SEO/SEO';
import { CustomSpin } from '@/components/ui';
import { useTheme } from '@/contexts/ThemeContext';
import useDeviceDetect from 'Hooks/useDeviceDetect';
import { ConfigProvider, Layout } from 'antd';
import { AdminHeader, SideBar } from 'components';
import Breadcrumbs from 'components/BreadCrumb';
import BreadCrumbForAccommodation from 'components/BreadCrumb/BreadCrumbForAccommodation';
import BreadCrumbForVehicle from 'components/BreadCrumb/BreadCrumbForVehicle';
import ReleaseNotesModal from 'components/ReleaseNotesModal';
import AccomodationSideBar from 'components/SideBar/AccomodationSideBar';
import PayrollSidebar from 'components/SideBar/PayrollSidebar';
import VehicleSideBar from 'components/SideBar/VehicleSideBar';
import dayjs from 'dayjs';
import getBrowserFingerprint from 'get-browser-fingerprint';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PermissionRoutes from 'routes/PageBuilding/index';
import ProtectedRoute from 'routes/RouteChecking/ProtectedRoute';
import packageJson from '../package.json';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
});

const LAYOUT_CONFIG = {
  payroll: {
    Sidebar: PayrollSidebar,
  },
  accommodation: {
    Sidebar: AccomodationSideBar,
    Breadcrumb: BreadCrumbForAccommodation,
  },
  vehicle: {
    Sidebar: VehicleSideBar,
    Breadcrumb: BreadCrumbForVehicle,
  },
  default: {
    Sidebar: SideBar,
    Breadcrumb: Breadcrumbs,
  },
};

const Footer = () => (
  <div
    className="transition-all duration-300 ease-in-out px-[20px] py-[12px] bg-(--bg-container) flex justify-between items-center gap-3 text-[11px] text-gray-600 max-sm:hidden"
  >
    <div className="text-center sm:text-left">
      Copyright © {dayjs().format('YYYY')}{' '}
      <span className="text-(--color-primary) font-medium" onClick={() => window.open(import.meta.env.VITE_CROOTIVE_URL, '_blank')}>Crootive</span>. All rights
      reserved.
    </div>
    <div className="text-center text-gray-500 sm:text-right">
      {' '}
      v{packageJson.version}
    </div>
  </div>
);

const MainLayout = ({ children, layoutType, loaderFile }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { currentTheme } = useTheme();

  const config = LAYOUT_CONFIG[layoutType] || LAYOUT_CONFIG.default;
  const { Sidebar: SidebarComponent, Breadcrumb: BreadcrumbComponent } = config;

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme.algorithm,
        token: currentTheme.token,
        components: {
          Tabs: {
            itemSelectedColor: currentTheme.token.colorPrimary,
            inkBarColor: currentTheme.token.colorPrimary,
            itemActiveColor: currentTheme.token.colorPrimary,
            itemHoverColor: `${currentTheme.token.colorPrimary}90`,
          },
          ...currentTheme.components,
        },
      }}
    >
      <CustomSpin spinning={!!loaderFile} tip="Loading...">
      <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AdminHeader />
          <div style={{ padding: '0 24px', marginTop: '16px' }}>
            <BreadcrumbComponent />
          </div>

          <Layout.Content
            style={{
              margin: '16px 16px 24px',
              padding: 24,
              background: 'var(--bg-container)',
              borderRadius: '8px',
              overflowY: 'auto',
              flex: 1, 
              minHeight: 0,
              scrollbarWidth: 'thin',
            }}
            >
              {children}
          </Layout.Content>
          <Footer />
        </Layout>
      </Layout>
      </CustomSpin>
    </ConfigProvider>
  );
};

// Mobile Warning Component
const MobileWarning = () => (
  <div className="flex justify-center items-center p-4 h-screen text-center">
    <p className="text-lg font-semibold text-gray-700">
      Please use a desktop or laptop for the best experience.
    </p>
  </div>
);

// Get layout type based on route properties
const getLayoutType = (item) => {
  if (item.isPayrollRoute) return 'payroll';
  if (item.isAccommodation) return 'accommodation';
  if (item.isVehicle) return 'vehicle';
  return 'default';
};

// Route Element Component
const RouteElement = ({ item, sidebarOpenState, loaderFile }) => {
  if (!item.isPrivate) {
    return (
      <ProtectedRoute>{item.page}</ProtectedRoute>
    );
  }

  if (item.isOutFromLayout) {
    return <>{item.page}</>;
  }

  const layoutType = getLayoutType(item);
  return (
    <MainLayout
      layoutType={layoutType}
      sidebarOpenState={sidebarOpenState}
      loaderFile={loaderFile}
    >
      {item.page}
    </MainLayout>
  );
};

function App() {
  const { isMobile } = useDeviceDetect();
  const AllRoutes = PermissionRoutes();
  const { sidebarOpenState } = useSelector((state) => state?.nonPersistedState || {});
  const { loaderFile } = useSelector((state) => state?.nonPersistedState || {});

  useEffect(() => {
    const handle = async () => {
      const fingerprint = await getBrowserFingerprint();
      console.log("fingerprintId", fingerprint);

    }
    handle()
  }, [])


  if (isMobile) {
    return (<>
      <MobileWarning />;
    </>)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SEO />
        {false && <ReleaseNotesModal />}
        <Routes>
          {AllRoutes?.map((item, index) => (
            <Route
              key={index}
              path={item?.path}
              element={
                <RouteElement
                  item={item}
                  sidebarOpenState={sidebarOpenState}
                  loaderFile={loaderFile}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
