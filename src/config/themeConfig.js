import { theme } from 'antd';

export const THEMES = {
  light: {
    key: 'light',
    name: 'Light',
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#11686d',
      colorBgContainer: '#ffffff',
      colorBgLayout: '#F5F5FA',
      colorText: '#000000',
    },
    cssVars: {
      '--color-primary': '#11686d',
      '--bg-layout': '#F5F5FA',
      '--bg-container': '#ffffff',
       '--text-color': '#000000',
    }
  },
  dark: {
    key: 'dark',
    name: 'Dark',
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#11686d',
      colorBgContainer: '#141414',
      colorBgLayout: '#000000',
       colorText: '#ffffff',
    },
     cssVars: {
      '--color-primary': '#11686d',
      '--bg-layout': '#000000',
      '--bg-container': '#141414',
       '--text-color': '#ffffff',
    }
  },
  barbie: {
    key: 'barbie',
    name: 'Barbie World',
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#E91E63', // Hot Pink
      colorBgLayout: '#FFF0F5', // Lavender Blush
      colorBgContainer: '#FFC0CB', // Pink
      colorText: '#880e4f', // Dark Pink Text
      borderRadius: 16,
      wireframe: false,
    },
     cssVars: {
      '--color-primary': '#E91E63',
      '--bg-layout': '#FFF0F5',
      '--bg-container': '#FFFFFF',
       '--text-color': '#880e4f',
    }
  },
  corporate: {
      key: 'corporate',
      name: 'Corporate Blue',
      algorithm: theme.defaultAlgorithm,
      token: {
        colorPrimary: '#1890ff',
        colorBgLayout: '#f0f2f5',
        colorBgContainer: '#ffffff',
        borderRadius: 4,
      },
      cssVars: {
        '--color-primary': '#1890ff',
        '--bg-layout': '#f0f2f5',
         '--bg-container': '#ffffff',
         '--text-color': '#000000',
      }
    }
};

export const DEFAULT_THEME_KEY = 'light';
