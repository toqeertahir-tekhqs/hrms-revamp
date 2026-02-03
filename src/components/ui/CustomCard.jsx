import { Card } from 'antd';

const CustomCard = ({ className = '', ...props }) => {
  return (
    <Card 
      className={`custom-card ${className}`}
      {...props}
      style={{
        background: 'var(--bg-container)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-color)',
        ...props.style
      }}
      styles={{
        header: {
          borderBottom: '1px solid var(--border-color)',
          color: 'var(--text-color)',
          ...props.styles?.header
        },
        body: {
          color: 'var(--text-color)',
          ...props.styles?.body
        },
        ...props.styles
      }}
    />
  );
};

export default CustomCard;
