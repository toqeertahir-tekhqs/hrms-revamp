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
    components: {
      Table: {
        headerBg: '#fafafa',
        headerColor: 'rgba(0, 0, 0, 0.85)',
        rowHoverBg: '#fafafa',
      },
      Menu: {
        itemBg: 'transparent',
        itemColor: 'rgba(0, 0, 0, 0.85)',
        itemSelectedBg: '#e6f4f4',
        itemSelectedColor: '#11686d',
      },
      Input: {
        colorBgContainer: '#ffffff',
        colorBorder: '#d9d9d9',
      },
      Button: {
        colorPrimary: '#11686d',
      }
    },
    cssVars: {
      '--color-primary': '#11686d',
      '--color-primary-hover': '#167e84',
      '--color-primary-active': '#0d4e51',
      '--color-spin': '#11686d',
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
    components: {
      Table: {
        headerBg: '#1d1d1d',
        headerColor: 'rgba(255, 255, 255, 0.85)',
        rowHoverBg: '#1d1d1d',
      },
      Menu: {
        itemBg: 'transparent',
        itemColor: 'rgba(255, 255, 255, 0.85)',
        itemSelectedBg: '#11686d',
        itemSelectedColor: '#ffffff',
      },
      Input: {
        colorBgContainer: '#141414',
        colorBorder: '#424242',
      }
    },
    cssVars: {
      '--color-primary': '#11686d',
      '--color-primary-hover': '#167e84',
      '--color-primary-active': '#0d4e51',
      '--color-spin': '#11686d',
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
    components: {
      Table: {
        headerBg: '#fce4ec',
        headerColor: '#880e4f',
        rowHoverBg: '#fce4ec',
      },
      Menu: {
        itemBg: 'transparent',
        itemColor: '#880e4f',
        itemSelectedBg: '#f8bbd0',
        itemSelectedColor: '#c2185b',
      },
      Input: {
        colorBgContainer: '#ffffff',
        colorBorder: '#f8bbd0',
      },
      Card: {
        colorBgContainer: '#ffffff',
        colorBorder: '#fce4ec',
      }
    },
    cssVars: {
      '--color-primary': '#E91E63',
      '--color-primary-hover': '#ff4081',
      '--color-primary-active': '#c2185b',
      '--color-spin': '#E91E63',
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
    components: {
      Table: {
        headerBg: '#fafafa',
        headerColor: 'rgba(0, 0, 0, 0.85)',
        rowHoverBg: '#f5f5f5',
      },
      Menu: {
        itemBg: 'transparent',
        itemSelectedBg: '#e6f7ff',
        itemSelectedColor: '#1890ff',
      },
      Input: {
        colorBgContainer: '#ffffff',
        colorBorder: '#d9d9d9',
      }
    },
    cssVars: {
      '--color-primary': '#1890ff',
      '--color-primary-hover': '#40a9ff',
      '--color-primary-active': '#096dd9',
      '--color-spin': '#1890ff',
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
