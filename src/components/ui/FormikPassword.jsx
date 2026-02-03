import { Form, Input } from 'antd';
import { useField } from 'formik';

const FormikPassword = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  
  return (
    <Form.Item
      label={label}
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : null}
      className="mb-4"
    >
      <Input.Password
        {...field}
        {...props}
        status={meta.touched && meta.error ? 'error' : ''}
        style={{
          background: 'var(--bg-container)',
          color: 'var(--text-color)',
          borderColor: 'var(--border-color)',
          ...props.style
        }}
      />
    </Form.Item>
  );
};

export default FormikPassword;
