import { Form, Select } from 'antd';
import { useField, useFormikContext } from 'formik';

const FormikSelect = ({ name, label, options, placeholder, ...props }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(name, value);
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <Form.Item
      label={label}
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : null}
      className="mb-4"
    >
      <Select
        {...field}
        {...props}
        value={field.value}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        status={meta.touched && meta.error ? 'error' : ''}
        style={{
          width: '100%',
          ...props.style
        }}
      />
    </Form.Item>
  );
};

export default FormikSelect;
