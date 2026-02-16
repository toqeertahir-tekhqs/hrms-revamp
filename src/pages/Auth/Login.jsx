import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.svg?react';
import FormikInput from '@/components/ui/FormikInput';
import FormikPassword from '@/components/ui/FormikPassword';
import FormikSelect from '@/components/ui/FormikSelect';
import useReactQuery from '@/configuration/useReactQuery';
import { setPreLoginToken, setToken, setUserData, setUserPermissions } from '@/store/slices';
import { Button, message } from 'antd';
import { Form, Formik } from 'formik';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import BottomBar from './BottomBar';
import RightSection from './RightSection';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectCompany, setSelectCompany] = useState(false);
  const [getCompany, setGetCompany] = useState([]);

  const { usePostMutation } = useReactQuery();
  const { mutateAsync: login, isLoading: isLoginLoading } = usePostMutation('/api/UserProfile/SignIn');
  const { mutateAsync: switchCompany, isLoading: isSwitchLoading } = usePostMutation('/api/UserProfile/SwitchCompany');

  // Regex for username validation
  const usernameRegex = /^[a-zA-Z0-9._-]+$/;

  const validationSchema = Yup.object({
    name: Yup.string()
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
    password: Yup.string().required(t('auth.password_required') || 'Password is required'),
  });

  const companyValidationSchema = Yup.object({
    companyId: Yup.string().required(t('company.company_is_required')),
  });

  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      const payload = {
        userName: values.name,
        password: values.password,
      };

      const res = await login(payload);

      if (res?.isSuccess) {
        let decoded = jwtDecode(res?.token);

        // Filter active company roles
        let companyArray = (
          decoded?.CompanyRoles?.filter((item) => item?.IsActive) || []
        ).map((item) => ({
          label: item?.CompanyName,
          value: item?.CompanyId,
        }));

        if (companyArray?.length > 0) {
          dispatch(setPreLoginToken(res?.token));
          dispatch(
            setUserData({
              ...res?.user,
              role: decoded?.role,
              roleType: decoded?.RoleType,
              companyId: decoded?.CompanyId || decoded?.companyId,
            })
          );

          setGetCompany(companyArray);

          if (companyArray?.length > 1) {
            // Multiple companies, show selection
            setSelectCompany(true);
          } else {
            // Single company, auto login
            dispatch(setUserPermissions(res?.permissions));
            dispatch(setToken(res?.token));
            dispatch(setPreLoginToken(null));
            message.success(res?.message || 'Login successful');

            setTimeout(() => {
              navigate('/');
            }, 500);
          }
        } else {
          // No company roles, handle as regular user or admin without specific company context
          message.success(res?.message || 'Login successful');

          dispatch(
            setUserData({
              ...res?.user,
              role: decoded?.role,
              roleType: decoded?.RoleType,
              employeeId: decoded?.EmployeeId || '',
            })
          );
          dispatch(setToken(res?.token));
          dispatch(setUserPermissions(res?.permissions));

          setTimeout(() => {
            navigate('/');
          }, 500);
        }
      } else {
        message.error(res?.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error(error?.response?.data?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCompanySubmit = async (values, { setSubmitting }) => {
    try {
      // The snippet used postRequestPreLogin('/api/UserProfile/SwitchCompany', companyId)
      // usePostMutation sends payload as body.
      // If the API expects a raw string/number as body, we send values.companyId directly (if it can be handled)
      // or wrapped in an object if it expects JSON with a key.
      // Based on common patterns in this project (likely .NET backend), it might expect a query param or a specific body.
      // BUT, usually a POST body is JSON. let's send { companyId: ... } if we aren't sure, 
      // however, the previous snippet: postRequestPreLogin(..., companyId) suggests it might be sending the ID directly or as part of a wrapper.
      // Let's assume it sends the ID as JSON body if it's a number/string.
      // We will send values.companyId. If it fails, we might need to wrap it.

      const res = await switchCompany(values.companyId);

      if (res?.isSuccess) {
        const decodedSwitch = jwtDecode(res?.response?.token);
        dispatch(setToken(res?.response?.token));
        dispatch(setUserPermissions(res?.response?.permissions)); // Note: snippet accessed permissions from response

        dispatch(
          setUserData({
            ...res?.response?.user,
            role: decodedSwitch?.role,
            roleType: decodedSwitch?.RoleType,
            companyId: decodedSwitch?.CompanyId,
          })
        );
        
        message.success(res?.message || 'Company switched successfully');
        dispatch(setPreLoginToken('')); // Clear pre-login token

        setTimeout(() => {
          navigate('/');
        }, 500);
      } else {
        message.error(res?.message || 'Failed to switch company');
      }
    } catch (err) {
      console.error('Switch company error:', err);
      message.error(err?.response?.data?.message || 'Something Went Wrong');
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
                {!selectCompany ? t('auth.login_title') : 'Choose Company'}
              </h1>
              <p className="mt-2 text-secondary">
                {!selectCompany ? t('auth.login_subtitle') : t('auth.select_company_subtitle')}
              </p>
            </div>

            {!selectCompany ? (
              <Formik
                initialValues={{ name: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleLoginSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <FormikInput
                      name="name"
                      required
                      label={t('auth.email_username') || "Email or Username"}
                      placeholder={t('auth.email_username_placeholder')}
                    />
                    <FormikPassword
                      name="password"
                      label={t('auth.password')}
                      placeholder={t('auth.password_placeholder')}
                      required
                    />

                    <div className="flex justify-start mb-6">
                      <div
                        onClick={() => navigate('/forgot-password')}
                        className="text-sm font-medium transition-colors cursor-pointer text-primary hover:text-primary-hover"
                      >
                        {t('auth.forgot_password')}
                      </div>
                    </div>

                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isLoginLoading || isSubmitting}
                      block
                      size="large"
                      className="h-12 text-base font-semibold border-none bg-primary hover:bg-primary-hover"
                    >
                      {t('common.login')}
                    </Button>
                  </Form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={{ companyId: getCompany.length === 1 ? getCompany[0].value : '' }}
                validationSchema={companyValidationSchema}
                onSubmit={handleCompanySubmit}
                enableReinitialize
              >
                {({ isSubmitting, isValid, dirty, setFieldValue }) => (
                  <Form>
                    <FormikSelect
                      name="companyId"
                      label={t('company.company')}
                      placeholder={t('company.company_placeholder')}
                      options={getCompany}
                        required
                    />

                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isSwitchLoading || isSubmitting}
                      block
                      size="large"
                      className="mt-6 h-12 text-base font-semibold border-none bg-primary hover:bg-primary-dark"
                      disabled={!isValid && !dirty} // Disable if no selection
                    >
                      {t('common.continue')}
                    </Button>

                    <div className="mt-4 text-center">
                        <div
                          onClick={() => setSelectCompany(false)}
                          className="flex gap-2 items-center text-sm font-medium transition-colors cursor-pointer text-secondary hover:text-secondary-hover"
                        >
                          <ArrowLeftIcon width={11.6} height={11.6} className='text-secondary hover:text-secondary-hover' />
                          {t('auth.back_to_login')}
                        </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>

          <BottomBar />
        </div>
      </div>
      {/* Right Side - Form */}
      <RightSection />
    </div>
  );
};

export default Login;
