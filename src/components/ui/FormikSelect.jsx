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
      label={label ? <div className='field-label'>{label}</div> : null}
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : null}
      className="mb-4"
      layout='vertical'
      tooltip={props?.tooltip}
      required={props?.required}

    >
      <Select
        {...field}
        {...props}
        value={field.value}
        onChange={props?.onChange ? props?.onChange : handleChange}
        placeholder="Select a option and change input text above"

        options={options}
        status={meta.touched && meta.error ? 'error' : ''}
        style={{
          background: 'var(--bg-base)',
          color: 'var(--color-text-fields) !important',
          borderColor: 'var(--border-color)',
          borderRadius: 'var(--radius-md)',
          ...props.style
        }}
      />
    </Form.Item>
  );
};

export default FormikSelect;
