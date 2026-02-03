import { Input } from 'antd';

const CustomInput = ({ ...props }) => {
  return (
    <Input 
      {...props} 
      className={`custom-input ${props.className || ''}`}
      style={{
        background: 'var(--bg-container)',
        color: 'var(--text-color)',
        borderColor: 'var(--border-color)',
        ...props.style
      }}
    />
  );
};

export default CustomInput;
