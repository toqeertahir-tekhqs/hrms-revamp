import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle={t('common.not_found', 'Sorry, the page you visited does not exist.')}
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            {t('common.back_home', 'Back Home')}
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
