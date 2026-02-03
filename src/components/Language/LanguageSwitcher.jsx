
import { updateDirection } from '@/utils/Config/rtlConfig';
import { GlobalOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const languages = [
        { value: 'en', label: t('language.english'), flag: '🇵🇰' },
        { value: 'ar', label: t('language.arabic'), flag: '🇸🇦' },
    ];

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        updateDirection(lang);
    };

    return (
        <Select
            value={i18n.language}
            onChange={handleLanguageChange}
            style={{ width: 150 }}
            suffixIcon={<GlobalOutlined />}
            options={languages?.map(lang => ({
                value: lang.value,
                label: (
                    <span>
                        <span style={{ marginRight: 8 }}>{lang.flag}</span>
                        {lang.label}
                    </span>
                ),
            }))}
        />
    );
};

export default LanguageSwitcher;