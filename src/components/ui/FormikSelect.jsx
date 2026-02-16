import { Form, Select } from 'antd';
import { useField, useFormikContext } from 'formik';

const FormikSelect = ({
  name,
  label,
  options,
  placeholder,
  required,
  tooltip,
  layout = 'vertical',
  ...props
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const isError = meta.touched && meta.error;

  const handleChange = (value) => {
    setFieldValue(name, value);
    props?.onChange?.(value);
  };

  return (
    <Form.Item
      label={label}
      validateStatus={isError ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : null}
      className="mb-4"
      layout={layout}
      tooltip={props?.tooltip}
      required={props?.required}
    >
      <Select
        {...props}
        value={field.value || undefined}   // ⭐ IMPORTANT FIX
        onChange={handleChange}
        placeholder={placeholder || 'Select option'}
        options={options}
        status={isError ? 'error' : ''}
        allowClear
      />
    </Form.Item>
  );
};

export default FormikSelect;
