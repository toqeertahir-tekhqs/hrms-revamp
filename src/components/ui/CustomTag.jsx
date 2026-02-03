import { Tag } from 'antd';

const CustomTag = ({ color, className = '', ...props }) => {
  // If color is a preset like 'green', 'red', etc., it will behave normally.
  // We can add a 'primary' type for theme-color tags.
  const isPrimary = color === 'primary';
  
  return (
    <Tag 
      {...props}
      className={`custom-tag ${className}`}
      style={{
        ...(isPrimary && {
          backgroundColor: 'var(--hover-bg)',
          color: 'var(--color-primary)',
          borderColor: 'var(--color-primary)',
        }),
        ...props.style
      }}
    />
  );
};

export default CustomTag;
