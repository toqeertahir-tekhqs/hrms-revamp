import useDeviceDetect from 'Hooks/useDeviceDetect';
import { ConfigProvider, Spin } from 'antd';
import { AdminHeader, SideBar } from 'components';
import Breadcrumbs from 'components/BreadCrumb';
import BreadCrumbForAccommodation from 'components/BreadCrumb/BreadCrumbForAccommodation';
import BreadCrumbForPayroll from 'components/BreadCrumb/BreadCrumbForPayroll';
import BreadCrumbForVehicle from 'components/BreadCrumb/BreadCrumbForVehicle';
import PayrollSidebar from 'components/PayrollSidebar/PayrollSidebar';
import ReleaseNotesModal from 'components/ReleaseNotesModal';
import AccomodationSideBar from 'components/SideBar/AccomodationSideBar';
import VehicleSideBar from 'components/SideBar/VehicleSideBar';
import dayjs from 'dayjs';
import getBrowserFingerprint from 'get-browser-fingerprint';
import { useEffect } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import ProtectedRoute from 'routes/ProtectedRoute';
import packageJson from '../package.json';
import './App.css';
import PermissionRoutes from './routes/routes/index';
// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});
// 3cef45fb374b228cf08624ab2b75ea9b
// 3cef45fb374b228cf08624ab2b75ea9b
// 3cef45fb374b228cf08624ab2b75ea9b
// 3036caee48090a556c31ea1ad11213c5
// 0b606def820b2b7d415f166f1eb85f20
// 

// Layout configuration based on route type
const LAYOUT_CONFIG = {
  payroll: {
    Sidebar: PayrollSidebar,
    Breadcrumb: BreadCrumbForPayroll,
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

// Footer Component
const Footer = ({ sidebarOpenState }) => (
  <div
    className={`${sidebarOpenState ? 'ml-[270px] pr-[20px]' : 'ml-[100px] pr-[20px]'
      } bg-[#F5F5FA] transition-all duration-300 ease-in-out 
    flex justify-between items-center gap-3 text-[11px] text-gray-600 max-sm:hidden`}
  >
    <div className="text-center sm:text-left">
      Copyright © {dayjs().format('YYYY')}{' '}
      <span className="text-[#11686d] font-medium">Crootive</span>. All rights
      reserved.
    </div>
    <div className="text-center text-gray-500 sm:text-right">
      {' '}
      v{packageJson.version}
    </div>
  </div>
);

// Main Layout Component
const MainLayout = ({ children, layoutType, sidebarOpenState, loaderFile }) => {
  const config = LAYOUT_CONFIG[layoutType] || LAYOUT_CONFIG.default;
  const { Sidebar: SidebarComponent, Breadcrumb: BreadcrumbComponent } = config;

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: '#11686d',
            inkBarColor: '#11686d',
            itemActiveColor: '#11686d',
            itemHoverColor: '#11686d90',
          },
          Cascader: {
            // itemHoverColor: '#11686d',
            // itemActiveColor: '#11686d',
            // optionSelectedColor: '#11686d',
            // optionSelectedBg: 'grey',
          },

        },
      }}
    >
      <Spin
        spinning={loaderFile}
        tip="Loading..."
        style={{
          maxHeight: 200,
        }}
      >
        <div className="bg-[#F5F5FA] flex">
          <ProSidebarProvider>
            <SidebarComponent />
          </ProSidebarProvider>
          <div className="w-full bg-[#F5F5FA]">
            <div className="w-full h-[100px]">
              <AdminHeader />
            </div>
            <div
              className={`p-[10px] transition-all duration-300 ease-in-out ${sidebarOpenState
                ? 'ml-[250px] px-[20px]'
                : 'ml-[80px] lg:pl-[110px] lg:pr-[30px] lg:ml-0'
                } bg-[#F5F5FA] relative sm:h-[calc(100vh-117px)] h-[calc(100vh-100px)] overflow-y-auto`}
            >
              <div>
                <BreadcrumbComponent />
              </div>
              <PrivateRoute>{children}</PrivateRoute>
            </div>
            <Footer sidebarOpenState={sidebarOpenState} />
          </div>
        </div>
      </Spin>
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
    return <>
      <ProtectedRoute>{item.page}</ProtectedRoute>
    </>
  }

  if (item.isOutFromLayout) {
    return <>{item.page}</>;
  }

  const layoutType = getLayoutType(item);
  return (
    <>
      <MainLayout
        layoutType={layoutType}
        sidebarOpenState={sidebarOpenState}
        loaderFile={loaderFile}
      >
        {item.page}
      </MainLayout>
    </>
  );
};

function App() {
  const { isMobile } = useDeviceDetect();
  const AllRoutes = PermissionRoutes();
  const { sidebarOpenState } = useSelector((state) => state?.nonPersistedState);
  const { loaderFile } = useSelector((state) => state?.nonPersistedState);

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
