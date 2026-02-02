import { Input } from 'antd';
import { Field } from 'formik';

/**
 * FormikPassword Component
 * Wrapper for Ant Design Input.Password with Formik integration
 * Automatically displays validation errors
 * 
 * @param {string} name - Formik field name
 * @param {string} label - Optional label
 * @param {string} placeholder - Input placeholder
 * @param {object} ...props - Additional Input.Password props
 */
const FormikPassword = ({ name, label, ...props }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div className="mb-4">
          {label && (
            <label htmlFor={name} className="block mb-2 font-medium">
              {label}
            </label>
          )}
          <Input.Password
            {...field}
            {...props}
            id={name}
            status={meta.touched && meta.error ? 'error' : ''}
          />
          {meta.touched && meta.error && (
            <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default FormikPassword;
