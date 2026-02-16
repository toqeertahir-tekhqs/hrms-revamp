import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

/**
 * 404 Not Found Error Page
 * Displayed when a route doesn't exist
 */
const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <div className="flex gap-3 justify-center">
            <Button type="default" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button type="primary" onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default NotFound404;
