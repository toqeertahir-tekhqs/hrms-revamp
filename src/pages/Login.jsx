import LanguageSwitcher from '@/components/LanguageSwitcher';
import FormikInput from '@/components/ui/FormikInput';
import FormikPassword from '@/components/ui/FormikPassword';
import { mockPermissions } from '@/data/mockPermissions';
import { login as loginAction } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/store';
import { error as showError, success } from '@/utils/notification';
import { mapPermissions } from '@/utils/permissionMapping';
import { Button, Card } from 'antd';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

/**
 * Login Page
 * Features:
 * - Formik form with validation
 * - Ant Design components
 * - Redux integration
 * - i18n support
 */
const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  // Validation schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('auth.email_invalid'))
      .required(t('auth.email_required')),
    password: Yup.string()
      .min(6, t('auth.password_min'))
      .required(t('auth.password_required')),
  });

  // Initial form values
  const initialValues = {
    email: '',
    password: '',
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    setLoading(true);
    
    try {
      // TODO: Replace with actual API call
      // Example: const response = await post('/auth/login', values);
      
      // Mock login request
      setTimeout(() => {
        const mockUser = {
          id: 1,
          name: 'John Doe',
          email: values.email,
        };
        const mockToken = 'mock-jwt-token';
        
        // Map permissions from detailed JSON to simple strings
        const mappedPermissions = mapPermissions(mockPermissions);
        
        console.log('Login: Mapped Permissions:', mappedPermissions);

        dispatch(loginAction({ user: mockUser, token: mockToken, permissions: mappedPermissions }));
        
        success(t('auth.login_success'));
        navigate('/dashboard');
        setLoading(false);
      }, 1000);
      
    } catch {
      setLoading(false);
      showError(t('auth.login_error'));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen from-blue-50 to-indigo-100 bg-linear-to-br">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      
      <Card className="w-full max-w-md shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            {t('auth.login_title')}
          </h1>
          <p className="text-gray-500">{t('auth.login_subtitle')}</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <FormikInput
                name="email"
                label={t('common.email')}
                placeholder="user@example.com"
                size="large"
              />

              <FormikPassword
                name="password"
                label={t('common.password')}
                placeholder="••••••••"
                size="large"
              />

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                block
                className="mt-4"
              >
                {t('common.login')}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default Login;
