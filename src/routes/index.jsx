import AccommodationsLayout from '@/layouts/AccommodationsLayout';
import PayrollLayout from '@/layouts/PayrollLayout';
import VehiclesLayout from '@/layouts/VehiclesLayout';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Unauthorized from '@/pages/Unauthorized';
import AccommodationsDashboard from '@/pages/accommodations/AccommodationsDashboard';
import PayrollDashboard from '@/pages/payroll/PayrollDashboard';
import VehiclesDashboard from '@/pages/vehicles/VehiclesDashboard';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PermissionGuard from './PermissionGuard';
import ProtectedRoute from './ProtectedRoute';

/**
 * AppRouter Component
 * Main routing configuration
 * Defines all application routes with protection where needed
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/403" element={<Unauthorized />} />
        <Route path="/404" element={<NotFound />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        
        {/* Module-specific routes */}
        
        {/* Payroll Routes */}
        <Route
          path="/payroll/*"
          element={
            <ProtectedRoute>
              <PermissionGuard permission="module.payroll">
                <PayrollLayout>
                  <Routes>
                    <Route path="dashboard" element={<PayrollDashboard />} />
                    <Route path="*" element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </PayrollLayout>
              </PermissionGuard>
            </ProtectedRoute>
          }
        />

        {/* Accommodations Routes */}
        <Route
          path="/accommodations/*"
          element={
            <ProtectedRoute>
              <PermissionGuard permission="module.accommodations">
                <AccommodationsLayout>
                  <Routes>
                    <Route path="dashboard" element={<AccommodationsDashboard />} />
                    <Route path="*" element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </AccommodationsLayout>
              </PermissionGuard>
            </ProtectedRoute>
          }
        />

        {/* Vehicles Routes */}
        <Route
          path="/vehicles/*"
          element={
            <ProtectedRoute>
              <PermissionGuard permission="module.vehicles">
                <VehiclesLayout>
                  <Routes>
                    <Route path="dashboard" element={<VehiclesDashboard />} />
                    <Route path="*" element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </VehiclesLayout>
              </PermissionGuard>
            </ProtectedRoute>
          }
        />
       
        
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* 404 - Not Found */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
