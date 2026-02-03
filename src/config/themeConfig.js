import { theme } from 'antd';

export const THEMES = {
  light: {
    key: 'light',
    name: 'Light',
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#11686d',
      colorPrimaryHover: '#167e84',
      colorPrimaryActive: '#0d4e51',
      colorBgContainer: '#ffffff',
      colorBgLayout: '#F5F5FA',
      colorText: '#000000',
      colorBorderSecondary: '#f0f0f0',
      colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
      colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
    },
    cssVars: {
      '--color-primary': '#11686d',
      '--color-primary-hover': '#167e84',
      '--color-primary-active': '#0d4e51',
      '--bg-layout': '#F5F5FA',
      '--bg-container': '#ffffff',
      '--text-color': '#000000',
      '--border-color': '#f0f0f0',
      '--hover-bg': 'rgba(0, 0, 0, 0.04)',
      '--active-bg': 'rgba(0, 0, 0, 0.08)',
    }
  },
  dark: {
    key: 'dark',
    name: 'Dark',
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#11686d',
      colorPrimaryHover: '#167e84',
      colorPrimaryActive: '#0d4e51',
      colorBgContainer: '#141414',
      colorBgLayout: '#000000',
      colorText: '#ffffff',
      colorBorderSecondary: '#303030',
      colorBgTextHover: 'rgba(255, 255, 255, 0.08)',
      colorBgTextActive: 'rgba(255, 255, 255, 0.12)',
    },
    cssVars: {
      '--color-primary': '#11686d',
      '--color-primary-hover': '#167e84',
      '--color-primary-active': '#0d4e51',
      '--bg-layout': '#000000',
      '--bg-container': '#141414',
      '--text-color': '#ffffff',
      '--border-color': '#303030',
      '--hover-bg': 'rgba(255, 255, 255, 0.08)',
      '--active-bg': 'rgba(255, 255, 255, 0.12)',
    }
  },
  barbie: {
    key: 'barbie',
    name: 'Barbie World',
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#E91E63', // Hot Pink
      colorPrimaryHover: '#ff4081',
      colorPrimaryActive: '#c2185b',
      colorBgLayout: '#FFF0F5', // Lavender Blush
      colorBgContainer: '#FFFFFF',
      colorText: '#880e4f', // Dark Pink Text
      colorBorderSecondary: '#fce4ec',
      colorBgTextHover: '#fce4ec',
      colorBgTextActive: '#f8bbd0',
      borderRadius: 16,
      wireframe: false,
    },
    cssVars: {
      '--color-primary': '#E91E63',
      '--color-primary-hover': '#ff4081',
      '--color-primary-active': '#c2185b',
      '--bg-layout': '#FFF0F5',
      '--bg-container': '#FFFFFF',
      '--text-color': '#880e4f',
      '--border-color': '#fce4ec',
      '--hover-bg': '#fce4ec',
      '--active-bg': '#f8bbd0',
    }
  },
  corporate: {
    key: 'corporate',
    name: 'Corporate Blue',
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#1890ff',
      colorPrimaryHover: '#40a9ff',
      colorPrimaryActive: '#096dd9',
      colorBgLayout: '#f0f2f5',
      colorBgContainer: '#ffffff',
      colorText: '#000000',
      colorBorderSecondary: '#d9d9d9',
      colorBgTextHover: 'rgba(0, 0, 0, 0.04)',
      colorBgTextActive: 'rgba(0, 0, 0, 0.08)',
      borderRadius: 4,
    },
    cssVars: {
      '--color-primary': '#1890ff',
      '--color-primary-hover': '#40a9ff',
      '--color-primary-active': '#096dd9',
      '--bg-layout': '#f0f2f5',
      '--bg-container': '#ffffff',
      '--text-color': '#000000',
      '--border-color': '#d9d9d9',
      '--hover-bg': 'rgba(0, 0, 0, 0.04)',
      '--active-bg': 'rgba(0, 0, 0, 0.08)',
    }
  }
};

export const DEFAULT_THEME_KEY = 'light';
