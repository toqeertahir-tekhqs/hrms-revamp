import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.svg?react';
import FormikInput from '@/components/ui/FormikInput';
import useAxiosClient from '@/configuration/useAxiosClient';
import { Button, message } from 'antd';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import BottomBar from './BottomBar';
import RightSection from './RightSection';

const ForgetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { getRequest } = useAxiosClient();

  // Regex for username validation
  const usernameRegex = /^[a-zA-Z0-9._-]+$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .required(t('auth.email_username_required') || 'Email or Username is required')
      .test(
        'is-valid-email-or-username',
        t('auth.email_invalid') || 'Invalid email or username',
        function (value) {
          if (!value) return false;
          const isEmail = value.includes('@');
          if (isEmail) {
            return Yup.string().email().isValidSync(value);
          } else {
            return usernameRegex.test(value);
          }
        }
      ),
  });

  const handleForgetPasswordSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await getRequest(`/api/UserProfile/VerifyEmail/${values?.email}`)
      if (res?.isSuccess) {
        message.success(res?.message || 'Email sent successfully');
      } else {
        message.error(res?.message || 'Email not sent');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error(error?.response?.data?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex w-full h-screen bg-(--color-bg-base)">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative bg-(--color-bg-base) lg:bg-(--color-bg-base)">
        {/* Mobile Background */}
        <img
          alt=""
          src="/src/attachment/auth-section.svg"
          className="block object-cover absolute inset-0 w-full h-full opacity-50 blur-sm lg:hidden"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="z-10 px-8 w-full max-w-md">
          <div className="flex justify-center mb-8">
            <img
              src="/src/attachment/Logo HRMS.svg"
              alt="Tekhqs Logo"
              className="object-contain h-12"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/200x50/3A3949/FFFFFF?text=Tekhqs';
              }}
            />
          </div>

          <div className="p-8 rounded-xl shadow-lg bg-container lg:shadow-none lg:bg-transparent">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-primary-light">
                {t('auth.forget_password_title')}
              </h1>
              <p className="mt-2 text-secondary">
                {t('auth.forget_password_subtitle')}
              </p>
            </div>

            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleForgetPasswordSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="grid gap-4">
                    <FormikInput
                      name="email"
                      required
                      label={t('auth.email_username') || "Email or Username"}
                      placeholder="Enter email or username"
                    />
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    block
                    size="large"
                    className="h-12 text-base font-semibold border-none bg-primary hover:bg-primary-hover"
                    >
                    {t('auth.send_reset_link')}
                  </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="flex justify-start my-6">
              <div
                onClick={() => navigate('/login')}
                className="flex gap-2 items-center text-sm font-medium transition-colors cursor-pointer text-secondary hover:text-secondary-hover"
              >
                <ArrowLeftIcon width={11.6} height={11.6} className='text-secondary hover:text-secondary-hover' />
                {t('auth.back_to_login')}
              </div>
            </div>
          </div>

          <BottomBar />
        </div>
      </div>
      {/* Right Side - Form */}
      <RightSection />
    </div>
  );
};

export default ForgetPassword;
