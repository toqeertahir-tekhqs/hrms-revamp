import { Spin } from 'antd';
import 'antd/dist/reset.css';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppWrapper from './AppWrapper.jsx';
import i18n from './i18n/config';
import './index.css';
import { persistor, store } from './store';

/**
 * Create React Query client
 * Configure default options for queries
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * App Wrapper Component
 * Handles ConfigProvider direction updates based on language
 */


/**
 * Render application with all providers
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spin size="large" />} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Spin size="large" tip="Loading..." />}>
              <AppWrapper />
            </Suspense>
          </I18nextProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
