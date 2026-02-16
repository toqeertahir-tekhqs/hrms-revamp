import { useAuth } from '@/auth/AuthProvider';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

/**
 * 403 Unauthorized Error Page
 * Displayed when a user tries to access a resource without proper permissions
 */
const Unauthorized403 = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Result
        status="403"
        title="403"
        subTitle={
          <div>
            <p className="mb-2 text-base">
              Sorry, you don't have permission to access this page.
            </p>
            {user?.email && (
              <p className="text-sm text-gray-500">
                Logged in as: <strong>{user.email}</strong>
              </p>
            )}
          </div>
        }
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

export default Unauthorized403;
