import { Button } from 'antd';

const CustomButton = ({ type = 'default', className = '', ...props }) => {
  const isPrimary = type === 'primary' || props.htmlType === 'submit';
  
  return (
    <Button 
      type={type}
      className={`custom-button ${className}`}
      {...props}
      style={{
        ...(isPrimary && {
          backgroundColor: 'var(--color-primary)',
          borderColor: 'var(--color-primary)',
          color: '#ffffff',
        }),
        ...props.style
      }}
    />
  );
};

export default CustomButton;
