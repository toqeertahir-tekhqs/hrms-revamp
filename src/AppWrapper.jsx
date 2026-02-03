import { ConfigProvider, theme as antdTheme } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import App from "./App";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { getDirection } from "./utils/Config/rtlConfig";

const AppContent = () => {
    const { i18n: i18nInstance } = useTranslation();
    const { isDarkMode } = useTheme();
    const direction = getDirection(i18nInstance.language);

    useEffect(() => {
        document.documentElement.dir = direction;
    }, [direction]);

    return (
        <ConfigProvider 
            direction={direction}
            theme={{
                algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
            }}
        >
            <App />
        </ConfigProvider>
    );
};

const AppWrapper = () => {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
};

export default AppWrapper;