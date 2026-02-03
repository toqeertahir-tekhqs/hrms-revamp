import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <Result
        status="403"
        title="403"
        subTitle={t('common.unauthorized', 'Sorry, you are not authorized to access this page.')}
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            {t('common.back_home', 'Back Home')}
          </Button>
        }
      />
    </div>
  );
};

export default Unauthorized;
