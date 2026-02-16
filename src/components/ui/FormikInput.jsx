import { Form, Input } from 'antd';
import { useField } from 'formik';

const FormikInput = ({ name, label, required, ...props }) => {
  const [field, meta] = useField(name);

  const isError = meta.touched && meta.error;

  return (
    <Form.Item
      layout='vertical'
      label={label ? <div className='field-label'>{label}</div> : null}
      validateStatus={isError ? 'error' : ''}
      help={isError ? meta.error : null}
      className="mb-4"
      tooltip={props?.tooltip}
      required={required}
    >
      <Input
        {...field}
        {...props}
        status={isError ? 'error' : ''}
        style={{
          background: 'var(--bg-base)',
          color: 'var(--color-text-fields) !important',
          borderColor: 'var(--border-color)',
          ...props.style
        }}
      />
    </Form.Item>
  );
};

export default FormikInput;
